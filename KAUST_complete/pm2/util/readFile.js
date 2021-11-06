/**
 * 读取文件内容。
 * - 常用于读取配置文件
 */

const fs = require('fs');
const path = require('path');
const readline = require('readline');
const { once } = require('events');

class ReadFile {
    /**
     * 
     * @param {string} fileName 
     */
    static readToJson(fileName, options = { encoding: 'utf8' }) {
        const file = path.join(__dirname, '../..', fileName);

        const content = fs.readFileSync(file, options);

        return JSON.parse(content);
    }
    /**
     * @function readByLine
     * @param {string} fileName
     */
    static async readFileLine(fileName) {
        const file = path.join(__dirname, '../..', fileName);
        const content = await this.readByLine(file);
        // console.log('content:', content);
        
        return content;
    }

    /**
     * 逐行读取文件内容
     * 
     * @param {string} fileName
     */

    static readByLine(fileName) {
        return new Promise((resolve, reject) => {
            let content = [];
            const fileStream = fs.createReadStream(fileName);
            const rl = readline.createInterface({
                input: fileStream,
                crlfDelay: Infinity
            });

            rl.on('line', line => {
                // console.log('\x1B[43m line: \x1B[0m', line);
                content.push(line);
            });
    
            rl.on('close', () => {
                console.log('\x1B[43m 文件已经读取完毕. \x1B[0m');
                resolve(content);
            });
        })
    }
}

module.exports = {
    ReadFile
};