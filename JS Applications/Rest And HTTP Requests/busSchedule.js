let result = (function solve() {

    let oldStop;
    let currentId = 'depot';

    function depart() {
        $('#depart').attr('disabled',true)
        $('#arrive').attr('disabled',false)

        $.ajax({
            method: 'GET',
            url: `https://judgetests.firebaseio.com/schedule/${currentId}.json`
        }).then(function (data) {
            let currentStop = data.name
            currentId = data.next;

            $('#info').find('span').text(`Next stop ${currentStop}`)
            oldStop = data.name
        }).catch(function (err) {
            $('#info').find('span').text(`Error`)
            $('#depart').attr('disabled',true)
            $('#arrive').attr('disabled',true)
        })
    }

    function arrive() {
        $('#depart').attr('disabled',false)
        $('#arrive').attr('disabled',true)
        $('#info').find('span').text(`Arriving at ${oldStop}`)

    }
    return {
        depart,
        arrive
    };
}())


