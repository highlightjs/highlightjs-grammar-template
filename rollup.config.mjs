import { createRequire } from 'module';

const require = createRequire(import.meta.url);
const hljsVersion = require('highlight.js/package.json').version;
const banner = `/*! \`example\` grammar built and tested with Highlight.js ${hljsVersion} */\n`;

export default {
  input: 'src/languages/example.js',
  output: [
    {
      file: 'dist/example.es.js',
      format: 'es',
      banner
    },
    {
      file: 'dist/example.cjs',
      format: 'cjs',
      exports: 'default',
      banner
    },
    {
      file: 'dist/example.js',
      format: 'iife',
      name: 'hljsExample',
      banner,
      footer: 'hljs.registerLanguage("example", hljsExample);'
    }
  ]
};
