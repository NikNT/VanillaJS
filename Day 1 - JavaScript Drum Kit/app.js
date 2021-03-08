document.addEventListener('keydown', function(e){

    if(e.keyCode == 65){

        document.getElementById('audioA').play();
        document.getElementById('keyA').classList.add('styleonplay'); 
    }

    if(e.keyCode == 83){

        document.getElementById('audioS').play(); 
        document.getElementById('keyS').classList.add('styleonplay'); 
    }

    if(e.keyCode == 68){

        document.getElementById('audioD').play();
        document.getElementById('keyD').classList.add('styleonplay'); 
    }

    if(e.keyCode == 70){

        document.getElementById('audioF').play(); 
        document.getElementById('keyF').classList.add('styleonplay'); 
    }

    if(e.keyCode == 71){

        document.getElementById('audioG').play(); 
        document.getElementById('keyG').classList.add('styleonplay');
    }

    if(e.keyCode == 72){

        document.getElementById('audioH').play(); 
        document.getElementById('keyH').classList.add('styleonplay');
    }

    if(e.keyCode == 74){

        document.getElementById('audioJ').play(); 
        document.getElementById('keyJ').classList.add('styleonplay');
    }

    if(e.keyCode == 75){

        document.getElementById('audioK').play(); 
        document.getElementById('keyK').classList.add('styleonplay');
    }

    if(e.keyCode == 76){

        document.getElementById('audioL').play();
        document.getElementById('keyL').classList.add('styleonplay'); 
    }


})

document.addEventListener('keyup', function(e){

    if(e.keyCode == 65){

        document.getElementById('keyA').classList.remove('styleonplay'); 
    }

    if(e.keyCode == 83){

        document.getElementById('keyS').classList.remove('styleonplay'); 
    }

    if(e.keyCode == 68){

        document.getElementById('keyD').classList.remove('styleonplay');
    }

    if(e.keyCode == 70){

        document.getElementById('keyF').classList.remove('styleonplay');
    }

    if(e.keyCode == 71){

        document.getElementById('keyG').classList.remove('styleonplay');
    }

    if(e.keyCode == 72){

        document.getElementById('keyH').classList.remove('styleonplay');
    }

    if(e.keyCode == 74){

        document.getElementById('keyJ').classList.remove('styleonplay');
    }

    if(e.keyCode == 75){

        document.getElementById('keyK').classList.remove('styleonplay');
    }

    if(e.keyCode == 76){

        document.getElementById('keyL').classList.remove('styleonplay');
    }

})