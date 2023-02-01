const fs = require("fs");

fs.appendFile("./sometext.txt","Hello World!", function(err) {
if(!!err) console.error("there is an error Here!")
console.log("successfully appended");
})