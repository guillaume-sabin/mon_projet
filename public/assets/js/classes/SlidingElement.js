'user strict';

var SlidingElement = function(e){

	this.DOMElement = document.querySelector(e);
	this.parent = this.DOMElement.parentNode;
	this.transition = getComputedStyle(this.DOMElement,null).getPropertyValue("transition");;
	this.position = getComputedStyle(this.DOMElement,null).getPropertyValue("position");
	this.visibility = getComputedStyle(this.DOMElement,null).getPropertyValue("visibility");
	this.translation = 0;
	this.delay = 0;
}

/*
* function
* @translation = int
* @attributs = {} (optional)
* @attributs.duration = int (time in ms) (optional)
* @attributs.delay = int (time in ms) (optional)
* @attributs.axe = string (optional)
*/
SlidingElement.prototype.slideIn = function(translation, attributs)
{
	// Check if we are on the page with this class
	if(this.parent.getAttribute('class') == 'has-sidebar')
	{
		// Change the value of the style element 'align-items' to 'stretch' (then the sidebar as the same height as the Content)
		this.parent.style.alignItems = 'stretch';

		this.translation = translation;
		// Delay AND Duration passed as arguments
		if(attributs.delay != undefined && attributs.duration != undefined)
		{
			this.setTransition(attributs.duration);
			this.delay = attributs.delay;

			setTimeout((function(){
				this.showElement('visible');
				this.setTranslation(translation, attributs.axe);
			}).bind(this), this.delay);
			return;
		}
		
		// ONLY Delay passed as argument
		else if(attributs.delay != undefined && attributs.duration == undefined)
		{
			setTimeout((function(){
				this.showElement('visible');
				this.setTranslation(translation, attributs.axe);
			}).bind(this), attributs.delay);
			return;	
		}
		// ONLY Duration passed as argument
		else if(attributs.delay == undefined && attributs.duration != undefined)
		{
			this.setTransition(attributs.duration);
			setTimeout((function(){
				this.showElement('visible');
				this.setTranslation(translation, attributs.axe);
			}).bind(this), this.delay);
			return;
		}
		
		// If both Duration and Delay are not set 
		this.setTranslation(translation);
	}
}

SlidingElement.prototype.setTransition = function(duration)
{
	// Set the transition for style.css #sidebar
	let transition = "all " + this.transformTime(duration) + "s";
	this.DOMElement.style.transition = transition;
	this.transition = getComputedStyle(this.DOMElement,null).getPropertyValue("transition");
}

SlidingElement.prototype.transformTime = function(e)
{
	return e/1000;
}

SlidingElement.prototype.setTranslation = function(translation, axe)
{
	// The axe of the translation must be as defined in style.css
	switch (axe)
	{
		case undefined:
		case 'x': 
		// Modify the property css translateX() of transform with the parameter passed in
		this.DOMElement.style.transform = 'translateX(' + translation + 'px)';
		break;

		case 'y':
		// Same for translateY()
		this.DOMElement.style.transform = 'translateY(' + translation + 'px)';
		break;
	}

	this.DOMElement.style.position = 'relative';
	this.position = getComputedStyle(this.DOMElement,null).getPropertyValue("position");
}

SlidingElement.prototype.showElement = function(visibility)
{
	this.DOMElement.style.visibility = visibility;
	this.visibility = visibility;
}