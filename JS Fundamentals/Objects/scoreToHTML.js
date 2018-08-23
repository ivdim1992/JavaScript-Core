function scoreToHtml(str) {
    let arr = JSON.parse(str);

    let html = `<table>\n`;
    html += `  <tr><th>name</th><th>score</th></tr>\n`;
    for (let item of arr) {
        html += `  <tr><td>${escaping(item.name)}</td><td>${Number(item.score)}</td></tr>\n`;
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

    console.log(html);
}
scoreToHtml('[{"name":"Pesho & Kiro","score":479},{"name":"Gosho, Maria & Viki","score":205}]');