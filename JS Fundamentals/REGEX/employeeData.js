function employee(arr) {
    let pattern = /^([A-Z][a-zA-Z]*) - ([1-9][0-9]*) - ([a-zA-Z0-9-]+)$/;
    let result = [];

    for (let  employee of arr) {
        let match = pattern.exec(employee);
        if(match){
            console.log(`Name: ${match[1]}\n` +
                `Position: ${match[3]}\n` +
                `Salary: ${match[2]} `);
        }

    }
    console.log(result.join('\n'))
}
employee(['Jonathan - 2000 - Manager',
    'Peter- 1000- Chuck',
    'George - 1000 - Team Leader']);