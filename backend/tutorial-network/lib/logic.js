/**
 * Validate docs
 * @param {org.acme.biznet.Validate} validate - validate the file
 * @transaction
 */
function validateFile(validate) {
    validate.file.validatedBy = validate.validatedBy;
    validate.file.approved = validate.approved;
    return getAssetRegistry('org.acme.biznet.CustomerDocument')
        .then(function (assetRegistry) {
            return assetRegistry.update(validate.file);
        });
}

/**
 * Track the trade of a commodity from one trader to another
 * @param {org.acme.biznet.Certify} certify - the trade to be processed
 * @transaction
 */
function certifyFile(certify) {
    certify.file.authorizedBy = certify.authorizedBy;
    return getAssetRegistry('org.acme.biznet.CustomerDocument')
        .then(function (assetRegistry) {
            return assetRegistry.update(certify.file);
        });
}

/**
 * Track the trade of a commodity from one trader to another
 * @param {org.acme.biznet.UploadFile} file - new file
 * @transaction
 */
function uploadFile(file) {

    return getAssetRegistry('org.acme.biznet.CustomerDocument')
        .then(function (AssetRegistry) {
            // Get the factory for creating new asset instances.
            var factory = getFactory();
            // Create the Evidence.
            var newFile = factory.newResource('org.acme.biznet', 'CustomerDocument',
                file.documentId);
            newFile.validity = file.validity
            newFile.description = file.description
            // Add the asset to the asset registry.
            return AssetRegistry.add(newFile);
        })

}

/**
 * Remove all high volume commodities
 * @param {org.acme.biznet.RemoveInvalidFiles} remove - the remove to be processed
 * @transaction
 */
function removeUnapprovedFiles(remove) {
    return getAssetRegistry('org.acme.biznet.CustomerDocument')
        .then(function (assetRegistry) {
            return query('selectFileByApproval')
                .then(function (results) {

                    var promises = [];

                    for (var n = 0; n < results.length; n++) {
                        var certify = results[n];

                        // emit a notification that a trade was removed
                        var removeFiles = getFactory().newEvent('org.acme.biznet', 'RemoveFiles');
                        removeFiles.file = certify;
                        emit(removeFiles);

                        // remove the commodity
                        promises.push(assetRegistry.remove(certify));
                    }

                    // we have to return all the promises
                    return Promise.all(promises);
                });
        });
}