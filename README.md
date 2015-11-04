#### reporter
`npm install karma-spec-reporter --save-dev`

`karma-jasmine-diff-reporter`

`karma-html2js-preprocessor`


ref : 

record more details from below url

http://stackoverflow.com/questions/17289423/need-proper-reporter-for-karma-jasmine

	
If all of your plugins start with karma- then you don't have to reference any of them. The default behaviour is to load all karma-* plugins


run the test by karma by using `karma start`, make sure to have the karma-cli installed

Or you can use grunt to execute the karma tests

#### make sure to have grunt-cli installed
npm install -g grunt-cli

#### run the tests
grunt test



if cmd dont refresh, type `ctrl + r` to force it 