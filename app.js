const jokeForm = document.getElementById('jokeForm');
const jokeText = document.getElementById('jokeText');
const firstNameInput = document.getElementById('firstName');
const lastNameInput = document.getElementById('lastName');

jokeForm.addEventListener('submit',(e) => {
    e.preventDefault();
    const firstName = firstNameInput.value || 'Chuck';
    const lastName = lastNameInput.value || 'Norris';

    const url = `https://api.chucknorris.io/jokes/random?firstName=${firstName}&lastName=${lastName}`;
    fetch(url)
        .then( res => {
            return res.json();
            
        }).then(data => {
            console.log(data);
            jokeText.innerHTML = data.value.joke;
            jokeText.classList.add('jokeText');
        })
});
