const texmath = require('markdown-it-texmath')
const katex = require('katex')

hexo.extend.filter.register('markdown-it:renderer', function (md) {
  md.use(texmath, {
    engine: katex,
    delimiters: 'dollars'
  })
})