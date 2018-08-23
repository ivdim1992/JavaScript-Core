function expression(expres) {
    let elements = expres.split(/[\s.();,]+/);

    console.log(elements.join('\n'))
}
expression('let sum = 4 * 4,b = "wow";');