const seconds = document.querySelector('.second-hand');
const minutes = document.querySelector('.minute-hand'); 
const hours = document.querySelector('.hour-hand'); 

const SecondsInfo = document.getElementById('secondInfo'); 
const minuteInfo = document.getElementById('minuteInfo'); 
const hoursInfo = document.getElementById('hourInfo'); 

const dayInfo = document.getElementById('day'); 
const monthInfo = document.getElementById('month'); 
const yearInfo = document.getElementById('year'); 

var weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]; 

const weekInfo = document.getElementById('week'); 

function hands(){

    const now = new Date(); //Function to Fetch Current Date and Time

    //Seconds

    const secondsValue = now.getSeconds(); //Variable to Get Current Seconds
    const secondsDegree = ((secondsValue/60)*360); //Move Seconds Hands by 6 degree in every second, complete 360 degree in 60 seconds
    seconds.style.transform = `rotate(${secondsDegree}deg)`; 

    //Minutes 

    const minutesValue = now.getMinutes(); 
    const minutesDegree = ((minutesValue/60)*360);
    minutes.style.transform = `rotate(${minutesDegree}deg)`; 

    //Hours
    const hoursValue = now.getHours(); 
    const hoursDegree = ((hoursValue/12)*360) + ((minutesValue/60)*30);
    hours.style.transform = `rotate(${hoursDegree}deg)`; 

    console.log(hoursDegree);

    //Log Values of HMS on Console 
    //console.log('Hours, Minutes, Seconds: ', hoursValue, minutesValue, secondsValue); 

    //Digital Info

    if(secondsValue < 10){
        SecondsInfo.innerHTML = '0' + secondsValue;
    }

    else{
        SecondsInfo.innerHTML = ' ' + secondsValue;  
    }
    
    minuteInfo.innerHTML = minutesValue + ':'; 
    hoursInfo.innerHTML = hoursValue + ':'; 

    //Day Information 

    const dayValue = now.getDate();
    const monthValue = now.getMonth() + 1; 
    const yearValue = now.getFullYear(); 

    const weekValue = now.getDay(); 

    dayInfo.innerHTML = '&nbsp;' + dayValue + '/'; 
    monthInfo.innerHTML = monthValue + '/'; 
    yearInfo.innerHTML = yearValue;
    weekInfo.innerHTML = weekdays[weekValue] + ''; 

}

setInterval(hands, 1000); 
