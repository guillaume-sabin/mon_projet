'use strict';

// Border object that is used for SlidingObject
var Border = function(myDocument)
{
	this.containerExist = false;
	this.DOMElement = '';
	this.document = myDocument || document;
}

Border.prototype.createSpan = function(cssClassName){
	let borderContainer = this.document.createElement('span');
	borderContainer.setAttribute('class', cssClassName);
	return borderContainer;
}

Border.prototype.addElement = function(parentDOM, element) {
	parentDOM.appendChild(element);
	return element;
}

Border.prototype.createContainer = function(parentDOM, cssClassName) {
	this.DOMElement = this.addElement(parentDOM, this.createSpan(cssClassName))
	this.containerExist = true;
}

if (typeof module != "undefined" && module.exports) {
	module.exports = Border;
}
