//Instatiate counter for current image index
var currentIndex = 0;

//Get images passed through hidden inputs to control with JS
var imagesDeck = document.getElementsByClassName("image-data");

//Count deck of images so I can use this to make rotation seamless
//Because array lengths are cardinal and indexes are ordinal, I subtract 1 from length so the number aligns with indexing
var imageDeckLength = imagesDeck.length -1; 

//Select Arrows for event handlers
var arrowImgs = document.getElementsByClassName("arrow");

//Select place for image src
var imgDisplay = document.getElementsByClassName("display-box");

//Select place for caption
var caption = document.getElementsByClassName("caption-box");

//Document event listener for DOM loaded for starting image
document.addEventListener("DOMContentLoaded", function() { 
    imgDisplay[0].src=imagesDeck[currentIndex].name;
    caption[0].innerHTML=imagesDeck[currentIndex].value;
});



// Click Event Handlers for 'Previous' and 'Next' arrows:

// PREV ARROW
arrowImgs[0].addEventListener("click", function() {
    currentIndex -= 1;
    if (currentIndex === -1){
        currentIndex = (imageDeckLength) //If i've gone through entire deck with PREV arrow, start at end
    };
    // Change image src and caption text
    imgDisplay[0].src=imagesDeck[currentIndex].name;
    caption[0].innerHTML=imagesDeck[currentIndex].value;
});

// NEXT ARROW
arrowImgs[1].addEventListener("click", function() {
    currentIndex += 1
    if (currentIndex > imageDeckLength){
        currentIndex = 0 //If i've gone through entire deck with NEXT arrow, start at begining
    };
    // Change image src and caption text
    imgDisplay[0].src=imagesDeck[currentIndex].name;
    caption[0].innerHTML=imagesDeck[currentIndex].value;
});












