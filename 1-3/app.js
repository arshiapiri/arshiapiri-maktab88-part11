const fs = require("fs");

fs.exists("./text.txt", function(error){
    !!error ? console.error("file founded") : console.log("file not found")
})