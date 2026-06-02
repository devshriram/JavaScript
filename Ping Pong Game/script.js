const rod1 = document.getElementById('rod1');
const rod2 = document.getElementById('rod2');
const step = 5;

function handleKeyPress(e) {

     const height = rod1.offsetHeight;
     const width = rod1.offsetWidth;

    if(e.key=='A' || e.key=='a') {
        let ele1 = rod1.getBoundingClientRect();
        let ele2 = rod2.getBoundingClientRect();

        if(ele1.left>0 && ele2.left>0) {
            rod1.style.left = (ele1.left-step) + "px";
            rod2.style.left = (ele2.left-step) + "px";
        }
    } else if(e.key=='D' || e.key=='d') {
        let ele1 = rod1.getBoundingClientRect();
        let ele2 = rod2.getBoundingClientRect();

        if(ele1.right+step<=window.innerWidth) {
            rod1.style.left = (ele1.left+step) + "px";
            rod2.style.left = (ele2.left+step) + "px";
        }
    }
}

document.addEventListener('keydown', handleKeyPress);