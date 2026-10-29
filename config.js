// Public site settings. Rebuild and re-export after changing owner details or contacts.
window.SITE_CONFIG = Object.freeze({
  "BOOKING_URL": "",
  "WHATSAPP_URL": "https://wa.me/79951513253",
  "MAX_URL": "https://max.ru/u/f9LHodD0cOL5aLSzYDBotzUH5e8lNNIxes0kPNpu0vthLGxybMEYItW7y1I",
  "OWNER_NAME": "Ермолова Юлия Вячеславовна",
  "OWNER_STATUS": "Самозанятая",
  "PRIVACY_EMAIL": "mechtapro@mail.ru"
});
const additionsScript = document.createElement('script');
additionsScript.src = 'content-additions.js';
additionsScript.defer = true;
document.head.append(additionsScript);
