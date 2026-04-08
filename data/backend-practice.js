
//save the request in a variable
const xhr = new XMLHttpRequest();

// * to wait for the response, 
// 1st param-event to wait for, 
// 2nd - function we want to run

xhr.addEventListener('load',()=>{  
  console.log(xhr.response);
}); //load means response has loaded


//to set up the request
xhr.open('GET', 'https://supersimplebackend.dev'); 
//two params, 1st param-type of message, 
// 2nd param - where to send the HTTP message(give url)


// to send the message, import at checkout.js
xhr.send();
// to get the response, we need to wait. go above *
