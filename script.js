const box = document.getElementById('movingbox');
document.onmousemove = (event) => {
    box.style.top  = event.clientY - (box.clientHeight/2)+ 'px';
    box.style.left = event.clientX - (box.clientWidth/2) + 'px'; 
    
}

function random(number) {
    return Math.floor(Math.random()* number)
}

document.onclick  = function () { 
    randomcoloring = "rgb("+ random(444)+","+ random(150)+","+ random(666)+")";
    box.style.background = randomcoloring
    }