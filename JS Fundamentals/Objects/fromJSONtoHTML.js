function fromJSONtoHTML(str) {
    let arr = JSON.parse(str);

    let html = `<table>\n`;
    html += `    <tr>`;

    for(let obj of Object.keys(arr[0])){
        html += `<th>${escaping(obj)}</th>`;

    }
    html += `</tr>\n`;

    for (let i = 0; i < arr.length; i++){
        html += `    <tr>`;
        for (let values of Object.keys(arr[0])) {
            console.log(arr[i][values])
            //html += `<td>${escaping(arr[i][values] + '')}</td>`;

        }
        html += `</tr>\n`;
    }

     html += `</table>\n`;

    function escaping(text) {
        let map = {
            '"': '&quot;',
            '&': '&amp;',
            "'": '&#39;',
            '<': '&lt;',
            '>': '&gt;'
        };
        return text.replace(/["&'<>]/g, el => map[el]);
    }
//console.log(html);


}
fromJSONtoHTML('[{"Name":"Tomatoes & Chips","Price":2.35},{"Name":"J&B Chocolate","Price":0.96}]');
