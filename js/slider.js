 var slideIndex = 0;   
            startSlider();            
            
            function plusDivs(n) {
              showDivs(slideIndex += n);
            }
            
            function currentDiv(n) {
              showDivs(slideIndex = n);
            }

            function resetTimer(n) {
                window.clearTimeout(timer);
                timer = null;
                timer = setTimeout(startSlider, 9000);    
            }
            
            function showDivs(n) {
              var i;
              var x = document.getElementsByClassName("mySlides");
              var dots = document.getElementsByClassName("badge");
              if (n > x.length) {slideIndex = 1}    
              if (n < 1) {slideIndex = x.length}
              for (i = 0; i < x.length; i++) {
                 x[i].style.display = "none";  
              }
              for (i = 0; i < dots.length; i++) {
                 dots[i].className = dots[i].className.replace(" badge-active", "");
              }
              x[slideIndex-1].style.display = "block";  
              dots[slideIndex-1].className += " badge-active";            
            }

            
            var timer;

            function startSlider() {
                var i;
                var x = document.getElementsByClassName("mySlides");
                for (i = 0; i < x.length; i++) {
                x[i].style.display = "none";  
                }
                slideIndex++;
                if (slideIndex > x.length) {slideIndex = 1}    
                x[slideIndex-1].style.display = "block"; 
                showDivs(slideIndex); 
                timer = setTimeout(startSlider, 9000);    
            }