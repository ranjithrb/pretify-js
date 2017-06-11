const fs = require('fs');

// beautifies the given object with indending of 4 spaces by default.
var beautify = (obj, tab) => {
    let indend = (tab === undefined) ? 4 : tab;
    return JSON.stringify(obj, null, indend);
};

// prints the beautified object to console.
var pretify = (obj, tab) => console.log(beautify(obj, tab));

// prints the beautified object to a file.
// arguments are 'object' to be pretified, filename, append(optional). By default appending is false.
var toFile = (obj, fileName, append) => {

    if(obj === undefined) return console.log("Please pass the object to pretify.");
    if(fileName === undefined) return console.log("Please specify a file name.");

    console.log("---------------------------------------");
    fs.writeFileSync(fileName, beautify(obj));
    console.log("\t Data successfully written to file.");
    console.log("---------------------------------------");
};

module.exports = {
    pretify,
    toFile
};
