window.addEventListener("keydown", function(e) {
  // space and arrow keys
  if([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
      e.preventDefault();
  }
}, false);


var pageOne = document.getElementById("page-one");
var pageTwo = document.getElementById("page-two");
var pageThree = document.getElementById("page-three");
var pageFour = document.getElementById("page-four");



document.getElementById("page-one-button").addEventListener("click",function(e){
  e.preventDefault();
  window.scroll({
    top: pageOne.offsetTop,
    // left: 100,
    behavior: 'smooth'
  });

  // console.log(pageOne.offsetTop);
});

document.getElementById("page-two-button").addEventListener("click",function(e){
  e.preventDefault();
  window.scroll({
    top: pageTwo.offsetTop,
    // left: 100,
    behavior: 'smooth'
  });

  // console.log(pageTwo.offsetTop);
});


document.getElementById("page-three-button").addEventListener("click",function(e){
  e.preventDefault();
  window.scroll({
    top: pageThree.offsetTop,
    // left: 100,
    behavior: 'smooth'
  });

  // console.log(pageThree.offsetTop);
});


document.getElementById("page-four-button").addEventListener("click",function(e){
  e.preventDefault();
  window.scroll({
    top: pageFour.offsetTop+50,
    // left: 100,
    behavior: 'smooth'
  });

  // console.log(pageFour.offsetTop);
});



// document.getElementById("page-four-button").click( () => {
//   document.getElementsByName('html,body').animate({

//   })
// })

// $("page-four-button").click(function() {
//   $('html,body').animate({
//       scrollTop: $("#page-four").offset().top},
//       'slow');
// });