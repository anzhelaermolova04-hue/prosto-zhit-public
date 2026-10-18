'use strict';
const bookingDialog = document.querySelector('#booking-dialog');
const certificateDialog = document.querySelector('#certificate-dialog');
const dialogTriggers = new WeakMap();
function openDialog(dialog, trigger) {
  if (!dialog || dialog.open) return;
  dialogTriggers.set(dialog, trigger);
  dialog.showModal();
}
function safeHTTPS(value) {
  try { const url = new URL(value); return url.protocol === 'https:' ? url.href : ''; }
  catch { return ''; }
}
// Keep every rendered contact link in sync with the shared public settings.
for (const link of document.querySelectorAll('[data-contact]')) {
  const destination = safeHTTPS(window.SITE_CONFIG?.[link.dataset.contact]);
  if (destination) link.href = destination;
  else link.hidden = true;
}
for (const button of document.querySelectorAll('[data-booking]')) {
  button.addEventListener('click', () => {
    const destination = safeHTTPS(window.SITE_CONFIG?.BOOKING_URL?.trim());
    if (destination) { window.location.assign(destination); return; }
    openDialog(bookingDialog, button);
  });
}
document.querySelector('[data-certificate]')?.addEventListener('click', event => openDialog(certificateDialog, event.currentTarget));
for (const link of document.querySelectorAll('[data-document]')) {
  link.addEventListener('click', event => {
    if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey || event.button !== 0) return;
    const dialog = document.querySelector(`#${link.dataset.document}-dialog`);
    if (!dialog) return;
    event.preventDefault();
    openDialog(dialog, link);
  });
}
for (const dialog of document.querySelectorAll('dialog')) {
  dialog.querySelector('[data-close]').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', event => {
    const rect = dialog.getBoundingClientRect();
    if (event.target === dialog && (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom)) dialog.close();
  });
  dialog.addEventListener('close', () => dialogTriggers.get(dialog)?.focus());
}
const wideScreen = window.matchMedia('(min-width: 701px)');
function adaptFAQ() { document.querySelectorAll('.question').forEach(item => { item.open = wideScreen.matches; }); }
adaptFAQ();
wideScreen.addEventListener('change', adaptFAQ);
