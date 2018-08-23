function stopwatch() {

    let startBtn = document.getElementById('startBtn');
    let stopBtn = document.getElementById('stopBtn');

    let seconds;
    let interval;
    startBtn.addEventListener('click',start);
    stopBtn.addEventListener('click',stop);


    function increment() {
        let timer = document.getElementById('time');
        let currentSeconds = Math.trunc(seconds % 60);
        let currentMinutes = Math.trunc(seconds / 60);
        timer.textContent = '0' + currentMinutes + ':' + ('0' + currentSeconds).slice(-2);

        seconds++;
    }
    
    function start() {
        seconds = 0;
        startBtn.disabled = true;
        stopBtn.disabled = false;
        increment()
        interval = setInterval(increment,1000);
    }
    
    
    function stop() {
        startBtn.disabled = false;
        stopBtn.disabled = true;
        clearInterval(interval)
    }
}