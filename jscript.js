let page = document.querySelector('.page');
let themeButton = document.querySelector('.theme-button');
let pag = document.querySelector('.pag');
let pa = document.querySelector('.pa');
let paragraph = document.querySelector('p');

themeButton.onclick = function() {
    console.log('проверка')
  page.classList.toggle('light-theme');
  page.classList.toggle('dark-theme'); 
  pag.classList.toggle('page-footer');
  pag.classList.toggle('page-foote'); 
  pa.classList.toggle('page-header');
  pa.classList.toggle('page-heade');
};
console.log (paragraph.textContent);
