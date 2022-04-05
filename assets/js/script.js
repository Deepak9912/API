const API_KEY = "7AAn-8Uzd0xqjBXBx-JS_CvBqqs";
const API_URL = "https://ci-jshint.herokuapp.com/api";
//getting the modal from bootstrap using modal //
const resultModal = new bootstrap.Modal(document.getElementById("resultsModal"));

document.getElementById("status").addEventListener("click", e => getStatus(e));

async function getStatus(e){
    const queryString = `${API_URL}?api_key=${API_KEY}`;

    const response = await fetch(queryString);

    const data = await response.json();

    //this will show the expriy date of the API//
    if(response.ok) {
        console.log(data.expiry);
    }
}

