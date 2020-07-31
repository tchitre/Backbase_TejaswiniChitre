exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {
    Puppeteer: {
      url: 'https://qa-task.backbasecloud.com',
      show: true,
      basicAuth: {username: 'candidatex', password: 'qa-is-cool'},
      windowSize: '1200x900',
      waitForNavigation: "networkidle0"
    }
  },
  include: {
    I: './steps_file.js'
  },
  bootstrap: null,
  mocha: {},
  name: 'Backbase',
  plugins: {
    retryFailedStep: {
      enabled: true
    },
    screenshotOnFail: {
      enabled: true
    },
    "allure": {
      "enabled": true
    }
  }
}