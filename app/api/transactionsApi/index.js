import api from "../api";

export const getTransactions = () =>
  api({
    url: "system/historian",
    request: {
      method: "GET"
    }
  });
