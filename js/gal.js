let next = document.querySelector(".gal-1 .next");
let back = document.querySelector(".gal-1 .back");
let autoS = document.querySelector(".slideShow_01");
let pics = document.querySelectorAll(".gal-1 .pics img");
let pic = document.querySelector(".gal-1 .pics");
let startBtn = document.querySelector(".startBtn01");
let stopBtn = document.querySelector(".stopBtn01");
let sec = document.querySelector('main');
next.onclick = nextImg;
back.onclick = backImg;
let i = 0;
//Слайдер 1

//Кнопка Вперед
function nextImg(){
    pics[i].classList.remove('showed');
    i++;
        if(i >= pics.length){
        i = 0;
    }
    pics[i].classList.add('showed');

    
}
//Кнопка Назад
function backImg(){
    pics[i].classList.remove('showed');
    i--;
    if(i === 0){
        i = pics.length - 1;
    }
    pics[i].classList.add('showed');
    
}
//Кнопка Слайд шоу
let autoSlider = function(){
    setInterval(nextImg, 5000);
}

autoS.onclick = function(){
    autoSlider = setInterval(nextImg, 5000);
    pic.classList.add('bigPic');
    startBtn.classList.add('hidden');
    stopBtn.classList.add('show');
    back.classList.add("hidden");
    next.classList.add("hidden");
//    for(s = 0; s < sec.length; s++){
    sec.classList.add('op');
    console.log(sec);  
//    }
}


stopBtn.onclick = function(){
    autoSlider = clearInterval(autoSlider);
    pic.classList.remove('bigPic');
    startBtn.classList.remove('hidden');
    stopBtn.classList.remove('show');
     back.classList.remove("hidden");
    next.classList.remove("hidden");
    sec.classList.remove('op');
}

//Слайдер 2

let next2 = document.querySelector(".gal-2 .next");
let back2 = document.querySelector(".gal-2 .back");
let autoS2 = document.querySelector(".slideShow_02");
let pics2 = document.querySelectorAll(".gal-2 .pics img");
let pic2 = document.querySelector(".gal-2 .pics");
let startBtn02 = document.querySelector(".startBtn02");
let stopBtn02 = document.querySelector(".stopBtn02");
next2.onclick = nextImg02;
back2.onclick = backImg02;
let k = 0;
//Слайдер 1

//Кнопка Вперед
function nextImg02(){
    pics2[k].classList.remove('showed');
    k++;
        if(k >= pics2.length){
        k = 0;
    }
    pics2[k].classList.add('showed');

    
}
//Кнопка Назад
function backImg02(){
    pics2[k].classList.remove('showed');
    k--;
    if(k === 0){
        k = pics2.length - 1;
    }
    pics2[k].classList.add('showed');
    
}
//Кнопка Слайд шоу
let autoSlider2 = function(){
    setInterval(nextImg02, 5000);
}

autoS2.onclick = function(){
    autoSlider2 = setInterval(nextImg02, 5000);
    pic2.classList.add('bigPic');
    startBtn02.classList.add('hidden');
    stopBtn02.classList.add('show');
    back2.classList.add("hidden");
    next2.classList.add("hidden");
    console.log("test");
}


stopBtn02.onclick = function(){
    autoSlider2 = clearInterval(autoSlider2);
    pic2.classList.remove('bigPic');
    startBtn02.classList.remove('hidden');
    stopBtn02.classList.remove('show');
     back2.classList.remove("hidden");
    next2.classList.remove("hidden");
    console.log("test");
}


//Слайдер 3
let next3 = document.querySelector(".gal-3 .next");
let back3 = document.querySelector(".gal-3 .back");
let autoS3 = document.querySelector(".slideShow_03");
let pics3 = document.querySelectorAll(".gal-3 .pics img");
let pic3 = document.querySelector(".gal-3 .pics");
let startBtn03 = document.querySelector(".startBtn03");
let stopBtn03 = document.querySelector(".stopBtn03");
next3.onclick = nextImg03;
back3.onclick = backImg03;
let p = 0;
//Слайдер 1

//Кнопка Вперед
function nextImg03(){
    pics3[p].classList.remove('showed');
    p++;
        if(p >= pics3.length){
        p = 0;
    }
    pics3[p].classList.add('showed');

    
}
//Кнопка Назад
function backImg03(){
    pics3[p].classList.remove('showed');
    p--;
    if(p === 0){
        p = pics3.length - 1;
    }
    pics3[p].classList.add('showed');
    
}
//Кнопка Слайд шоу
let autoSlider3 = function(){
    setInterval(nextImg03, 5000);
}

autoS3.onclick = function(){
    autoSlider3 = setInterval(nextImg03, 5000);
    pic3.classList.add('bigPic');
    startBtn03.classList.add('hidden');
    stopBtn03.classList.add('show');
    back3.classList.add("hidden");
    next3.classList.add("hidden");
}


stopBtn03.onclick = function(){
    autoSlider3 = clearInterval(autoSlider3);
    pic3.classList.remove('bigPic');
    startBtn03.classList.remove('hidden');
    stopBtn03.classList.remove('show');
     back3.classList.remove("hidden");
    next3.classList.remove("hidden");
//    console.log("test");
}


//Слайдер в шапке сайта
let hpics = document.querySelectorAll(".wheader img");
let m = 0;
  setInterval(function (){
    hpics[m].classList.remove("showed");
    m++;
    if(m >= hpics.length){
        m = 0;
    }
    hpics[m].classList.add("showed");
    
//    console.log(hpics);
}, 5000);

  
let pl = document.querySelector('audio');
console.log(pl);








