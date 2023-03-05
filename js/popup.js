const popup = document.querySelector('.popup');
const btn = document.querySelector('.banner_button');
const close_btn = document.querySelector('.close');

btn.addEventListener('click', () => {
    popup.classList.add('open');
})

close_btn.addEventListener('click', () => {
    popup.classList.remove('open');
})

