import api from "../api";

export const validateFile = params =>
  api({
    url: "Validate",
    request: {
      method: "POST",
      body: JSON.stringify({
        file: params.documentId,
        approved: Boolean(params.isApproved),
        validatedBy: params.user
      })
    }
  });
