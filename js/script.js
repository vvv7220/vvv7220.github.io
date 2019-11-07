let tabs = document.querySelector('.tabs');
// let tabLink = document.querySelectorAll('.tabLink');
tabs.addEventListener('click', fTabs);
function fTabs (event) {
// console.log(event);
// console.log(event.target.getAttribute('data-tab'));
    if(event.target.className == 'tabLink'){
let dTab = event.target.getAttribute('data-tab');
let tBody = document.querySelectorAll('tab-b');
for(let i = 0; i < tBody.length; i++){
    if(dTab == i){
        tBody[i].style.display = 'block';
        console.log('test');
    }
    else{
        tBody[i].style.display = 'none';
    }
}

    }
}