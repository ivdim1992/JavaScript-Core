function attachEventsListeners() {

    let buttons = document.querySelectorAll('div input:nth-of-type(2)');
    for(let button of buttons){
        button.addEventListener('click',convert)
    }
    
    let obj = {
        'days': 1,
        'hours': 24,
        'minutes': 1440,
        'seconds': 86400
    };
    
    function convert() {
        let days = document.getElementById('days');
        let hours = document.getElementById('hours');
        let minutes = document.getElementById('minutes');
        let seconds = document.getElementById('seconds');

        let convertToDays = 0;

        if(this.id === 'daysBtn'){
            convertToDays = days.value;
        }else if(this.id === 'hoursBtn'){
            convertToDays = hours.value / obj.hours
        }else if(this.id === 'minutesBtn'){
            convertToDays = minutes.value / obj.minutes
        }else if(this.id === 'secondsBtn'){
            convertToDays = seconds.value / obj.seconds
        }

        days.value = convertToDays;
        hours.value = convertToDays * obj.hours;
        minutes.value = convertToDays * obj.minutes;
        seconds.value = convertToDays * obj.seconds;
    }

   
}