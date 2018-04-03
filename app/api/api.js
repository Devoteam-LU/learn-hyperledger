import "whatwg-fetch";
import { hostUrl } from "./constants";

const api = params => {
  const { url = "", request } = params;
  const fetchUrl = `${hostUrl + url}`;
  return fetch(fetchUrl, {
    headers: {
      "Content-Type": "application/json"
    },
    ...request
  })
    .then(statusHelper)
    .then(response => response.json())
    .catch(error => error)
    .then(data => {
      return data;
    });
};

function statusHelper(response) {
  if (response.status >= 200 && response.status < 300) {
    return Promise.resolve(response);
  } else {
    return Promise.reject(new Error(response.statusText));
  }
}

export default api;
