$(() => {
    $('#btnLoadPosts').click(loadPosts);
    $('#btnViewPost').click(viewPosts);

    const username = 'Ivaylo';
    const password = 'ivaylo';
    const list = $('#posts');
    const baseurl = `https://baas.kinvey.com/appdata/kid_SykfituV7/`
    const bodyText = $('#post-body');
    const bodyComments = $('#post-comments');


    function loadPosts() {
        $.ajax({
            url: baseurl + 'posts',
            headers: {
                'Authorization': 'Basic ' + btoa(username + ':' + password)
            },
            success: fillSelect,
            error: handleError

        })

        function fillSelect(data) {
            list.empty();
            for (let post of data) {
                $('<option>')
                    .text(post.title)
                    .val(post._id)
                    .appendTo(list)
            }
        }
    }


    function viewPosts() {
        let postid = $('#posts').find('option:selected').val();
        $.ajax({
            url: baseurl + 'posts/' + postid,
            headers: {
                'Authorization': 'Basic ' + btoa(username + ':' + password)
            }

        }).then(requestComments)
            .then(displayPostsAndComments)
            .catch(handleError)

        function requestComments(data) {
            return p = new Promise(function (resolve,reject) {
                $.ajax({
                    url: baseurl + `comments/?query={"postid":"${postid}" }`,
                    headers: {
                        'Authorization': 'Basic ' + btoa(username + ':' + password)
                    }
                }).then((response) => resolve([data,response]))
            });
        }

        function displayPostsAndComments([data,comments]) {
            bodyText.empty();
            bodyComments.empty();
            bodyText.append($(`<h1>${data.title}</h1>`))
            let unList = $('<ul>');
            for (let comment of comments) {
                unList.append($(`<li>${comment.text}</li>`))
            }
            bodyComments.append(unList)
        }

    }

    function handleError(reason) {
        console.log(reason)
    }

})
