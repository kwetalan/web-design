let link = document.getElementById('contacts');
let icons = document.querySelector('.icons');
link.addEventListener('click', function (e) {
    link.style.display = 'none';
    icons.style.display = 'flex';
});