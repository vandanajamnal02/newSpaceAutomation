const Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
const HtmlScreenshotReporter = require('protractor-jasmine2-screenshot-reporter');

exports.config = {

    seleniumAddress: 'http://localhost:4444/wd/hub',
    seleniumServerJar:'node_modules\webdriver-manager\selenium\selenium-server-standalone-3.141.59.jar',

    specs: ['./specs/spec.js'],

    capabilities: {
      browserName: 'chrome',

      chromeOptions: {
        args: ["no-sandbox"]
      }
    },

    jasmineNodeOpts: {
      isVerbose: true,
      defaultTimeoutInterval: 20000000

    },

      

    onPrepare: function() {

      browser.ignoreSynchronization = true;
        jasmine.getEnv().addReporter(
          new Jasmine2HtmlReporter({
            savePath: 'testresults',

            
          }),
          new HtmlScreenshotReporter({
            dest: 'testresults/screenshots',
            filename: 'my-report.html',
            captureOnlyFailedSpecs: true
           }),
        );
     }
     


  };