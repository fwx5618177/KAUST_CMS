const fs = require('fs');

const open = function* (file, encode) {
    let files
    yield files = fs.readFileSync(file, { encoding: encode });
    
    return files;
}

module.exports = {
    open
}