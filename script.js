
document.addEventListener("DOMContentLoaded", function() {
    const allStars = document.querySelectorAll('.star');
    allStars.forEach((star, i)=> {
        star.onclick = function() {
            let current_star_level = i + 1;
            allStars.forEach((star, j)=>{
                if (current_star_level >= j + 1) {
                    star.innerHTML = '&#9733;';
                } else{
                    star.innerHTML = '&#9734;';
                }
                    
            })
        }
    })
});

var i = 0;
var txt = "And finally, the user has a goal: collect information";
var speed = 50;
let repeatCount = 0;
let maxRepeats = 5;

function typeWriter() {
    if (i < txt.length) {
        document.getElementById("typing").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    } else {
        repeatCount++;
        if (repeatCount < maxRepeats) {
          setTimeout(() => {
            document.getElementById("typing").innerHTML = ""; // clear text
            i = 0;
            typeWriter(); // start over
          }, 1000); // pause before restarting
        }
    }
}



window.onload = function() {
    typeWriter();
}
