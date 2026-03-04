pipeline {
    agent any
    tools {
	nodejs 'NODE25'
    }
    stages {

        stage('Checkout Code') {
            steps {
                script {
                    checkout scm
                }
            }
        }

        stage('Install Dependencies') {
            steps {
                script {
		    sh 'npm init -y'
		    sh 'npm install express'
                    sh 'npm install'
                }
            }
        }

        stage('Run App') {
            steps {
                script {
                    sh 'pkill -f "node app.js" || true'
                    sh 'nohup node app.js > app.log 2>&1 &'
                    sleep 5
                    sh "curl -s http://localhost:${params.CUSTOM_PORT}/hello"
                }
            }
        }
    }

    post {
        always {
            echo 'Cleaning up...'
        }
    }
}
