$(window).bind('mousewheel DOMMouseScroll', function(event) {
    if(event.ctrlKey == true)
    {
        event.preventDefault();
        if(event.originalEvent.detail > 0) {
             console.log('Down');
         }else {
             console.log('Up');
         }
    }
});

/*Attempt 2*/
$(document).on("keydown", function (event) {
    if (event.ctrlKey ) {
    	if (event.keyCode === 107 || event.keyCode === 187) {
      	event.preventDefault();
      	console.log('Down')
      }
      if (event.keyCode === 109 || event.keyCode === 189) {
      	event.preventDefault();
      	console.log('Up')
      }
      if (event.keyCode === 96) {
      	event.preventDefault();
      	console.log('Reset');
      }
    }
}).on('mousewheel DOMMouseScroll', function(event) {
  if (event.ctrlKey == true) {
    event.preventDefault();
    if (event.originalEvent.wheelDelta > 0) {
      console.log('Up');
    } else {
      console.log('Down');
    }
  }
});

/*https://stackoverflow.com/questions/33083484/on-ctrlmousewheel-event/33083910#33083910*/