function solve(arr) {
    let number = Number(arr[0]);

    //let [num,op1,op2] = [32,'chop','chop']; деструкториране
    for (let i = 1; i < arr.length; i++){
        let act = arr[i];
        activities(act);
    }

   function activities(act) {
       if (act === 'chop'){
           number /= 2
       }
       if (act === 'dice'){
           number = Math.sqrt(number);
       }
       if (act === 'spice'){
           number += 1;
       }
       if (act === 'bake'){
           number *= 3;
       }
       if (act === 'fillet'){
           number *= 0.8;
       }
       console.log(number)
   }

}
solve(['9', 'dice', 'spice', 'chop', 'bake','fillet']);
