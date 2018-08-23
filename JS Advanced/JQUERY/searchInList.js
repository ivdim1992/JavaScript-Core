function search() {
    let text = $('#searchText').val();
    let count = 0;
    let towns = $('#towns').find('li').each((ind,el) => {
        if(el.textContent.includes(text)){
            $(el).css('font-weight','bold');
            count++;
        }else {
            $(el).css('font-weight','');
        }
    });
    $('#result').text(`${count} matches found`);
    $('#searchText').val('');
}