 window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    
    document.getElementById("navbar").style.background = "black";
  } else {
   
    document.getElementById("navbar").style.background = "none";
  }
}

$('#myCarousel').carousel({
  interval: 6000
})

$('.carousel .item').each(function(){
  var next = $(this).next();
  if (!next.length) {
    next = $(this).siblings(':first');
  }
  
  next.children(':first-child').clone().appendTo($(this));
});

/* override position and transform in 3.3.x */
