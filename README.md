# FaxJS Library

FaxJS is a Promise-based HTTP client for browsers that uses XMLHttpRequest. It allows you to make XMLHttpRequests from the browser and supports the Promise API, making it easy to work with asynchronous code. It also includes several features such as intercepting requests and responses, transforming request and response data, cancelling requests, and protecting against XSRF.

## Features

- Make XMLHttpRequests from the browser
- Supports the Promise API
- Intercept request and response
- Transform request and response data
- Cancel requests
- Automatic transforms for JSON data
- Client-side support for protecting against XSRF

## Adding FaxJS to Your HTML File

To add FaxJS to your HTML file, simply include the following code in the head section of your HTML file:

```html
<head>
  <script src="fax.min.js"></script>
</head>
```

Make sure to download the fax.min.js file and place it in the same directory as your HTML file.

## Performing a `GET` Request

To perform a `GET` request using FaxJS, by using `fax.get()` method. Here's an example:

```javascript
fax
  .get("https://jsonplaceholder.typicode.com/comments?postId=1")
  .then(function (response) {
    // Handle success
    console.log(response);
  })
  .catch(function (error) {
    // Handle error
    console.error(error);
  })
  .then(function () {
    // Always execute
  });
```

You can also pass in a configuration object to the `fax.get()` method, like this:

```javascript
fax
  .get("https://jsonplaceholder.typicode.com/comments", {
    params: {
      postId: 1,
    },
  })
  .then(function (response) {
    // Handle success
    console.log(response);
  })
  .catch(function (error) {
    // Handle error
    console.error(error);
  })
  .then(function () {
    // Always execute
  });
```

If you prefer to use `async/await`, you can do that too:

```javascript
async function getUser() {
  try {
    const response = await fax.get(
      "https://jsonplaceholder.typicode.com/comments?postId=1"
    );
    // Handle success
    console.log(response);
  } catch (error) {
    // Handle error
    console.error(error);
  }
}
```

### Note that async/await is not supported in Internet Explorer and older browsers.

## Performing a POST Request

To perform a `POST` request using FaxJS, you can use the `fax.post(`) method. Here's an example:

```javascript
fax
  .post("https://jsonplaceholder.typicode.com/comments", {
    firstName: "Aldrin",
    lastName: "Caballero",
    age: 19,
  })
  .then(function (response) {
    // Handle success
    console.log(response);
  })
  .catch(function (error) {
    // Handle error
    console.error(error);
  })
  .then(function () {
    // Always execute
  });
```

Again, If you prefer to use `async/await`, you can do that too:

```javascript
async function postData() {
  const body = {
    firstName: "Aldrin",
    lastName: "Caballero",
    age: 19,
  };
  try {
    const response = await fax.post(
      "https://jsonplaceholder.typicode.com/comments",
      body
    );
    // Handle success
    console.log(response);
  } catch (error) {
    // Handle error
    console.error(error);
  }
}
```
