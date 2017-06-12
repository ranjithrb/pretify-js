const pretify = require('./index'),
    arr = ["one", "two", "three"];

// pretifies the arrray object
pretify.pretify(arr);
// prints the pretified arr object to the file named sample.js
pretify.toFile(arr, "sample.js");
