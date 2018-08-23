function attachEvents() {
    const baseUrl = 'https://judgetests.firebaseio.com';

    $('#submit').click(loadForecast)
    
    // GET REQUEST
    function request(endPoint) {
        return $.ajax({
            method: 'GET',
            url: baseUrl + endPoint
        })
    }

    function loadForecast() {
        request('/locations.json')
            .then(updateForecast)
            .catch(handleError)
    }

    function updateForecast(data) {
        let inputText = $('#location').val();
        let code = data.filter(loc => loc.name === inputText).map(loc => loc.code)[0]

        if (!code) {
            handleError();
        }

        let foreCastTodayPr = request(`/forecast/today/${code}.json`);
        let forecastUpcomingPr = request(`/forecast/upcoming/${code}.json`);

        Promise.all([foreCastTodayPr, forecastUpcomingPr])
            .then(displayForecast)
            .catch(handleError)
    }

    function displayForecast([whetherToday, whetherUpcoming]) {
        let whetherSymbols = {
            'Sunny': '&#x2600;',
            'Partly sunny': '&#x26C5;',
            'Overcast': '&#x2601;',
            'Rain': '&#x2614;',
        };

        let forecast = $('#forecast');
        forecast.css('display', 'block')

        // TODAY WHETHER
        let todayWhetherDiv = $('#current');
        todayWhetherDiv.empty();

        todayWhetherDiv
            .append($('<div class="label">Current conditions</div>'))
            .append($(`<span class="condition symbol">${whetherSymbols[whetherToday.forecast.condition]}</span>`))
            .append($('<span class="condition"></span>')
                .append($(`<span class="forecast-data">${whetherToday.name}</span>`))
                .append($(`<span class="forecast-data">${whetherToday.forecast.low}&#176;/${whetherToday.forecast.high}&#176;</span>`))
                .append($(`<span class="forecast-data">${whetherToday.forecast.condition}</span>`)))


        // UPCOMING WHETHER
        let upcomingWhetherDiv = $('#upcoming');
        upcomingWhetherDiv.empty();

        upcomingWhetherDiv.append($('<div class="label">Three-day forecast</div>'))
        let data = whetherUpcoming.forecast
        for (let el of data){
            upcomingWhetherDiv.append($('<span class="upcoming"></span>')
                .append($(`<span class="symbol">${whetherSymbols[el.condition]}</span>`))
                .append($(`<span class="forecast-data">${el.low}&#176;/${el.high}&#176;</span>`))
                .append($(`<span class="forecast-data">${el.condition}</span>`)))
        }

    }


    function handleError(err) {
        let forecast = $('#forecast');
        forecast.css('display','block')
        forecast.text('Error')
    }
}