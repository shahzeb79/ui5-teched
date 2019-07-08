#!/usr/bin/env groovy
@Library(['piper-lib-os']) _

node {
   def mvnHome
   stage('Preparation') { // for display purposes
      // Get some code from a GitHub repository
      git 'https://github.com/shahzeb79/ui5-teched.git'
      karmaExecuteTests script: this, failOnError: false
      
      // Get the Maven tool.
      // ** NOTE: This 'M3' Maven tool must be configured
      // **       in the global configuration.           
   }
   stage('Results') {
      publishHTML target: [
                                    allowMissing: true,
                                    keepAll: true,
                                    reportDir: 'coverage/Chrome 75.0.3770 (Linux 0.0.0)/',
                                    reportFiles: 'index.html',
                                    reportName: "OPA Report"
                    ]

   }
   stage('Results') {
     testsPublishResults(
                        script: this,
                        junit: [pattern: 'target/karma/*/TEST*.xml', archive: true]
                    )
   }
}
