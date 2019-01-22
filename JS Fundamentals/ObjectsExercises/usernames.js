
function usernames(strArr) {

    let set = new Set();

    for(let row of strArr){
        set.add(row);
    }
    let sortedNames = Array.from(set.keys()).sort((nam1,nam2) => sortLength(nam1,nam2) || alphabetically(nam1,nam2));

    for(let name of sortedNames){
        console.log(name);
    }

    function sortLength(nam1,nam2) {
        return nam1.length - nam2.length;
    }
    function alphabetically(nam1,nam2) {
        return nam1.localeCompare(nam2);
    }
}
usernames([
    "Ashton",
    "Kutcher",
    "Ariel",
    "Lilly",
    "Keyden",
    "Aizen",
    "Billy",
    "Braston"
]);