function solve(str) {

    let strToLower = str.replace(/\w+/g,toLower)
    let result = strToLower.replace(/\b\w/g,toUpper)
    console.log(result)

    function toLower(str) {
        return str.toLowerCase();
    }
    function toUpper(str) {
        return str.toUpperCase();
    }

}
solve('Was that Easy? tRY thIs onE for SiZe!')