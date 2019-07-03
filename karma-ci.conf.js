//Load the base configuration
var baseConfig = require("./karma.conf.js");

module.exports = function (config) {
  // Load base config
  baseConfig(config);
  // Override base config
  config.set({
    browsers: ["IE7"],
    hostname: "karma",
    customLaunchers: {
      "IE7": {
        base: "WebDriver",
        config: {
          hostname: "selenium",
          port: 4444
        },
        browserName: 'internet explorer',
        platform: 'Windows XP',
        version: '10',
        'x-ua-compatible': 'IE=EmulateIE7',
        name: "karma",
        pseudoActivityInterval: 60000
      }
    }
  });
}
