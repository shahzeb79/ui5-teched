//Load the base configuration
var baseConfig = require("./karma.conf.js");

module.exports = function (config) {
  // Load base config
  baseConfig(config);
  // Override base config
  config.set({
    browsers: ["RemoteChrome"],
    hostname: "objective_sammet",
    customLaunchers: {
      "RemoteChrome": {
        base: "WebDriver",
        config: {
          hostname: "elated_jepsen",
          port: 4444
        },
        browserName: "chrome",
        name: "objective_sammet",
        pseudoActivityInterval: 30000
      }
    }
  });
}
