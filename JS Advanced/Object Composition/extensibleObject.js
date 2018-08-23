function extensibleObj() {
    let obj = {
        extend: function (template) {

            for (let key in template) {

                if (template.hasOwnProperty(key)) {
                    let element = template[key]

                    if(typeof element === 'function'){
                        obj.__proto__[key] = element
                    }else {
                        obj[key] = element;
                    }
                }

            }
        }
    };
    return obj
}

console.log({}.__proto__)
let obj = extensibleObj();
let template = {
    extensionMethod: function(){
        console.log('something')
    },
    extensionProp: 'Goshko'
};
obj.extend(template)
console.log(obj)
console.log(Object.getPrototypeOf(obj))