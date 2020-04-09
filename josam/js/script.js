$(document).ready(function(){
	$.easing.def = "easeInOutQuad";
	$('li.button a').click(function(e){
		var dropDown = $(this).parent().next();
		$('.dropdown').not(dropDown).slideUp('slow');
		dropDown.slideToggle('slow');
		e.preventDefault();
	})	
});

//Скролл страницы и фиксация меню
let section = document.querySelector("main");
let middle = document.querySelector("header");
section.onmouseover = function(){
middle.classList.add("middleFixed");
}
