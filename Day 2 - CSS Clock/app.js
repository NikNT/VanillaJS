<<<<<<< HEAD
const seconds = document.querySelector('.second-hand');

function hands(){

    const now = new Date(); 

    const secondsValue = now.getSeconds();
    const secondsDegree = ((secondsValue/60)*360);
    
    seconds.style.transform = `rotate(${secondsDegree}deg)`; 

    console.log(secondsValue); 

}

=======
const seconds = document.querySelector('.second-hand');

function hands(){

    const now = new Date(); 

    const secondsValue = now.getSeconds();
    const secondsDegree = ((secondsValue/60)*360);
    
    seconds.style.transform = `rotate(${secondsDegree}deg)`; 

    console.log(secondsValue); 

}

>>>>>>> 423e5f5c528848b0a66f935bd3bf4ae96c573309
setInterval(hands, 1000); 