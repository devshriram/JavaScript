const ball = document.getElementById('ball');
const step = 10;

function handleKeyPress(e) {

         const innerWidth = window.innerWidth;
         const innerHeight = window.innerHeight;
         const ballHeight = ball.offsetHeight;
         const ballWidth = ball.offsetWidth;
         
         if(e.key=='w' || e.key=='W') {

            let ele = ball.getBoundingClientRect();

            if(ele.top>0 ) {
                ball.style.top = (ele.top-step) + "px";
            }
         } else if(e.key=='a' || e.key=='A') {

            let ele = ball.getBoundingClientRect();

            if(ele.left>0) {
                ball.style.left = (ele.left-step) + "px";
            }
         } else if(e.key=='d' || e.key=='D') {

            let ele = ball.getBoundingClientRect();
           
           if(ele.right+step<=innerWidth) {
             ball.style.left = (ele.left+step) + "px";
           } else {
             return;
           }

         } else if(e.key=='s' || e.key=='S') {
           
           let ele = ball.getBoundingClientRect();
           
           if(ele.bottom+step<=innerHeight) {
             ball.style.top = (ele.top+step) + "px";
           } else {
             return;
           }
         }
}

document.addEventListener('keydown', handleKeyPress);