function addOrRemoveEl(commands) {
    let initialNumber = 1;
    let arr = [];

    for (let i = 0; i < commands.length; i++) {
        if(commands[i] === 'add'){
            add(initialNumber);
        }else {
            remove(initialNumber)
        }
    }
    if(arr.length === 0){
        console.log('Empty')
    }

    function add(num) {
        arr.push(num);
        initialNumber++;
    }

    function remove(num) {
        arr.pop(num);
        initialNumber++;
    }

    console.log(arr.join('\n'))
}

addOrRemoveEl(['add', 'add', 'remove', 'add', 'add']);