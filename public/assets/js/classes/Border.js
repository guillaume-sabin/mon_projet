'use strict';

// Border object that is used for SlidingObject
var Border = function()
{
	this.containerExist = false;
	this.DOMElement = '';
}

// Create a <span> that is use to animate the border
Border.prototype.createContainer = function(parentDOM, className)
{
		var borderContainer = document.createElement('span');
		borderContainer.setAttribute('class', className);
		parentDOM.appendChild(borderContainer);
		this.containerExist = true;
		this.DOMElement = borderContainer;
}
