function solve(strArr) {
    let inventories = strArr.shift().split(' ');


    for(let row of strArr){
        let [command,inventory] = row.split(' ');

        switch (command){
            case 'Buy':
                if(!inventories.includes(inventory)){
                    inventories.push(inventory)
                }
                break;
            case 'Trash':
                let index = inventories.indexOf(inventory);
                if(index > -1){
                    inventories.splice(index,1)
                }
                break;
            case 'Repair':
                if(inventories.includes(inventory)){
                    let index = inventories.indexOf(inventory);
                    inventories.splice(index,1);
                    inventories.push(inventory)
                }
                break;
            case 'Upgrade':
                let [equipment,upgrade] = inventory.split('-');
                if(inventories.includes(equipment)){
                    let index = inventories.indexOf(equipment);
                    inventories.splice(index + 1,0,`${equipment}:${upgrade}`)
                }
                break;
        }
    }
    console.log(inventories.join(', '))
}
solve([
    'SWORD Shield Spear',
    'Buy Bag',
    'Trash Shield',
    'Repair Spear',
    'Upgrade SWORD-Steel',
    'Fight!'
]);