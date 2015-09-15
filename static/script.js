//Instatiate counter 
var current = 0;

//Get images passed through hidden inputs so control with JS
var imagesDeck = document.getElementsByClassName("image-data");

//Count deck of images so I can use this to make rotation seamless
var imageDeckLength = imagesDeck.length -1; //because arrays are cardinal and indexes are not, I take the last number off the count to account for index 0

//Select Arrows for event handlers
var target = document.getElementsByClassName("arrow");

//Select place for image src
var box = document.getElementsByClassName("display-box");

//Select place for caption
var caption = document.getElementsByClassName("caption-box");

//Document events listener for DOM loaded for starting image
document.addEventListener("DOMContentLoaded", function() { 
    box[0].src=imagesDeck[current].name
    caption[0].innerHTML=imagesDeck[current].value
});


target[0].addEventListener("click", function(e) {
    current -= 1
    // console.log("SUBBED CURRENT", current)
    if (current === -1){
        current = (imageDeckLength) 
        // console.log("CHANGED CURRENT FOR -1", current)
    };
    // Change image src and caption text
    box[0].src=imagesDeck[current].name
    caption[0].innerHTML=imagesDeck[current].value
});

target[1].addEventListener("click", function(e) {
    current += 1
    // console.log("ADDED CURRENT", current)
    if (current > imageDeckLength){
        current = 0 //If i've gone through entire deck, start at begining
        // console.log("CHANGED CURRENT FOR len", current)
    }
    // Change image src and caption text
    box[0].src=imagesDeck[current].name
    caption[0].innerHTML=imagesDeck[current].value
});












