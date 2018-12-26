'use strict';

var Content = function(tag)
{
    this.DOMElement = document.querySelector(tag);
    this.timer = 200;
}

Content.prototype.getContent = function(data)
{
    $.getJSON(data.url + '/' + data.id)
    .done(function(jsonData){
        const IMGLINK = 'assets/img/';

        if(this.DOMElement.nodeName == 'P')
        {
            $('#' + this.DOMElement.id).fadeTo(this.timer, 0, function(){
                // Create a new container <img> and set his attributes
                var newHtmlElement = document.createElement('img');
                newHtmlElement.id = 'website';
                newHtmlElement.src = IMGLINK + jsonData.url;
                newHtmlElement.alt = jsonData.description;
                newHtmlElement.dataset.wsId = jsonData.id;
            
                // The "#ws-container" was <p> container, no replace with <img>
                this.DOMElement.replaceWith(newHtmlElement);

                // Show the new container
                $('#' + this.DOMElement.id).fadeTo(this.timer, 1, function(){
                    document.getElementById('ws-container').style.boxShadow = "inset 0px 0px 20px 6px rgba(0,0,0,0.75)";
                });
            }.bind(this));
        }

        // Check if the clicked link is a new one
        else if(this.DOMElement.dataset.wsId != jsonData.id)
        {
           new Promise(function(resolve, reject) {
               try{
                    $('#' + this.DOMElement.id).fadeTo(this.timer/2, 0, function() {
                        resolve();
                    })
               }
               catch(error){
                    reject(error);
               }
                
           }.bind(this))
           .then(() => {
                this.DOMElement.setAttribute('src', IMGLINK + jsonData.url);
                this.DOMElement.setAttribute('alt', jsonData.description);
                this.DOMElement.dataset.wsId = jsonData.id;
           })
           .then(() => {
                $('#' + this.DOMElement.id).fadeTo(this.timer*4, 1, function(){
                    document.getElementById('ws-container').style.boxShadow = "inset 0px 0px 20px 6px rgba(0,0,0,0.75)";
                }); 
           })
           // Call it only if there is an error in try{}
           .catch((error)=> {
               console.log(error);
           })
        }     
    }.bind(this));
}
