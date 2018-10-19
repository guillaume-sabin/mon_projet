'use strict';

/* Show desciption of the site by clicking the information's link */
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
    const IMGLINK = 'assets/img/';

    if(matchMedia('(min-width:320px)').matches && matchMedia('(max-width:1023px)').matches)
    {
        this.informationsContainer.src = IMGLINK + jsonData.url; 
        this.informationsContainer.alt = jsonData.description;
        this.parentNode.children[0].classList.add('title-mobile');  
    }

    if(matchMedia('(min-width:1024px)').matches)
    {
        // Create close button
        this.createChild('button', '<i class="fas fa-times"></i>', 'close-tab');

        // Create a container for the website's title, then insert it into the main div
        var title = '<span class="title-description">' + jsonData.name + '</span>';
        this.createChild('h3', title);
    }

    // Create a container for the website's languages, then insert it into the main div
    var languages = '<span>Languages utilisés : </span>' + jsonData.languages;
    this.createChild('p', languages);

    // Create a container for the website's description, then insert it into the main div
    var description = '<span>Description : </span>' + jsonData.technical_description;
    this.createChild('p', description)
    
}

Container.prototype.createChild = function(tag, content, id)
{
    var container = document.createElement(tag);
    container.insertAdjacentHTML('afterbegin', content);

    if(id != undefined)
    {
        container.id = id;
    }

    if(matchMedia('(min-width:320px)').matches && matchMedia('(max-width:1023px)').matches)
    {
        this.parentNode.appendChild(container);
    }

    else{

        this.informationsContainer.appendChild(container);
    }
}

Container.prototype.showContainer = function(node, parentNode)
{
    if(matchMedia('(min-width:320px)').matches && matchMedia('(max-width:1023px)').matches)
    {
        // Hide the containers we don't need  for this animation
        document.getElementById('ws-container').style.display = 'none'; 
        document.getElementById('ws-informations').style.display = 'none'; 
        
        
        var node = document.querySelector(node);
        this.parentNode = document.querySelector(parentNode);
        this.parentNode.insertBefore(this.informationsContainer, node.nextSibling);
    }

    else{
        
        var node = document.querySelector(node);
        this.parentNode = document.querySelector(parentNode);
        node.insertBefore(this.informationsContainer, this.parentNode);   
        $('#website').addClass('blur'); 
    }
    
}