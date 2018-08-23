'use strict';

var Content = function(e){

    this.DOMElement = document.querySelector(e);
    this.img = document.querySelector('.ws-container img');
}

Content.prototype.getContent = function(data)
{
    $.get(
        '/src/Controller/' + data.url,
        "id=" + data.id,
        this.showContent()
    );
    
}

Content.prototype.showContent = function(callBack)
{
    
    // Check if newChild has already been created
    if(this.img == null)
    {
        var newChild = document.createElement('img');
        newChild.id = 'website';
    
        var oldChild = document.querySelector('.ws-container p');

        // Replace the ".ws-container p" container by ".ws-container img"
        document.querySelector(".ws-container").replaceChild(newChild, oldChild); 

        //this.img.setAttribute('src', window.location.href);
    }

    console.log(callBack)
    //$("img",this.mealDetails).attr('src',  getWwwUrl()+'/images/meals/'+product.Photo)
    //this.img.setAttribute('src', );
}