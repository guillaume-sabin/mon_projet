'use strict';

var Content = function(e){

    this.DOMElement = document.querySelector(e);
    this.img;
}

Content.prototype.getContent = function(content)
{
    var self = this;
    var href = window.location.href;
    
    $.getJSON(, function(callBack)
    {
        self.DOMElement.text('coucou');    
    });
    
}