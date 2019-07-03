#!/usr/bin/env groovy
@Library(['piper-lib', 'piper-lib-os']) _

try {
 if (env.BRANCH_NAME == 'master' || env.BRANCH_NAME == 'develop') {
        stage('Checkout') {
            node {
                deleteDir()
                checkout scm
                setupPipelineEnvironment script: this, storeGitHubStatistics: false
                measureDuration(script: this, measurementName: 'build_duration') {
                   stash name: 'master'
                }
            }
        }
        
        
        // OPA5 tests integration to stage in the pipeline after local build
        stage('Execute OPA tests') {
            node {
                deleteDir()
                measureDuration(script: this, measurementName: 'OPA_test_duration') {
                    unstash 'master'
                    karmaExecuteTests script: this
                   
                }
            }
        }

        
        // UIVeri5 tests integration to stage in the pipeline post OPA Tests
        stage('Execute Uiver5 tests') {
            node {
                deleteDir()
                measureDuration(script: this, measurementName: 'uiveri5_test_duration') {

                }
            }
        }
    }
    
} 
// Retrieve all errors which are thrown as an exception

catch (Throwable err) { // catch all exceptions
    globalPipelineEnvironment.addError(this, err)
    throw err
} finally {
    if (env.BRANCH_NAME.startsWith('PR') || env.BRANCH_NAME == 'master' || env.BRANCH_NAME == 'develop') {
        node{
            writeInflux script: this
        }
    }
}
