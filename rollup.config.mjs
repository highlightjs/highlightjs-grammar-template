export default {
  input: 'src/languages/example.js',
  output: [
    {
      file: 'dist/example.es.js',
      format: 'es'
    },
    {
      file: 'dist/example.cjs',
      format: 'cjs',
      exports: 'default'
    },
    {
      file: 'dist/example.js',
      format: 'iife',
      name: 'hljsExample',
      footer: 'hljs.registerLanguage("example", hljsExample);'
    }
  ]
};
