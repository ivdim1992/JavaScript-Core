


function busRoute() {

    let startBusNumber = $('input[name="first-stop"]'); // reference to the input
    let endBusNumber = $('input[name="last-stop"]'); // reference to the input

    let busStops = [];
    $('#bus-stops').find('li').each((ind,el) => {
        busStops.push($(el).text())
    });


    if(startBusNumber.val() >= 1 && endBusNumber.val() >= 1 && startBusNumber.val() < endBusNumber.val()
        && startBusNumber.val() < busStops.length+1 && endBusNumber.val() < busStops.length+1){
        $('#selected-bus-stops li').remove();

        for (let i = startBusNumber.val()-1; i <= endBusNumber.val()-1; i++) {
            $('#selected-route').find('span').text(startBusNumber.val() + '-' + endBusNumber.val())
            let text = $(`#bus-stops li:eq(${i})`).text()
            let li = $('<li>');
            li.text(text)
            let selectedBusStops = $('#selected-bus-stops');
            selectedBusStops.append(li)
        }

        startBusNumber.val('')
        endBusNumber.val('')
    }
}

busStops = [
    "Gen. Gurko St.",
    "Sofia University",
    "Eagles' Bridge Sq.",
    "Bulgarian News Agency",
    "Peyo Yavorov Blvd.",
    "Aleksandar Zhendov Bvld.",
    // You can add/remove bus stops from here
];

let listBusStops = $('#bus-stops')
for (let i = 0; i < busStops.length; i++) {
    const busStopLi = $('<li>').text(busStops[i]);

    listBusStops.append(busStopLi)
}




