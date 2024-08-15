console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

let submitBtn = document.getElementById('submitSearch');
let searchInput = document.getElementById('searchWord');
let image = document.querySelector('img');
let feedback = document.getElementById('feedback');


// Exercise 2-4 Section
console.log("EXERCISE 2-4:\n==========\n");

let giphyApiKey = 'wpL07i7meZ0nmr0Idu4PpcZBQaD75Jj2';
let baseUrl = 'https://api.giphy.com/v1/gifs/translate';

submitBtn.addEventListener('click', () => {
    let urlToFetch = (`${baseUrl}?api_key=${giphyApiKey}&s=${searchInput.value}`);

    fetch(urlToFetch)

    .then((response) => {
        if(response.ok) {
            return response.json();
        }
    })
    .then((responseBody) => {
        image.src = responseBody.data.images.original.url;
        searchInput.value = '';
        feedback.textContent = '';
    })
    .catch((err) => {
        console.error(err);
        feedback.textContent = err.message;
    });
});