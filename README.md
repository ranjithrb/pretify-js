![Travis](https://img.shields.io/travis/ranjithrb/pretify-js.svg?style=flat-square)

# pretify-js

Pretifies the javascript object given as arguments.

# Usage

`npm install --save-dev pretify-js`

1. Requiring the module
	**`var p = require('pretify-js')`**

2. Pretify an array or js object or combination of both.
    * The object is passed as the first argument followed indending space which is optional. By default indend is by 4 spaces.      
        **`p.pretify(obj, indend);`**

3. Writing the pretified object to a file.
    * The pretified can be viewed from a file, which helps to views if the data is too long view in console. Also acting as an offline json beautifier.
		**`p.toFile(obj, filename);`** Note: This operation overwrites any data on the file given.
