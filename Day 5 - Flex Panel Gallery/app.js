const flex = document.querySelectorAll('.flexbox .flexitem'); 

flex.forEach(item => item.addEventListener('mouseenter', enter)); 

function enter(){
    this.classList.add('onmouse'); 
    this.classList.remove('leaveClass'); 
    console.table('Entered: ', this.id); 
}

flex.forEach(item => item.addEventListener('mouseleave', leave)); 

function leave(){
    this.classList.remove('onmouse'); 
    this.classList.toggle('leaveClass');
    console.table('Left: ',this.id); 
}

 