'use strict';

// Obj
var SlidingText = function(e)
{
	this.DOMElement 	= e;
	this.animationDelay = 300;
	this.textContainer 	= document.querySelector(this.class + ' .links-content');
	// Must be instanced to use the sliding effect
	this.border	= false;
}

// Create the border's container (must be call before the animation)
SlidingText.prototype.createBorder = function(className)
{
	if(isNaN(className))
	{
		this.border = new Border();
		this.border.createContainer(this.DOMElement, className);
		return;
	}

		console.error('The arguments of the method createContainer must be string type without number');
}

// Animation
SlidingText.prototype.animation = function(contentToWrap)
{
	// Create link to the parent
	let parentClassSelector = '.' + this.DOMElement.className;

	if(this.border.containerExist)
	{
		// Create link to the border
		let borderClassSelector = '.' + this.border.DOMElement.className;

		// Wrap every letter in a span
		$(parentClassSelector + ' ' + contentToWrap).each(function(){
			$(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
		});

		anime.timeline()
		.add({
			targets: borderClassSelector,
			scaleX: [0,1],
			opacity: [0.5,1],
			easing: "easeInOutExpo",
			duration: 900,
		})
		.add({
			targets: parentClassSelector,
			opacity: [0,1],
			translateX: [40,0],
			translateZ: 0,
			scaleX: [0.3, 1],
			easing: "easeOutExpo",
			duration: 800,
			offset: '-=600',
			delay: function(el, i) {
				return 150 + 25 * i;
			}
		})

		return;
	}

	// Default animation if there is no border for the SlidingText
	$(parentClassSelector).css('opacity', 0)
	$(parentClassSelector).delay(200).fadeTo(800, 1);
}
