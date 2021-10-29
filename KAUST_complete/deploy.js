/**
 * 部署前检查部署路径
 * 如有多个环境，需要扩展
 */
const gulp = require('gulp');
const sftp = require('gulp-sftp-up5');
const CONFIG = require('./.env.sftp.json');

const sftpConfig = {
    test: {
        remotePath: '',
        SFTP: 'test',
        removeCurrentFolderFiles: true
    },
    prod: {
        remotePath: '',
        SFTP: 'prod',
        removeCurrentFolderFiles: true
    }
};

gulp
.src('./' + CONFIG.outputDir + "/**")
.pipe(sftp(sftpConfig[process.env.APP_ENV]));