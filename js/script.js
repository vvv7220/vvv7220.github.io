let tabs = document.querySelector('.tabs');
tabs.addEventListener('click', fTabs);
function fTabs(event) {
    if (event.target.className == 'tabLink') {
        let dTab = event.target.getAttribute('data-tab');
        let tBody = document.querySelectorAll('.tab-b');
        for (let i = 0; i < tBody.length; i++) {
            if (dTab == i) {
                tBody[i].classList.toggle('open');
                console.log('test');
            }
            else {
                tBody[i].classList.remove('open');
            }
        }

    }
}

let dangerwrapp = document.querySelector(".dangerwrapp");
document.onscroll = () => {
    if ( document.documentElement.scrollTop > 1200) {
  let div = document.createElement('div');
  div.className = "alert";
 div.innerHTML = "Сучка!!! Вытащи ключ проворот из зацепления с маховиком двигателя!!!";
 dangerwrapp.prepend(div);
  setTimeout(() => div.remove(), 2000);
        }
    }

//Фотогаллерея
//Скролл
//let page = document.querySelector(".page");
//let gallery = document.querySelector(".gallery");
//let footer = document.querySelector("footer");
//window.addEventListener('scroll', removeHeader);
//function removeHeader(){
//    if(pageYOffset > 80){
//page.classList.add("pagedel");
//footer.classList.add("pagedel");
//gallery.classList.add("showgal");
//    }
//    else{
//        page.classList.remove("pagedel");
//        footer.classList.remove("pagedel");
//        gallery.classList.remove("showgal");
//    }
//    
//}
//Увеличение картинки
let picgal = document.querySelectorAll(".picgal");
let showgal = document.querySelectorAll(".showgal");
for(let i = 0; i < picgal.length; i++){
    picgal[i].addEventListener("click", function maxImage(){
    let imgdiv = document.createElement("div");
    this.classList.add("resize");
    imgdiv.className = "wrapimg";
    imgdiv.prepend(this);
    gallery.prepend(imgdiv);
  
});
}
    





















