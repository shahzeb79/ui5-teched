//Load the base configuration
var baseConfig = require("./karma.conf.js");

module.exports = function (config) {
  // Load base config
  baseConfig(config);
  // Override base config
  config.set({
    browsers: ["Firefox"],
    hostname: "karma",
    customLaunchers: {
      "Firefox": {
        base: "WebDriver",
        config: {
          hostname: "selenium",
          port: 4444
        },
        browserName: 'firefox',
        name: "karma",
        pseudoActivityInterval: 60000
      }
    }
  });
}
