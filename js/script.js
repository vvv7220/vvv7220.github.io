let tabLink = document.querySelector('.top_nav ul');
let tabBody = document.querySelectorAll('.tab-b');
tabLink.addEventListener('click', fTabs);
function fTabs(event) {
    if (event.target.className == 'tabLink') {
        console.log(event);
        let dataTab = event.target.getAttribute('data-tab');
        for (let i = 0; i < tabBody.length; i++) {
            if (dataTab == i) {
                tabBody[i].classList.toggle('open');
            }
        }
    }
}


let $grid = $('.grid').masonry({

    itemSelector: '.grid-item',
    columnWidth: '.grid-item',
    percentPosition: true

});


// change is-checked class on buttons
$('.button-group').each(function (i, buttonGroup) {
    var $buttonGroup = $(buttonGroup);
    $buttonGroup.on('click', 'button', function () {
        $buttonGroup.find('.is-checked').removeClass('is-checked');
        $(this).addClass('is-checked');
    });
});