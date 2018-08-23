function countdown(number) {
    let startTime = number;
    let timer = document.getElementById('time');
    let interval = setInterval(timeCounting,1000);
    
    function timeCounting() {
        startTime--;
        timer.value = Math.trunc(startTime / 60) + ':' + ('0' + (startTime % 60)).slice(-2)
    }
}
countdown()