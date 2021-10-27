const fs = require('fs');

const open = (async (file, encode) => {
    let views;
    const files = await fs.readFile(file, { encoding: encode }, (err, data) => {
        if(err) throw err;
        views = data;
    });
    

    return views;
})

module.exports = {
    open
}