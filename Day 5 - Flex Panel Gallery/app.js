const flex = document.querySelectorAll('.flexbox .flexitem'); 

flex.forEach(item => item.addEventListener('mouseenter', enter)); 

function enter(){
    var element = document.getElementById(this.id); 
    element.classList.toggle('onmouse'); 

    console.log('Entered: ', this.id); 
}

flex.forEach(item => item.addEventListener('mouseleave', leave)); 

function leave(){
    var element = document.getElementById(this.id); 
    element.classList.toggle('leaveClass'); 
    console.log('Left: ',this.id); 
}

 