function attachEvents() {
    $('#items').find('li').click(addClass);


    function addClass() {

        if($(this).attr('data-selected')){
            $(this).removeAttr('data-selected');
            $(this).css('background','')

        }else {
            $(this).attr('data-selected','true');
            $(this).css('background','#DDD')

        }
    }
    $('#showTownsButton').click(function () {
        let lists = $('#items li[data-selected=true]')
        $('#selectedTowns').text('Selected towns: ' + lists.toArray().map(li => li.textContent).join(', '))
    })

}