'use strict';

// Chargement du DOM
$(function(){

	/*
	* header parallax
	*/
	$('.header-container').parallax({imageSrc: '../img/mario.jpg'});

		/*
	* title in
	*/
	$('.header-container h1').delay(200).fadeTo(800, 1);


	/*
	*	nav Items
	*/
	$('.navLink').each(function(){
		var navItem = new SlidingText(this);
		navItem.createBorder('navItem');
		navItem.animation('.links-content');
	});

	/*
	* sidebar : slidingElement
	*/
	if($('#main-container').hasClass('has-sidebar') == true){
		var sidebar = new SlidingElement('#sidebar');
		sidebar.slideIn(0, {
			duration: 500,
			delay: 1000,
			axe: 'y'
		});
	}

	/*
	* sidebar : list
	*/
	let nodeLinks = document.querySelectorAll('.ws-link');
	for(var i = 0; i < nodeLinks.length; i++)
	{
		nodeLinks[i].addEventListener('click', function(){
			
			var content = new Content('.ws-container');
			content.getContent('portfolio.php');
		})
	}
	/*
	* ws-container in
	*/
	$('.ws-container p').delay(1200).fadeTo(800, 1);
});
