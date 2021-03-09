const seconds = document.querySelector('.second-hand');

function hands(){

    const now = new Date(); 

    const secondsValue = now.getSeconds();
    const secondsDegree = ((secondsValue/60)*360);
    
    seconds.style.transform = `rotate(${secondsDegree}deg)`; 

    console.log(secondsValue); 

}

setInterval(hands, 1000); 