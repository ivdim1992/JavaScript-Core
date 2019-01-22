function table(json) {
    let html = "";
    html = "<table>\n";
    for(let row of json){
        let arr = JSON.parse(row);


        html += "  <tr>\n";
       let values = Object.values(arr);

        for (let i = 0; i < values.length; i++){
            html += `    <td>${values[i]}</td>\n`;
        }

        html += "  <tr>\n";
    }
    html += "</table>";
    console.log(html);

}
table([
    "{\"name\":\"Pesho\",\"position\":\"Promenliva\",\"salary\":100000}",
"{\"name\":\"Teo\",\"position\":\"Lecturer\",\"salary\":1000}",
"{\"name\":\"Georgi\",\"position\":\"Lecturer\",\"salary\":1000}"
]);