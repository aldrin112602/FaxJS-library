## FaxJS-library
Is a Promise-based HTTP client for browsers that uses XMLHttpRequest.

## Features
<ul>
<li>Make XMLHttpRequests from the browser</li>
<li>Supports the Promise API</li>
<li>Intercept request and response</li>
<li>Transform request and response data</li>
<li>Cancel requests</li>
<li>Automatic transforms for JSON data</li>
<li>Client side support for protecting against XSRF</li>
</ul>

## View full documentations here 
#### [FaxJS-library-documentation](https://fax-js-http-apis.aldrin23.repl.co/)

### [Download FaxJS](https://fax-js-http-apis.aldrin23.repl.co/fax.min.js)

## Adding FaxJS in your HTML file
The Fax JS library is a single JavaScript file, and you reference it with the HTML <code><script></code> tag (notice that the <code><script></code> tag should be inside the head section):
```html
 <head>
    <script src="fax.min.js"></script>
 </head>
```
<b>Note:</b><br>
You can download FaxJS library from the link above.
<br><br>
<b>Tip:</b> <br>
Place the downloaded file in the same directory as the pages where you wish to use it.
<br><br>
In this tutorials, we were going to used <code>[{JSON} Placeholder](https://jsonplaceholder.typicode.com/)</code>.
A free fake API for testing and prototyping.
<br><br><br>
Performing a <code>GET</code> request
```javascript
fax.get("https://jsonplaceholder.typicode.com/comments?postId=1")
      .then(function (response) {
       // Handle success 
       console.log(response);
      })
      .catch(function (error) {
      // Handle error
      console.error(error)
      })
      .then(function () {
       // Always execute 
      });
      
      
       // Optionally the request above could also be done as
      fax.get("https://jsonplaceholder.typicode.com/comments", {
         params: {
              postId : 1
         }
      })
      .then(function (response) {
       // Handle success 
       console.log(response);
      })
      .catch(function (error) {
      // Handle error
      console.error(error)
      })
      .then(function () {
       // Always execute 
      });
      
      
      // Want to use async/await? 
      // Add the `async` keyword to your outer function/method. 
      async function getUser() {
       try {
         const response = await fax.get("https://jsonplaceholder.typicode.com/comments?postId=1");
         // Handle Success 
         console.log(response);
       } 
       catch (error) {
       // Handle error
         console.error(error);
       }
     }
```
<b>Note:</b><br>
<code>[async/await](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)</code> is part of ECMAScript 2017 and is not supported in Internet Explorer and older browsers, so use with caution.

<br><br>
Performing a <code>POST</code> request

 ```javascript     
      fax.post("https://jsonplaceholder.typicode.com/comments", {
            firstName: 'Aldrin',
            lastName: 'Caballero',
            age: 19
      })
      .then(function (response) {
       // Handle success 
       console.log(response);
      })
      .catch(function (error) {
      // Handle error
      console.error(error)
      })
      .then(function () {
       // Always execute 
      });
      
      
      
      // Want to use async/await? 
      // Add the `async` keyword to your outer function/method. 
      async function postData() {
       try {
         const response = await fax.post("https://jsonplaceholder.typicode.com/comments", {
            firstName: 'Aldrin',
            lastName: 'Caballero',
            age: 19
      });
      
         // Handle Success 
         console.log(response);
       } 
       catch (error) {
       // Handle error
         console.error(error);
       }
     }

```







