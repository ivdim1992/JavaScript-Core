function attachEvents() {

    $('#refresh').on('click',refresh)
    $('#submit').on('click',submitText)

    function refresh(){
        $.ajax({
            method:'GET',
            url: 'https://messenger-88f6f.firebaseio.com/messenger.json'
        }).then(appendText)
    }

    function submitText() {

        let author = $('#author').val();
        let content = $('#content').val();

        let message = {author:author,content:content,timestamp:Date.now()};

        let sendMessage = {
            method: 'POST',
            url:'https://messenger-88f6f.firebaseio.com/messenger.json',
            data:JSON.stringify(message),
            success:refresh
        };

        $.ajax(sendMessage)
    }

    function appendText(data) {
        let textArea = $('#messages');
        let str = '';
        for (let key in data) {
            str += `${data[key].author}: ${data[key].content}\n`
        }
        textArea.text(str)
    }
}