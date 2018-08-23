function gladiator(strArr) {
    let peshoInvetory =  strArr.shift().split(' ');

    loop:
    for (let i = 0; i < strArr.length; i++){
        let [commands,item] = strArr[i].split(' ');

        switch (commands){
            case 'Buy':
                if(!peshoInvetory.includes(item)){
                    peshoInvetory.push(item);
                }
                break;
            case 'Trash':
                let index = peshoInvetory.indexOf(item);
                if(index > -1){
                    peshoInvetory.splice(index,1)
                }
                break;
            case 'Repair':
                let index1 = peshoInvetory.indexOf(item);
                if(index1 > -1){
                    peshoInvetory.splice(index1,1);
                    peshoInvetory.push(item);
                }
                break;
            case 'Upgrade':
                let [realWord,newWord] = item.split('-');
                let index2 = peshoInvetory.indexOf(realWord);
                let finalWord = `${realWord}:${newWord}`;
                if(index2 > -1){
                    peshoInvetory.splice(index2 + 1, 0,finalWord)
                }
                break;
            case 'Fight!':
                console.log(peshoInvetory.join(' '));
                break loop;
        }
    }
}
gladiator([
    'SWORD Shield Spear',
    'Buy Bag',
    'Trash Shield',
    'Repair Spear',
    'Upgrade SWORD-Steel',
    'Fight!'
]);