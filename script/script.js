var a = document.querySelectorAll("#navbar a");

for(var i=0; i<a.length; i++){
    a[i].addEventListener('click', function(){
        
        var aInnerText = this.innerHTML.replace(/ /g, '_');
        
        smoothScroll(document.getElementById(aInnerText));
         
    });
}

//SmoothScroll from StackOverflow: http://stackoverflow.com/questions/18071046/smooth-scroll-to-specific-div-on-click

window.smoothScroll = function(target) {
    var scrollContainer = target;
    do { //find scroll container
        scrollContainer = scrollContainer.parentNode;
        if (!scrollContainer) return;
        scrollContainer.scrollTop += 1;
    } while (scrollContainer.scrollTop == 0);

    var targetY = 0;
    do { //find the top of target relatively to the container
        if (target == scrollContainer) break;
        targetY += target.offsetTop;
    } while (target = target.offsetParent);

    scroll = function(c, a, b, i) {
        i++; if (i > 30) return;
        c.scrollTop = a + (b - a) / 30 * i;
        setTimeout(function(){ scroll(c, a, b, i); }, 20);
    }
    // start scrolling
    scroll(scrollContainer, scrollContainer.scrollTop, targetY, 0);
}