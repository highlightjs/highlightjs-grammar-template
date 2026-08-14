/*
Language: Example
Description: Replace this stub with your language grammar.
Category: misc
*/

module.exports = function(hljs) {
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
};
