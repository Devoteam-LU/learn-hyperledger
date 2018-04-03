import api from "../api";

export const submitForm = params =>
  api({
    url: "UploadFile",
    request: {
      method: "POST",
      body: JSON.stringify({
        documentId: params.filename,
        description: "A document",
        validity: params.fileValidity,
        documentData: "lol",
        // authorizedBy: "resource:org.acme.biznet.Agent#AGENT0"
      })
    }
  });
