
          // Set the date we're counting down to
          var countDownDate = new Date("February 8, 2019 19:33:00").getTime();

          // Update the count down every 1 second
          window.setInterval(function () {

             // Get todays date and time
          var now = new Date().getTime();

            // Find the distance between now an the count down date
            var distance = countDownDate - now;
            console.log(distance)

            // Time calculations for days, hours, minutes and seconds
            var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);

            // Output the result in an element with id="demo"
            document.getElementById("countdown").innerHTML = days + "d " + hours + "h " +
              minutes + "m " + seconds + "s ";

            // If the count down is over, write some text
            if (distance < 0) {
              clearInterval(window);
              document.getElementById("countdown").style.display = "none"
              document.getElementById("countdown_expire").style.display = "inline";
              document.getElementById("countdown_expire").innerHTML = `Gratis beta is launched!`;
            }
          }, 1000);