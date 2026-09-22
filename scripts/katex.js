hexo.extend.filter.register('markdown-it:renderer', function (md) {
  md.use(require('markdown-it-katex'))
})