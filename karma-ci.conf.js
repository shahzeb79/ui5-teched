//Load the base configuration
var baseConfig = require("./karma.conf.js");

module.exports = function (config) {
  // Load base config
  baseConfig(config);
  // Override base config
  config.set({
    browsers: ["RemoteChrome"],
    hostname: "karma",
    customLaunchers: {
      "RemoteChrome": {
        base: "WebDriver",
        flags: ['--disable-translate', '--disable-extensions', '--remote-debugging-port=9223', '--start-maximized'] 
        config: {
          hostname: "selenium",
          port: 4444
        },
        browserName: 'chrome',
        name: "karma",
        pseudoActivityInterval: 60000
      }
    }
  });
}
