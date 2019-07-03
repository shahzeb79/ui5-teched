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
        config: {
          hostname: "0:0:0:0",
          port: 4444
        },
        browserName: "chrome",
        name: "karma",
        pseudoActivityInterval: 30000
      }
    }
  });
}
