/**
 * 部署的配置文件
 */
const fs = require('fs');
const { ReadFile } = require('./pm2/util/readFile');
// const config = JSON.parse(fs.readFileSync('./pm2.config.json', { encoding: 'utf-8' }));
const config = ReadFile.readToJson('./pm2.config.json');

// console.log('config:', config);
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
      user : config.prod.user,
      host : [config.prod.host],
      port: config.prod.port,
      ref  : config.prod.ref,
      repo : config.prod.repo,
      path : config.prod.path,
      'ssh_options': 'StrictHostKeyChecking=no',
      'pre-setup': "echo 'This is a pre-setup command'",
      'post-setup': "ls -al",
      'pre-deploy-local': 'echo "This is a pre-deploy command"',
      // 'post-deploy' : 'cd /home/fwx/source/KAUST_CMS/KAUST_complete && npm install && pm2 reload ecosystem.config.js --env production',
      'post-deploy' : config.prod.postDeploy.join(' && '),
    }
  }
};
