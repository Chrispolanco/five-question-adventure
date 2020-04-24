const BASE_URL = 'localhost:3000';
fetch(`${BASE_URL}/test`)
  .then(response => response.json())
  .then(parsedResponse => console.log(parsedResponse));