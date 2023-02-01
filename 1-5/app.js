const fs = require("fs");

let userData =JSON.parse(fs.readFileSync("./user-data.json"))

console.log(userData.filter((user) => user.age > 18));

