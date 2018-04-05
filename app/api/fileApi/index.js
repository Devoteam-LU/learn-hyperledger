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
        documentData: params.fileData,
        authorizedBy: params.user
      })
    }
  });

export const getFiles = params =>
  api({
    url: "queries/selectFiles",
    request: {
      method: "GET"
    }
  });
