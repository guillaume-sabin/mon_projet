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
           let that = this;
           new Promise(function(resolve, reject) {
            $('#' + that.DOMElement.id).fadeTo(that.timer/2, 0, function() {
                resolve();
            })
           }).then(function(){
            that.DOMElement.setAttribute('src', IMGLINK + jsonData.url);
            that.DOMElement.setAttribute('alt', jsonData.description);
            that.DOMElement.dataset.wsId = jsonData.id;
           }).then(function(){
            $('#' + that.DOMElement.id).fadeTo(that.timer*4, 1, function(){
                document.getElementById('ws-container').style.boxShadow = "inset 0px 0px 20px 6px rgba(0,0,0,0.75)";
            }); 
           })

          /*  var loadDatas = function(){
                // Hide the container before setting new params
                return $('#' + this.DOMElement.id).fadeTo(this.timer/2, 0, function(){
    
                    this.DOMElement.setAttribute('src', IMGLINK + jsonData.url);
                    this.DOMElement.setAttribute('alt', jsonData.description);
                    this.DOMElement.dataset.wsId = jsonData.id;
                }.bind(this));
            }.bind(this);
            
            $.when(loadDatas()).done(function(){
                // Show the container 
                $('#' + this.DOMElement.id).fadeTo(this.timer*4, 1, function(){
                    document.getElementById('ws-container').style.boxShadow = "inset 0px 0px 20px 6px rgba(0,0,0,0.75)";
                });      
            }.bind(this));*/
            /*
            $('#' + this.DOMElement.id).promise().done(function(){
                // Show the container 
                $('#' + this.DOMElement.id).fadeTo(this.timer*4, 1, function(){
                    document.getElementById('ws-container').style.boxShadow = "inset 0px 0px 20px 6px rgba(0,0,0,0.75)";
                });              
            }.bind(this));
            */
        }     
    }.bind(this));
}
