function extractLink(arr) {
    let pattern = /www\.[A-Za-z0-9\-]+(\.[a-z]+)(\.[a-z]+)*/g;
    let result = [];

    for(let row of arr){
      let match = pattern.exec(row)

      while (match){
          result.push(match[0]);
          match = pattern.exec(row);
      }
    }
    console.log(result.join('\n'))
}
extractLink(['Join WebStars now for free, at www.web-stars.com',
'You can also support our partners:',
    'Internet - www.internet.com',
'WebSpiders - www.webspiders101.com',
'Sentinel - www.sentinel.-ko']);