const fetch = require('node-fetch');

const api = "http://localhost:9000/corsproxy"
 

fetch(api, {
    headers: {
        "Content-Type": "text/html",
        "Target-URL" : "https://jsonplaceholder.typicode.com/todos/1",
    },
})
    .then(res => res.text())
    .then(body => console.log(body));