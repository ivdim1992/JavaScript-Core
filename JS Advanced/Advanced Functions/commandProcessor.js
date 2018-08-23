function solve(commands) {

    let processor = (function () {
        let text = '';

        return function commandProcessor(arrayString) {
            let [command, stringText] = arrayString.split(' ');

            switch (command) {
                case 'append':
                    text += stringText;
                    break;
                case 'removeStart':
                    text = text.slice(Number(stringText));
                    break;
                case 'removeEnd':
                    text = text.slice(0, text.length - Number(stringText));
                    break;
                case 'print':
                    console.log(text);
                    break;
            }
        }
    }())

    for(let command of commands){
        processor(command)
    }

}
solve(['append hello',
'append again',
'removeStart 3',
'removeEnd 4',
'print'])



