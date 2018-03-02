const fs = require('fs');

exports.run = function (spriteFilePath, outputFilePath) {
    // todo inject file into html
    const spriteSrc = spriteFilePath
    const outputSrc = outputFilePath
    let buffer = null
    fs.readFile(spriteSrc, 'utf8', function (err, data) {
        if (err) throw err
        fs.open(outputSrc, 'w', function (err, fd) {
            if (err) { throw 'error opening file: ' + err }
            const resultStr = '<!DOCTYPE html>\n' +
                '<html {{ HTML_ATTRS }}>\n' +
                '  <head>\n' +
                '    {{ HEAD }}\n' +
                '  </head>\n' +
                '  <body {{ BODY_ATTRS }}>\n' +
                data +
                '    {{ APP }}\n' +
                '  </body>\n' +
                '</html>'
            buffer = new Buffer(resultStr)
            fs.write(fd, buffer, 0, buffer.length, null, function (err) {
                if (err) throw 'error writing file: ' + err
                fs.close(fd, function () {
                    // done
                })
            })
        })
    })
}