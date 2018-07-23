$(window).bind('mousewheel DOMMouseScroll', function(event) 
{
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

/*https://stackoverflow.com/questions/33083484/on-ctrlmousewheel-event/33083910#33083910*/