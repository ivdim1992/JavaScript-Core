function capitalize(string) {
    let strToLower = string.replace(/\w+/g,lower);
    let result = strToLower.replace(/\b\w/g,upper);
console.log(result);


    function lower(str) {
        return str.toLowerCase();
    }

    function upper(str) {
        return str.toUpperCase();
    }

}
capitalize('Capitalize these words');