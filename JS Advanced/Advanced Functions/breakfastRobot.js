let solve = (function () {


    let ingredients = {
        apple: {
            carbohydrate: 1,
            flavour: 2
        },
        coke: {
            carbohydrate: 10,
            flavour: 20
        },
        burger: {
            carbohydrate: 5,
            fat: 7,
            flavour: 3
        },
        omelet: {
            protein: 5,
            fat: 1,
            flavour: 1
        },
        cheverme: {
            protein:10,
            carbohydrate: 10,
            fat: 10,
            flavour:10
        }
    };

    let robot = {
        protein: 0,
        carbohydrate:0,
        fat:0,
        flavour:0
    };

    return function manager(str) {
        let inputTokens = str.split(' ');
        let command = inputTokens[0];
        let ingredient = inputTokens[1];
        let quantity = Number(inputTokens[2]);

        if(command === 'restock'){
            if(robot.hasOwnProperty(ingredient)){
                robot[ingredient] += quantity;
                return 'Success'
            }
        }else if(command === 'report'){
            return `protein=${robot.protein} carbohydrate=${robot.carbohydrate} fat=${robot.fat} flavour=${robot.flavour}`
        }else if(command === 'prepare'){

            let product = inputTokens[1];
            let quantityToCook = Number(inputTokens[2]);
            let neededIngredients = ingredients[product];

            let isCooked = true;
            for(let element in neededIngredients){
                if(robot[element] < neededIngredients[element] * quantityToCook){
                    return `Error: not enough ${element} in stock`
                    isCooked = false;
                }
            }

            if(isCooked){
                for(let element in neededIngredients){
                    robot[element] -= neededIngredients[element] * quantityToCook;

                }

                return 'Success'
            }

        }
    }


}());
console.log(solve('prepare cheverme 1'));
console.log(solve('restock protein 10'));
console.log(solve('prepare cheverme 1'));
console.log(solve('restock carbohydrate 10'));
console.log(solve('prepare cheverme 1'));
console.log(solve('restock fat 10'));
console.log(solve('prepare cheverme 1'));
console.log(solve('restock flavour 10'));
console.log(solve('prepare cheverme 1'));
console.log(solve('report'));


