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


var target = document.getElementsByClassName("arrow");

target[0].addEventListener("click", function(e) {
  console.log("you clicked " + e.target);
  alert(this)
  e.preventDefault();
});

target[1].addEventListener("click", function(e) {
  console.log("you clicked " + e.target);
  e.preventDefault();
});


// var ajax = function(){
//   var xhr = new XMLHttpRequest();
//   xhr.open('POST', encodeURI('/return-insta'));

//   console.log(xhr.respon)
//   xhr.send();
// }

//slideshow


var images = document.getElementsByClassName("image");
console.log(images)



var current = 0;

console.log(images[current]);

window.setInterval(function(){
  images[current].style.display = 'block';
  var picId = picArray[current].id
  this.siblings().css( 'display', 'none');
  current = current + 1;
  console.log(current);
  console.log(picArray[current]);

  if (current > 5){
    current = 0
  }

}, 5000);




