const fs = require('fs');

// beautifies the given object with indending of 4 spaces by default.
var beautify = (obj, tab) => JSON.stringify(obj, null, tab);

// prints the beautified object to console.
var pretify = (obj, tab = 4) => console.log(beautify(obj, tab));

// prints the beautified object to a file.
// filename can be given as argument, appending(optional)
var toFile = (obj, fileName, append) => {

    // console.log("came here", fileName === undefined);
    if(obj === undefined) return console.log("Please specify a file name.");
    if(fileName === undefined) return console.log("Please specify a file name.");

    console.log("hsdhafsh");
    let item = beautify(obj);

    fs.writeFile(fileName, obj, (err) => {
        if(err) throw err;
        console.log("Data written to file");
    });
};

module.exports = {
    pretify,
    toFile
};
