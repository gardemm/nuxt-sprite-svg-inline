# nuxt-sprite-svg-inline

# Гордое название проекта

[![npm version][npm-image]][npm-url]
[![Downloads][downloads-image]][downloads-url]

[npm-image]: https://img.shields.io/npm/v/nuxt-sprite-svg-inline.svg?style=flat-square
[npm-url]: https://npmjs.org/package/nuxt-sprite-svg-inline
[downloads-image]: http://img.shields.io/npm/dm/nuxt-sprite-svg-inline.svg?style=flat-square
[downloads-url]: https://npmjs.org/package/nuxt-sprite-svg-inline 

> [Nuxt.js](https://nuxtjs.org) plugin

If you have `oneSprite.svg` like this:
```html
<svg xmlns="http://www.w3.org/2000/svg">
    <symbol id="custom-id-1">
        ...
    </symbol>
    <symbol id="custom-id-2">
        ...
    </symbol>
</svg>
```

Then, you can display it like this:
```html
<svg>
    <use xlink:href="#custom-id-1"></use>
</svg>

<svg>
    <use xlink:href="#custom-id-2"></use>
</svg>

```

## Quick start

Install:

```bash
yarn add nuxt-sprite-svg-inline # or npm install -D nuxt-sprite-svg-inline
```

Register it on your `nuxt.config.js`:

```js
const path = require('path')
const spriteSvg = require('nuxt-sprite-svg-inline')

module.exports = {
    /* ... */
    build: {
        extend (config, ctx) {
            if(ctx.isServer) {
                spriteSvg.run(path.join(__dirname,  'path/to/sprite.svg'),
                    path.join(__dirname,  '.nuxt/views/app.template.html'))
            }
        }
    }
}
```

It will inject your oneSprite.svg at the top of `body` into the `app.template.html`  after every new build.

# Example

```bash
# dev test
npm run dev

# production test
npm run build
```

# License

MIT
