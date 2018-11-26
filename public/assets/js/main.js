'use strict';

// Chargement du DOM
$(function(){

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
	* PORTFOLIO ANIMATIONS
	*/
	if($('#main-container').hasClass('has-sidebar') == true)
	{
		/*
		* sidebar : list and container(s)
		*/
		let nodeLinks = document.querySelectorAll('.ws-link');

		if(matchMedia('(min-width:320px)').matches && matchMedia('(max-width:1023px)').matches)
		{
			setTimeout(function(){

				for(var i = 0; i < nodeLinks.length; i++)
				{
					var parentId = '#' + nodeLinks[i].id;
					var childId = parentId + ' h3';
					
					var container = new Container();
					var containerId = 'individual-website-container-' + nodeLinks[i].id.slice(5);
					
					container.createContainer('img', containerId);
					container.getContent({

						url : 'portfolio',
						id : nodeLinks[i].id.slice(5)
					});
					
					container.showContainer(childId, parentId);
					
				}
			}, 0);
		}

		else{

			/*
			* sidebar : slidingElement
			*/
			var sidebar = new SlidingElement('#sidebar');
			sidebar.slideIn(0, {
				duration: 500,
				delay: 1000,
				axe: 'y'
			}); 

			setTimeout(function(){

				for(var i = 0; i < nodeLinks.length; i++)
				{
					nodeLinks[i].addEventListener('click', function()
					{
						document.getElementById('ws-informations').style.visibility = 'visible';
						var content = new Content('#website');
					
						content.getContent({

							url : 'portfolio',
							id : this.id.slice(5)
						});
					})	
				}
			}, 0);
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
				var delay = 800;
				var container = new Container();
				container.setFadeDelay(delay);
				container.lockLinks();
				container.createContainer('div', 'description');
				container.getContent({

					url : 'portfolio',
					id : websiteId
				});
				container.showContainer('#ws-container', '#website');
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
							container.lockLinks();
						}.bind(container), delay)
					}	
				});
			}, delay);
		});
	}

	/*
	* HOME ANIMATIONS
	*/
	var verticalTimelines = document.getElementsByClassName("js-cd-timeline"),
		verticalTimelinesArray = [],
		scrolling = false;
	if( verticalTimelines.length > 0 ) {
		for( var i = 0; i < verticalTimelines.length; i++) {
			(function(i){
				verticalTimelinesArray.push(new VerticalTimeline(verticalTimelines[i]));
			})(i);
		}

		//show timeline blocks on scrolling
		window.addEventListener("scroll", function(event) {
			if( !scrolling ) {
				scrolling = true;
				(!window.requestAnimationFrame) ? setTimeout(checkTimelineScroll, 250) : window.requestAnimationFrame(checkTimelineScroll);
			}
		});
	}
	
	function checkTimelineScroll() {
		verticalTimelinesArray.forEach(function(timeline){
			timeline.showBlocks();
		});
		scrolling = false;
	};
});
