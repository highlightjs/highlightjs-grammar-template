# [your language] - a language grammar for highlight.js

Starter repository for a third-party [highlight.js](https://highlightjs.org/) language grammar.

Rename `example` (file, folder, `package.json` `name` / `main`, and `registerLanguage` id) to your language.

## Usage

Simply include the Highlight.js library in your webpage or Node app, then load this module.

### Static website or simple usage

Simply load the module after loading Highlight.js.  You'll use the minified version found in the `dist` directory.  This module is just a CDN build of the language, so it will register itself as the Javascript is loaded.

```html
<script type="text/javascript" src="/path/to/highlight.min.js"></script>
<script type="text/javascript" src="/path/to/example.min.js"></script>
<script type="text/javascript">
  hljs.highlightAll();
</script>
```

### Using directly from the UNPKG CDN

```html
<script type="text/javascript"
  src="https://unpkg.com/highlightjs-your-language/dist/example.min.js"></script>
```

- More info: <https://unpkg.com>

### With Node or another build system

If you're using Node / Webpack / Rollup / Browserify, etc, simply require the language module, then register it with Highlight.js.

```javascript
var hljs = require('highlight.js');
var hljsExample = require('highlightjs-grammar-template');

hljs.registerLanguage("example", hljsExample);
hljs.highlightAll();
```

## Develop

Clone [highlight.js](https://github.com/highlightjs/highlight.js) and clone this repo into `extra/`:

```bash
git clone https://github.com/highlightjs/highlight.js.git
cd highlight.js
git clone https://github.com/highlightjs/highlightjs-grammar-template.git extra/highlightjs-grammar-template
npm install
```

Markup tests for extras:

```bash
ONLY_EXTRA=true npm run test-markup
```

CDN file (`dist/example.min.js`):

```bash
node tools/build.js -t cdn
```

Commit the generated `dist/` files.

In this repo, `npm test` / `npm run test-markup` runs the same markup fixtures against `highlight.js/lib/core`.

## License

MIT. See [LICENSE](LICENSE).
