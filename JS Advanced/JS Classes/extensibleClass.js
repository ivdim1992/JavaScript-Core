(function () {
   let id = 0;

   return class Extended{
       constructor(){
           this.id = id++;
       }

       extend(template){
           for(let prop in template){
               if(typeof template[prop] === 'function'){
                   Extended.prototype[prop] = template[prop]
               }else {
                  this[prop] = template[prop]
               }
           }
       }
   }
}());
