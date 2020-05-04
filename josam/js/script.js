//меню
$(document).ready(function(){
	$.easing.def = "easeInOutQuad";
	$('li.button a').click(function(e){
		var dropDown = $(this).parent().next();
		$('.dropdown').not(dropDown).slideUp('slow');
		dropDown.slideToggle('slow');
		e.preventDefault();
	})	
});

//Удаление шапки сайта
let main = document.querySelector("main");
let middle = document.querySelector("header");

main.addEventListener('scroll', removeHeader);
function removeHeader(){
    let calcTop = $("main").scrollTop();
    if(calcTop >100){
middle.classList.add("removeHeader");
$(".mcontent").addClass("noOpacity");
    }
    else{
        middle.classList.remove("removeHeader");
    }
}