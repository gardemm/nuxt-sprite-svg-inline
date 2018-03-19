const fs = require('fs');

exports.run = function (spriteSrc, outputFilePath) {
    fs.readFile(spriteSrc, 'utf8', function (err, data) {
        if (err) throw err

        fs.open(outputFilePath, 'w', function (err, fd) {
            if (err) throw err

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
            const buffer = new Buffer(resultStr)

            fs.write(fd, buffer, 0, buffer.length, null, function (err) {
                if (err) throw err
                fs.close(fd, function () {
                    // done!
                })
            })
        })

    })
}