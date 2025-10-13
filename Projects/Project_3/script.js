const clock = document.getElementById('clock');

setInterval(function(){
    let date = new Date();
    clock.innerHTML = date.toLocaleTimeString();
}, 1000); // 1000 is in milli second that tell after how much time i want to refresh.