/*! `example` grammar built and tested with Highlight.js 11.12.0 */

/*
Grammar: Example
Description: Replace this stub with your grammar.
Category: misc
*/

function example(hljs) {
  return {
    name: 'Example',
    aliases: [ 'example' ],
    keywords: {
      keyword: 'fn let',
      literal: 'true false'
    },
    contains: [
      hljs.HASH_COMMENT_MODE,
      {
        match: /"[^"]*"/,
        scope: 'string'
      }
    ]
  };
}

export { example as default };
