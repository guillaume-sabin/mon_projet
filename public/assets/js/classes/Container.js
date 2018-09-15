'use strict';

var Container = function()
{
    this.description;
    this.tag;
    this.id;
    this.parentNode;
    this.informationsContainer; 
}

Container.prototype.createContainer = function(tag, id)
{
    this.tag = tag;
    this.id = id;

    // Create a container with the tag as argument
    this.informationsContainer = document.createElement(tag);
    this.informationsContainer.id = id;  
}

Container.prototype.getContent = function(data)
{
    var self = this;
    $.getJSON(
        data.url + '/' + data.id,
        self.insertContent.bind(self)
    );
}

Container.prototype.insertContent = function(jsonData)
{
    // Create close button
    this.createChild('button', '<i class="fas fa-times"></i>', 'close-tab');

    // Create a container for the website's title, then insert it into the main div
    var title = '<span class="title-description">' + jsonData.name + '</span>';
    this.createChild('h3', title);

    // Create a container for the website's languages, then insert it into the main div
    var languages = '<span>Languages utilisés : </span>' + jsonData.languages;
    this.createChild('p', languages);

    // Create a container for the website's description, then insert it into the main div
    var description = '<span>Description : </span>' + jsonData.technical_description;
    this.createChild('p', description)
    
}

Container.prototype.createChild = function(tag, content, id)
{
        var childContainer = document.createElement(tag);
        if(id != undefined)
        {
            childContainer.id = id;
        }
        var childContent = content;
        childContainer.insertAdjacentHTML('afterbegin', childContent);
        this.informationsContainer.appendChild(childContainer);
}

Container.prototype.showContainer = function(node, parentNode)
{
    var node = document.querySelector(node);
    this.parentNode = document.querySelector(parentNode);
    node.insertBefore(this.informationsContainer, this.parentNode);   
    $('#website').addClass('blur'); 
}