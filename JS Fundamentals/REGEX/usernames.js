function solve(arr) {
    let result = [];
    for (let el of arr) {
        let [username,domain] = el.split('@');
        result.push(username +'.' + domain.split('.').map(el => el[0]).join(''))
    }
    console.log(result.join(', '))
}
solve(['peshoo@gmail.com', 'todor_43@mail.dir.bg', 'foo@bar.com']);