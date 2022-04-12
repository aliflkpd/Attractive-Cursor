const movingbox = document.getElementById('movingbox');
document.onmousemove = (event) => {
    movingbox.style.top  = event.clientY - (box.clientHeight/2)+ 'px';
    movingbox.style.left = event.clientX - (box.clientWidth/2) + 'px'; 
    
}