// main.js
const update = document.querySelector('#update-button')

update.addEventListener('click', _ => {
    // Send PUT Request here
    const data = {
        name: 'Darth Vadar',
        quote: 'I find your lack of faith disturbing.'
    };
    fetch('/quotes', {
        method: 'put',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .then(() => {
        window.location.reload(true);
    });
});