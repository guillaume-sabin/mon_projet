'use strict';

var Content = function(tag)
{
    this.DOMElement = document.querySelector(tag);
    this.timer = 200;
}

Content.prototype.getContent = function(data)
{
    console.log(data);
    var self = this;
    /*
    $.getJSON(
        data.url, //+ '/' + data.id,
        self.showContent.bind(self)
    );
    */
    $.ajax({
        type: GET,
        url: data.url,
        success: self.showContent.bind(self),
        error: function(xhr, ajaxSettings, thrownError){
            console.log(chr.responseText);
        }
    })
}

Content.prototype.showContent = function(jsonData)
{
    const IMGLINK = 'assets/img/';
    console.log('inside showContent method');
    if(this.DOMElement.nodeName == 'P')
    {
        // Create a new container <img> and set his attributes
        var newHtmlElement = document.createElement('img');
        newHtmlElement.id = 'website';
        newHtmlElement.src = IMGLINK + jsonData.url;
        newHtmlElement.alt = jsonData.description;
        newHtmlElement.dataset.wsId = jsonData.id;
        
        // The "#ws-container" was <p> container, no replace with <img>
        this.DOMElement.replaceWith(newHtmlElement);

        // Show the new container
        $('#' + this.DOMElement.id).fadeTo(this.timer, 1);
        document.getElementById('ws-container').style.boxShadow = "inset 0px 0px 20px 6px rgba(0,0,0,0.75)";
    }

    // Check if the clicked link is a new one
    else if(this.DOMElement.dataset.wsId != jsonData.id)
    {
        // Hide the container before setting new params
        $('#' + this.DOMElement.id).fadeTo(this.timer, 0);
        
        // Delay the container's settings
        setTimeout((function(){
            this.DOMElement.setAttribute('src', IMGLINK + jsonData.url);
            this.DOMElement.setAttribute('alt', jsonData.description);
            this.DOMElement.dataset.wsId = jsonData.id;
        }).bind(this), this.timer);

        // Show the container 
        $('#' + this.DOMElement.id).fadeTo(this.timer, 1);
        document.getElementById('ws-container').style.boxShadow = "inset 0px 0px 20px 6px rgba(0,0,0,0.75)";
    }     
}