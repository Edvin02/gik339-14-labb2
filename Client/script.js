const localUrl = 'http://localhost:3000/users';

fetch(localUrl)
     .then((response) => response.json())
     .then((data) => console.log(data))