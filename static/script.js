//Instatiate counter for current image
var current = 0;

//Get images passed through hidden inputs so control with JS
var imagesDeck = document.getElementsByClassName("image-data");

//Count deck of images so I can use this to make rotation seamless
//because arrays are cardinal and indexes are not, I take the last number off the count to account for index 0
var imageDeckLength = imagesDeck.length -1; 

//Select Arrows for event handlers
var arrowImgs = document.getElementsByClassName("arrow");

//Select place for image src
var imgDisplay = document.getElementsByClassName("display-box");

//Select place for caption
var caption = document.getElementsByClassName("caption-box");

//Document event listener for DOM loaded for starting image
document.addEventListener("DOMContentLoaded", function() { 
    imgDisplay[0].src=imagesDeck[current].name
    caption[0].innerHTML=imagesDeck[current].value
});



// Click Event Handlers for 'Previous' and 'Next' arrows:

// PREV ARROW
arrowImgs[0].addEventListener("click", function(e) {
    current -= 1
    if (current === -1){
        current = (imageDeckLength) //If i've gone through entire deck with PREV arrow, start at end
    };
    // Change image src and caption text
    imgDisplay[0].src=imagesDeck[current].name
    caption[0].innerHTML=imagesDeck[current].value
});

// NEXT ARROW
arrowImgs[1].addEventListener("click", function(e) {
    current += 1
    if (current > imageDeckLength){
        current = 0 //If i've gone through entire deck with NEXT arrow, start at begining
    }
    // Change image src and caption text
    imgDisplay[0].src=imagesDeck[current].name
    caption[0].innerHTML=imagesDeck[current].value
});












