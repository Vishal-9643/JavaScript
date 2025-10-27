const generateColour = function(){
    const hex = "0123456789ABCDEF";
    let colour = "#";
    for(let i=0;i<6;i++){
        let random = Math.floor(Math.random()*16);
        colour += hex[random];
    };
    return colour;
}

let interval;
const start = function(){
    function changeColour(){
        document.body.style.backgroundColor = generateColour();
    }
     if(!interval){
        interval = setInterval(changeColour,1000);
     }
    
}

const stop = function(){
    clearInterval(interval);
    interval = null;
}

document.querySelector('#start').addEventListener('click',start);
document.querySelector('#stop').addEventListener('click',stop);
