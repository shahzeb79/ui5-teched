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
          hostname: "cloudl000024.wdf.sap.corp",
          port: 4444
        },
        browserName: "chrome",
        name: "karma",
        pseudoActivityInterval: 30000
      }
    }
  });
}
