# FaxJS-library
Is a Promise-based HTTP client for browsers that uses XMLHttpRequest.

# Features
Make XMLHttpRequests from the browser
Supports the Promise API
Intercept request and response
Transform request and response data
Cancel requests
Automatic transforms for JSON data
Client side support for protecting against XSRF


# Performing a GET request
// Make a request for a user with a given ID
fax.get('/user?ID=12345')
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });

// Optionally the request above could also be done as
fax.get('/user', {
    params: {
      ID: 12345
    }
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  })
  .then(function () {
    // always executed
  });  

// Want to use async/await? Add the `async` keyword to your outer function/method.
async function getUser() {
  try {
    const response = await fax.get('/user?ID=12345');
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}







