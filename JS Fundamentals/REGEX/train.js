let emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,20}$/i;

console.log(emailPattern.test("test@abv.bg"));
console.log(emailPattern.test("a.hills@gtx.de"));
console.log(emailPattern.test("invalid@@mail"));
console.log(emailPattern.test("err test@abv.bg"));