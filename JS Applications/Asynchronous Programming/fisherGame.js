function attachEvents() {
    const baseUrl = 'https://baas.kinvey.com/appdata/kid_ByuGAyjNQ';
    const username = 'Ivaylo';
    const password = 'ivaylo';
    const base64auth = btoa(username + ':' + password);
    const authentication = {
        'Authorization': 'Basic ' + base64auth,
        'Content-type': 'application/json'
    };

    function request(method,endPoint,data) {
      return $.ajax({
          method:method,
          url:baseUrl + endPoint,
          headers: authentication,
          data: JSON.stringify(data)
      })
    }
    
    
    // LOAD BUTTON -> Get data(load Data)
    $('.load').click(loadCatches)
    // ADD BUTTON -> Create (POST REQUEST)
    $('.add').click(createData)
    
    function loadCatches() {
        request('GET','/biggestCatches')
            .then(displayCatches)
            .catch(handleError)
    }


    function displayCatches(data) {
        let catches = $('#catches');
        catches.empty()
        for (let el of data){
            catches.append($(`<div class="catch" data-id="${el._id}">`)
                .append($('<label>Angler</label>'))
                .append($(`<input type="text" class="angler" value="${el.angler}"/>`))
                .append($('<label>Weight</label>'))
                .append($(`<input type="number" class="weight" value="${el.weight}"/>`))
                .append($('<label>Species</label>'))
                .append($(`<input type="text" class="species" value="${el.species}"/>`))
                .append($('<label>Location</label>'))
                .append($(`<input type="text" class="location" value="${el.location}"/>`))
                .append($('<label>Bait</label>'))
                .append($(`<input type="text" class="bait" value="${el.bait}"/>`))
                .append($('<label>Capture Time</label>'))
                .append($(`<input type="number" class="captureTime" value="${el.captureTime}"/>`))
                .append($('<button>Update</button>').click(updateEl))
                .append($('<button>Delete</button>').click(deleteEl)))
        }
    }
    // UPDATE CATCHES
    function updateEl() {
        let catchEl = $(this).parent();
        console.log(catchEl.attr('data-id'))
        let dataObj = createUpdateJson(catchEl)

        request('PUT', `/biggestCatches/${catchEl.attr('data-id')}`, dataObj)
            .then(loadCatches)
            .catch(handleError)
    }



    // DELETE CATCHES
    function deleteEl() {
        let catchId = $(this).parent().attr('data-id')
        request('DELETE', `/biggestCatches/${catchId}`)
            .then(loadCatches)
            .catch(handleError)
    }
    // Create Json Object with data for dataBase
    function createUpdateJson(catchEl) {
        return {
            angler: catchEl.find('.angler').val(),
            weight: +catchEl.find('.weight').val(),
            species: catchEl.find('.species').val(),
            location: catchEl.find('.location').val(),
            bait: catchEl.find('.bait').val(),
            captureTime: +catchEl.find('.captureTime').val()
        }
    }

    // CREATE DATA
    function createData() {
        let catchEl = $('#addForm')
        let dataObj = createUpdateJson(catchEl)

        request('POST', '/biggestCatches', dataObj)
            .then(loadCatches)
            .catch(handleError)
    }

    function handleError(err) {
        console.log(err)
    }
}