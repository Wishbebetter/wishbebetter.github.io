document.addEventListener('DOMContentLoaded', () => {
  const map = {
    'busuanzi_value_site_pv': 'vercount_value_site_pv',
    'busuanzi_value_site_uv': 'vercount_value_site_uv'
  }

  Object.entries(map).forEach(([oldId, newId]) => {
    const element = document.getElementById(oldId)

    if (element) {
      element.id = newId
    }
  })
})