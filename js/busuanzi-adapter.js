document.addEventListener('DOMContentLoaded', function () {
  const map = {
    'busuanzi_value_site_pv': 'busuanzi_site_pv',
    'busuanzi_value_site_uv': 'busuanzi_site_uv'
  };

  Object.keys(map).forEach(oldId => {
    const el = document.getElementById(oldId);
    if (el) {
      el.id = map[oldId];
    }
  });
});