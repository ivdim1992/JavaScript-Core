function solve(arr) {


    for (let i = 0; i < arr.length; i+=2){
        let x = arr[i];
        let y = arr[i + 1];

        if(tuvalu(x,y)){
            console.log('Tuvalu');
        }else if (tokelau(x,y)){
            console.log('Tokelau');
        }else if (samoa(x,y)){
            console.log('Samoa');
        }else if (tonga(x,y)){
            console.log('Tonga')
        }else if (cook(x,y)){
            console.log('Cook')
        }else {
            console.log('On the bottom of the ocean')
        }

    }

    function tuvalu(x,y) {
        if(x >= 1 && x <= 3 && y >= 1 && y <= 3){
            return true;
        }
    }
    
    function tokelau(x,y) {
        if(x >= 8 && x <= 9 && y >= 0 && y <=1){
            return true;
        }
    }
    
    function samoa(x,y) {
        if(x >= 5 && x <= 7 && y >= 3 && y <= 6){
            return true;
        }
    }
    
    function tonga(x,y) {
        if(x >= 0 && x <= 2 && y >= 6 && y <= 8){
            return true;
        }
    }
    
    function cook(x,y) {
        if(x >= 4 && x <= 9 && y >= 7 && y <=8){
            return true;
        }
    }
}
solve([4, 2, 1.5, 6.5, 1, 3]);