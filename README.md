# highlight.js grammar template

Starter repository for a third-party [highlight.js](https://highlightjs.org/) language grammar.

Rename `example` (file, folder, `package.json` `name` / `main`, and `registerLanguage` id) to your language.

## Usage

Load highlight.js first, then this package.

### Browser (CDN build)

The file in `dist/` is a CDN build. It registers itself when the script loads.

```html
<script src="/path/to/highlight.min.js"></script>
<script src="/path/to/example.min.js"></script>
<script>
  hljs.highlightAll();
</script>
```

UNPKG (after you publish):

```html
<script src="https://unpkg.com/highlightjs-your-language/dist/example.min.js"></script>
```

### Node / bundlers

```js
const hljs = require('highlight.js');
const example = require('highlightjs-grammar-template');

hljs.registerLanguage('example', example);
```

## Develop

Clone [highlight.js](https://github.com/highlightjs/highlight.js) and put this repo in `extra/`:

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

Commit the generated `dist/` file.

In this repo, `npm test` / `npm run test-markup` runs the same markup fixtures against `highlight.js/lib/core`.

## License

MIT. See [LICENSE](LICENSE).
