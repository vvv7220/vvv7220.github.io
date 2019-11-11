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

