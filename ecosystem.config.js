module.exports = {
  apps: [{
    name: 'fashova-header',
    script: 'server'
  }],
  deploy: {
    production: {
      user: 'ubuntu',
      host: 'ec2-35-172-135-39.compute-1.amazonaws.com',
      key: '~/.ssh/fashova-header.pem',
      ref: 'origin/master',
      repo: 'https://github.com/anthon78/header',
      path: '/home/ubuntu/header',
      'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
    }
  }
}