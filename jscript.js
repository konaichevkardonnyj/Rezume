let page = document.querySelector('.page');
let themeButton = document.querySelector('.theme-button');
let pag = document.querySelector('.pag');
let pa = document.querySelector('.pa');
let paragraph = document.querySelector('p');
let image = document.getElementById("image");
//image.setAttribute('src', "files/10.jpg");
//imgs = "files/10.jpg"
themeButton.onclick = function() {
      page.classList.toggle('light-theme');
  page.classList.toggle('dark-theme'); 
  pag.classList.toggle('page-footer');
  pag.classList.toggle('page-foote'); 
  pa.classList.toggle('page-header');
  pa.classList.toggle('page-heade');
  image.src="files/11.jpg";
  //  image.src=imgs++;
};
console.log (paragraph.textContent);
function my_click()
{
  document.getElementById("image").src="files/10.jpg";
};

