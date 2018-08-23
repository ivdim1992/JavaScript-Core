class Data {
    constructor(method,uri,version,message,response = undefined,fulfiled = false) {
        this.method = method;
        this.uri = uri;
        this.version = version;
        this.message = message;
        this.response = response;
        this.fulfilled = fulfiled;
    }
}
let myData = new Data('GET', 'http://google.com', 'HTTP/1.1', '')
console.log(myData)