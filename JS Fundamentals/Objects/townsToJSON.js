function townsToJSON(strArr) {
    let townsArr = [];
    strArr.shift();

    for (let i = 0; i < strArr.length; i++){
        let townTokens = strArr[i].split('|').filter(el => el !== '').map(el => el.trim())
        let [town,latitude,longtitude] = townTokens;
        let townObj = {Town: town, Latitude: Number(latitude),Longitude: Number(longtitude)};
        townsArr.push(townObj);
    }
    console.log(JSON.stringify(townsArr))

}
townsToJSON([
    '| Town | Latitude | Longitude |',
'| Sofia | 42.696552 | 23.32601 |',
'| Beijing | 39.913818 | 116.363625 |'
]);