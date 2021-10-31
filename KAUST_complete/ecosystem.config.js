module.exports = {
  apps : [{
    name: "KAUST_CMS",
    script: 'index.js',
    watch: '.'
  }, {
    script: './service-worker/',
    watch: ['./service-worker']
  }],

  deploy : {
    production : {
      user : 'fwx',
      host : ['49.233.64.173'],
      port: "65534",
      ref  : 'origin/master',
      repo : 'git@github.com:fwx5618177/KAUST_CMS.git',
      path : '/home/fwx',
      'ssh_options': 'StrictHostKeyChecking=no',
      'pre-setup': "echo 'This is a pre-setup command'",
      'post-setup': "ls -al",
      'pre-deploy-local': 'echo "This is a pre-deploy command"',
      // 'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production',
      'post-deploy' : 'npm install && npm run build && nginx reload',
    }
  }
};
