/* fax.js v0.1.0 | (c) 2022 by Aldrin Caballero */

// Selects an element in the DOM
function $(selector) {
  const elements = document.querySelectorAll(selector);
  return elements.length > 1 ? elements : document.querySelector(selector);
}

// A collection of functions for making HTTP requests and uploading files
const fax = {
  // Makes a GET request to the specified URL with optional query parameters
  async get(url, params) {
    const xhr = new XMLHttpRequest();
    const requestUrl = buildUrlWithParams(url, params);
    xhr.open("GET", requestUrl, true);
    xhr.send(null);
    return await handleResponse(xhr);
  },

  // Makes a POST request to the specified URL with optional JSON data
  async post(url, data) {
    const xhr = new XMLHttpRequest();
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(JSON.stringify(data));
    return await handleResponse(xhr);
  },

  // Reads a file from the local file system and passes its contents to a callback function
  readFile(file, callback) {
    const reader = new FileReader();
    reader.onload = (event) => {
      callback(event.target.result);
    };
    reader.readAsDataURL(file);
  },

  // Uploads a file to the specified URL using a FormData object
  sendFile(url, file, callback) {
    const formData = new FormData();
    formData.append("file", file);
    const xhr = new XMLHttpRequest();
    xhr.open("POST", url, true);
    xhr.onload = () => {
      callback(xhr.response);
    };
    xhr.send(formData);
  },
};

// Makes an HTTP request with the specified configuration object
async function Fax(config) {
  const xhr = new XMLHttpRequest();
  const requestUrl = config.url;
  xhr.open(config.method, requestUrl, true);
  xhr.send(null);
  return await handleResponse(xhr);
}

// Helper function for handling the response from an HTTP request
async function handleResponse(xhr) {
  return new Promise((resolve, reject) => {
    xhr.onload = () => {
      const headers = parseHeaders(xhr.getAllResponseHeaders());
      const status = xhr.status;
      const statusText = xhr.statusText;
      const data = xhr.response;
      const response = Object.freeze({
        data,
        headers,
        status,
        statusText,
        "request-type": "XMLHttpRequest",
      });
      resolve(response);
    };
    xhr.onerror = () => {
      reject(new Error("An error occurred during XHR request."));
    };
  });
}

// Parses the headers from an HTTP response into an object
function parseHeaders(rawHeaders) {
  const headers = {};
  rawHeaders
    .trim()
    .split(/[\r\n]+/)
    .forEach((line) => {
      const parts = line.split(": ");
      const key = parts.shift();
      const value = parts.join(": ");
      headers[key] = value;
    });
  return headers;
}

// Builds a URL with query parameters from a base URL and an object of parameter values
function buildUrlWithParams(baseUrl, params) {
  let url = baseUrl;
  if (params != undefined && typeof params == "object") {
    const queryString = Object.keys(params)
      .map((key) => `${key}=${encodeURIComponent(params[key])}`)
      .join("&");
    url += url.indexOf("?") === -1 ? "?" : "&";
    url += queryString;
  }
  return url;
}
