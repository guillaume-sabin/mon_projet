var VerticalTimeline = function(element)
{
    this.element = element;
    this.blocks = this.element.getElementsByClassName("js-cd-block");
    this.images = this.element.getElementsByClassName("js-cd-img");
    this.contents = this.element.getElementsByClassName("js-cd-content");
    this.offset = 0.8;
	this.hideBlocks();
}

VerticalTimeline.prototype.showBlocks = function() 
{
    if (! "classList" in document.documentElement) 
    {
        return;
    }

    for(var i = 0; i < this.blocks.length; i++) 
    {
        if(this.contents[i].classList.contains("cd-is-hidden") && this.blocks[i].getBoundingClientRect().top <= window.innerHeight*this.offset) 
        {
            // add bounce-in animation
            this.images[i].classList.add("cd-timeline__img--bounce-in");
            this.contents[i].classList.add("cd-timeline__content--bounce-in");
            this.images[i].classList.remove("cd-is-hidden");
            this.contents[i].classList.remove("cd-is-hidden");
        }
    }
};


VerticalTimeline.prototype.hideBlocks = function() 
{
    //hide timeline blocks which are outside the viewport
    if (!"classList" in document.documentElement) 
    {
        return;
    }

    for(var i = 0; i < this.blocks.length; i++) 
    {
        if(this.blocks[i].getBoundingClientRect().top > window.innerHeight*this.offset) 
        {
            this.images[i].classList.add("cd-is-hidden"); 
            this.contents[i].classList.add("cd-is-hidden"); 
        }
    }
};
