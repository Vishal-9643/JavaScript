const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) { // accessing each button.
    button.addEventListener('click', function (e) { // listing click event on button.
        if (e.target.id === 'grey') { // if clicked button id is matched with grey change background colour.
            body.style.backgroundColor = e.target.id;
        }
        if (e.target.id === 'pink') {
            body.style.backgroundColor = e.target.id;
        }
        if (e.target.id === 'orange') {
            body.style.backgroundColor = e.target.id;
        }
        if (e.target.id === 'violet') {
            body.style.backgroundColor = e.target.id;
        }
    });
});