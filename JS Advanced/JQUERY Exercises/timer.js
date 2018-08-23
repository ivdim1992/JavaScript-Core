function timer() {
    let hours = $('#hours');
    let minutes = $('#minutes');
    let seconds = $('#seconds');
    let startBtn = $('#start-timer');
    let stopBtn = $('#stop-timer');
    let interval = null;

    startBtn.click(function () {
        if(interval){
            clearInterval(interval)
        }
        interval = setInterval(step,1000)
    });
    stopBtn.click(function () {
        clearInterval(interval)
    });

    function step() {
        let currentHours = hours.text();
        let currentMinutes = minutes.text();
        let currentSeconds = seconds.text();

        seconds.text(`0${+currentSeconds + 1}`.slice(-2));
        if(currentSeconds >= 59){
            seconds.text('00');
            minutes.text(`0${+currentMinutes + 1}`.slice(-2));
            if(currentMinutes >= 59){
                minutes.text('00');
                hours.text(`0${+currentHours + 1}`.slice(-2))
            }
        }
    }
}