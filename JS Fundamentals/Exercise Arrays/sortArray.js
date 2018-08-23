function sortAray(arr) {
    console.log(arr.sort((a,b) => a.localeCompare(b)).sort((a,b) => a.length - b.length).join('\n'))
}
sortAray(['alpha','beta','gammaa']);