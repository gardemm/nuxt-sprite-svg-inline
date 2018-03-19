const path = require('path')
const inlineSvg = require('../')

module.exports = {

    head: {
        title: 'Nuxt-sprite-svg-inline',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=0, shrink-to-fit=no' },
        ]
    },

    srcDir: __dirname,

    build: {
        extend (config, ctx) {
            if(ctx.isServer) {
                // console.log(path.join(__dirname, '/demo.svg'))
                // console.log(path.join(__dirname, '../', '.nuxt/views/app.template.html'))
                inlineSvg.run(path.join(__dirname, '/demo.svg'),
                    path.join(__dirname, '../', '.nuxt/views/app.template.html'))
            }
        }
    }
}