const fs = require("fs");

fs.writeFile("./thirdText.txt","create and delete file with node js",function(err){
    if(!!err) console.error("there is an error Here!");
    console.log("successfully appended");
})

fs.unlink("./thirdText.txt", (err) => {
    if (err) {
        throw err;
    }

    console.log("Delete File successfully.");
});