let page = document.querySelector('.page');
let themeButton = document.querySelector('.theme-button');
let pag = document.querySelector('.pag');
let pa = document.querySelector('.pa');
let paragraph = document.querySelector('p');
let img = document.getElementById('image');

themeButton.onclick = function() {
    console.log('проверка')
  page.classList.toggle('light-theme');
  page.classList.toggle('dark-theme'); 
  pag.classList.toggle('page-footer');
  pag.classList.toggle('page-foote'); 
  pa.classList.toggle('page-header');
  pa.classList.toggle('page-heade');
  img.classList.toggle('0');
  img.classList.toggle('1');
};
console.log (paragraph.textContent);
