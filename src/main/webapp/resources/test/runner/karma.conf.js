// Karma configuration
// Generated on Wed Oct 21 2015 23:50:11 GMT+0800 (台北標準時間)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '../../', // basePath = resources folder
                        // default is where the config file located.


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine','sinon'],

    // plugins: [
    //     'karma-jasmine',
    //     'karma-sinon',            
    //     'karma-chrome-launcher',
    //     'karma-jquery'
    // ],

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
    },


    // list of files / patterns to load ( npm install karma-jasmine-jquery ) in the browser
    files: [
      { pattern: 'test/fixtures/*.html', 
        watched: true, 
        included: false,   
        served: true 
      },        

      // dependencies
      'js/framework/jquery/dist/jquery.min.js',
      'test/helper/jasmine-jquery.js',
      'test/helper/Jasmine-Matchers-2.0.0-beta2/dist/jasmine-matchers.js',

      // code u want to test
      'js/model.js',

      // test code
      'test/type/unit/byJasmine/*.js',
    ],


    // list of files to exclude
    exclude: [
    ],

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false
  });
};
