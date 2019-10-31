let tabLink = document.querySelector('.top_nav ul');
let tabBody = document.querySelectorAll('.tab-b');
tabLink.addEventListener('click', fTabs);
function fTabs (event) {
    if(event.target.className == 'tabLink'){
console.log(event);
let dataTab = event.target.getAttribute('data-tab');
for(let i = 0; i < tabBody.length; i++){
if(dataTab == i){
    tabBody[i].classList.toggle('open');
}
}
}
}
