'use strict';

// Chargement du DOM
$(function(){

	/*
	* header parallax
	*/
	//$('.header-container').parallax({imageSrc: '../img/mario.jpg'});

	/*
	* title in
	*/
	$('.header-container h1').delay(200).fadeTo(800, 1);


	/*
	* nav Items
	*/
	$('.navLink').each(function()
	{
		var navItem = new SlidingText(this);
		navItem.createBorder('navItem');
		navItem.animation('.links-content');
	});

	/*
	* sidebar : slidingElement
	*/
	if($('#main-container').hasClass('has-sidebar') == true)
	{
		var sidebar = new SlidingElement('#sidebar');
		sidebar.slideIn(0, {
			duration: 500,
			delay: 1000,
			axe: 'y'
		});
	}

	/*
	* sidebar : list and container
	*/
	let nodeLinks = document.querySelectorAll('.ws-link');
	for(var i = 0; i < nodeLinks.length; i++)
	{
		nodeLinks[i].addEventListener('click', function()
		{
			document.getElementById('ws-informations').style.visibility = 'visible';
			var content = new Content();
			
			content.getContent({

				url : 'portfolio',
				id : this.id
			});
		})
	}

	/*
	* ws-container in
	*/
	$('#website').delay(1200).fadeTo(1200, 1);
	/*
	* Add listenner on #ws-informations
	* And create/remove the container that will show description
	*/
	document.getElementById('ws-informations').addEventListener('click', function()
	{
		var websiteId = document.getElementById('website').dataset.wsId;
		
		if(websiteId != undefined && document.getElementById('description') === null)
		{
			$('#ws-informations').prop('disabled', true);
			var delay = 800;
			var container = new Container();
			container.createContainer('div', 'description');
			container.getContent({

				url : 'portfolio/informations',
				id : websiteId
			});
			container.showContainer('#ws-container', '#website');
			$('#description').fadeTo(delay, .8);
		}

		window.setTimeout(function()
		{
			document.getElementById('close-tab').addEventListener('click', function()
			{
				var websiteId = document.getElementById('website').dataset.wsId;

				if(websiteId != undefined)
				{
					$('#description').fadeTo(delay, 0);

					window.setTimeout(function()
					{
						var parentNode = document.getElementById('ws-container');
						var childNode = document.getElementById('description');
						parentNode.removeChild(childNode);
						$('#ws-informations').prop('disabled', false);
						$('#website').removeClass('blur');

					}, delay)
				}	
			});
		}, delay);
	});

/*
	$('#ws-informations').hover(function()
	{
		var websiteId = document.getElementById('website').dataset.wsId;
		
		if(websiteId != undefined)
		{
			var container = new Container();
			container.createContainer('div', 'description');
			container.getContent({

				url : 'portfolio/informations',
				id : websiteId
			});
			container.showContainer('#ws-container', '#website');
			$('#description').fadeTo(800, .8);
		}
		

	}, function()
	{
		var websiteId = document.getElementById('website').dataset.wsId;

		if(websiteId != undefined)
		{
			var delay = 800;
			$('#description').fadeTo(delay, 0);

			window.setTimeout(function()
			{
				var parentNode = document.getElementById('ws-container');
				var childNode = document.getElementById('description');
				parentNode.removeChild(childNode);
				$('#website').removeClass('blur');

			}, delay)
		}	
	})*/
});
