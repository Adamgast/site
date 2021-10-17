"use strict"

// Меню бургер на чистом JS =======================================================================
const iconMenu = document.querySelector('.icon-menu');
const menuBody = document.querySelector('.menu__body');
if (iconMenu) {
	iconMenu.addEventListener("click", function(e){
		document.body.classList.toggle('_lock');
		iconMenu.classList.toggle('_active');
		menuBody.classList.toggle('_active');
	});
}
//====================================================================================


//ibg photo ======================================================================================
function ibg(){
	let ibg=document.querySelectorAll("._ibg");
  for (var i = 0; i < ibg.length; i++) {
	if(ibg[i].querySelector('img')){
		ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
	}
  }
}
ibg();
//=====================================================================================================


//Spoiler ============================================================

$(document).ready(function(){
	$('.top__title').click(function(event){
		$(this).toggleClass('_active').next().slideToggle(300);
	});
});

//=========================================================================
// slick slider ============================================================
$(document).ready(function(){
	$('.main-slider').slick({
		arrows:true,
		dots:true,
		slidesToShow:1,
		easing:'ease',
		touchThreshold:10,
  		focusOnSelect: true,
  		pauseOnDotsHover:true,
		responsive:[
			{
				breakpoint:600,
				settings: {
					dots:true,
					arrows: false,
					slidesToShow:1,
					adaptiveHeight: true,
				}
			}
		]

	});

});