function delimeter(string,delimeter) {
    let result = string.split(delimeter);
    console.log(result.join('\n'))
}
delimeter('One-Two-Three-Four-Five','-');