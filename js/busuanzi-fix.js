document.addEventListener('DOMContentLoaded', () => {
  const mapping = {
    'busuanzi_site_pv': 'busuanzi_value_site_pv',
    'busuanzi_site_uv': 'busuanzi_value_site_uv'
  };

  Object.keys(mapping).forEach(newId => {
    const old = document.getElementById(mapping[newId]);
    if (old) {
      old.id = newId;
    }
  });
});