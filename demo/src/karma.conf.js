// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage-istanbul-reporter'),
      require('@angular-devkit/build-angular/plugins/karma')
    ],
    client: {
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },
    coverageIstanbulReporter: {
      dir: require('path').join(__dirname, '../coverage'),
      reports: ['html', 'lcovonly'],
      fixWebpackSourcePaths: true
    },
    files: [
      '../../node_modules/bootstrap/dist/css/bootstrap.min.css',
      '../../node_modules/tempusdominus-bootstrap-4/build/css/tempusdominus-bootstrap-4.css',
      '../../node_modules/jquery/dist/jquery.min.js',
      '../../node_modules/bootstrap/dist/js/bootstrap.min.js',
      '../../node_modules/moment/min/moment.min.js',
      '../../node_modules/tempusdominus-bootstrap-4/build/js/tempusdominus-bootstrap-4.js'
    ],
    reporters: ['progress', 'kjhtml'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false
  });
};