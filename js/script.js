let tabLink = document.querySelectorAll('a[href="tab-link"]');
let tabBody = document.querySelectorAll('tab-b');
for(let i = 0; i < tabLink.length; i++){
    tabLink[i].onclick = openTab;
}
function openTab () {
   console.log('this');
}
