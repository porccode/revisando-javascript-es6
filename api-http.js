const url = 'https://jsonplaceholder.typicode.com/posts';
const options = {
    method: 'GET',
    body: '{"title: "JavaScript"}',
    headers: {
        "Content-Type": "application/json; charset=UTF-8"
    }
}

fetch(url, options)
.then(response => response.json())
.then(json => console.log(json))