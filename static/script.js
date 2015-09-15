// step 1 hide all the generated images
// step 2 parse the hidden data into variables & store them into an array
// step 3 take that array, and generate new elements that will display





// Credit where credit is due, found code to manipulate from this reference:
// http://blog.garstasio.com/you-dont-need-jquery/ajax/#getting

// var xhr = new XMLHttpRequest();
// xhr.open('GET', encodeURI('myservice/username?id=some-unique-id'));
// xhr.onload = function() {
//     if (xhr.status === 200) {
//         alert(xhr.responseText);
//     }
//     else {
//         alert('Request failed.  Returned status of ' + xhr.status);
//     }
// };
// xhr.send();

// jquery code for reference
// $.ajax({
//     url: "test.html",
//     context: document.body,
//     success: function(){
//       $(this).addClass("done");
//     }
// });
var images = document.getElementsByClassName("image-data");
console.log(images)

var target = document.getElementsByClassName("arrow");

target[0].addEventListener("click", function(e) {
  // console.log("you clicked " + e.target);
  alert(this)
  e.preventDefault();
});

target[1].addEventListener("click", function(e) {
  // console.log("you clicked " + e.target);
  console.log(this)
  e.preventDefault();
});


// var ajax = function(){
//   var xhr = new XMLHttpRequest();
//   xhr.open('POST', encodeURI('/return-insta'));

//   console.log(xhr.respon)
//   xhr.send();
// }

//slideshow


// var images = document.getElementsByClassName("image");
// console.log(images)



var current = 0;

console.log(images[current]);
console.log(this);



window.setInterval(function(){
  images[current].style.display = 'block';
  var picId = images[current].id

  this.css( 'display', 'none');
  current = current + 1;
  console.log(current);
  console.log(images[current]);

  if (current > 5){
    current = 0
  }

}, 5000);





