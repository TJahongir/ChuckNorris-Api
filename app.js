const jokeForm = document.getElementById('jokeForm');
const jokeText = document.getElementById('jokeText');
const firstNameInput = document.getElementById('firstName');

jokeForm.addEventListener('submit',(e) => {
    e.preventDefault();
    const firstName = firstNameInput.value || 'Chuck Norris';

    const url = `https://api.chucknorris.io/jokes/random?name=${firstName}`;
    fetch(url)
        .then( res => {
            return res.json();
            
        }).then(data => {
            console.log(data);
            jokeText.innerHTML = data.value;
            jokeText.classList.add('jokeText');
        })
});
