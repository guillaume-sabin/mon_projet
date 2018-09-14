'use strict';

var Container = function()
{
    this.description = "";
    this.tag = "";
    this.id = "";
    this.parentNode = "";
    this.informationsContainer = ""; 
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
    // Create a container for the website's title, then insert it into the main div
    var titleContainer = document.createElement('h3');
    var title = '<span class="title-description">' + jsonData.name + '</span>'
    titleContainer.insertAdjacentHTML('afterbegin', title);
    this.informationsContainer.appendChild(titleContainer); 

    // Create a container for the website's languages, then insert it into the main div
    var languagesContainer = document.createElement('p');
    var languages = document.createTextNode(jsonData.languages);
    languagesContainer.insertAdjacentHTML('afterbegin', '<span>Languages utilisés : </span>');
    languagesContainer.appendChild(languages);
    this.informationsContainer.appendChild(languagesContainer); 

    // Create a container for the website's description, then insert it into the main div
    var descriptionContainer = document.createElement('p');
    var description = document.createTextNode(jsonData.technical_description);
    descriptionContainer.insertAdjacentHTML('afterbegin', '<span>Description : </span>');
    descriptionContainer.appendChild(description);
    this.informationsContainer.appendChild(descriptionContainer); 
    
}

Container.prototype.showContainer = function(node, parentNode)
{
    var node = document.querySelector(node);
    this.parentNode = document.querySelector(parentNode);
    node.insertBefore(this.informationsContainer, this.parentNode);   
    $('#website').addClass('blur'); 
}