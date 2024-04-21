$(document).ready(function(){
    var index = 0;
    var images = $('.lun img');
    var imageCount = images.length; 
    var delay = 3000;

   
    images.not(':first').hide();


    var showNextImage = function(){
       
        images.eq(index).fadeOut('slow');
        index = (index + 1) % imageCount;
       
        images.eq(index).fadeIn('slow');
    };

    var intervalId = setInterval(showNextImage, delay);

    $('.lun').hover(
      function(){
        clearInterval(intervalId); 
      },
      function(){
        intervalId = setInterval(showNextImage, delay); 
      }
    );
});

