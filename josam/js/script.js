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
main.onmouseover = setTimeout(removeHeader, 20000);
function removeHeader(){
middle.classList.add("middleFixed");
}