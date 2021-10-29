/**
 * 部署前检查部署路径
 * 如有多个环境，需要扩展
 */
const gulp = require('gulp');
const sftp = require('gulp-sftp-up5');
const CONFIG = require('./.env.sftp.json');

const sftpConfig = {
    test: {
        remotePath: CONFIG.test.remotePath,
        SFTP: 'test',
        removeCurrentFolderFiles: true,
    },
    prod: {
        remotePath: '',
        SFTP: 'prod',
        removeCurrentFolderFiles: true
    }
};

const result = {
    ...sftpConfig[process.env.APP_ENV],
    ...CONFIG[process.env.APP_ENV],
}
console.log(result);
gulp
.src('./' + CONFIG.outputDir + "/**")
.pipe(sftp(result));