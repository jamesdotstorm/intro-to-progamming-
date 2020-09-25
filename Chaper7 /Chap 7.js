document.getElementById("lefteye").style.backgroundColor = "red";
document.getElementById("body").style.border = "2px black solid";
document.getElementById("mouth").style.borderRadius = "4px";
document.getElementById("righteye").style.border = "4px yellow dotted";
document.getElementById("leftarm").style.backgroundColor = "#ff00ff";
document.getElementById("body").style.color = "#ff0000";
document.getElementById("head").style.borderTop = "5px black solid";
document.getElementById("head").style.transform = "rotate(300deg)";

var rightEye = document.getElementById("righteye");
rightEye.addEventListener("click", moveUpDown);

function moveUpDown(e) {
    var robotPart = e.target;
    var top = 0;
    var id = setInterval(frame, 10) // draw every 10ms
    function frame() {
        robotPart.style.top = top + '%';
        top++;
        if (top === 20) {
            clearInterval(id);
        }
    }
}


var LeftEye = document.getElementById("lefteye");
LeftEye.addEventListener("click", moveUpDown);


var LeftArm = document.getElementById(leftarm);
LeftArm.addEventListener("click", moveRightLeft);







/* 
  Now it's your turn!
  Can you figure out how to make the following changes 
  with JavaScript?
*/

// tilt Douglas's head to the other side

// make Douglas's nose round

// make Douglas's right arm green

// make Douglas's lips pink