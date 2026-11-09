// Enable only after the closed track and opt-in URL have been verified live.
// A click on this page never counts as a Google Play enrollment.
const CLOSED_BETA_AVAILABLE = false;
if (CLOSED_BETA_AVAILABLE) {
  const links = {
    optin: 'https://play.google.com/apps/testing/ar.com.truquillo.truquillo',
    download: 'https://play.google.com/store/apps/details?id=ar.com.truquillo.truquillo'
  };
  for (const [id, url] of Object.entries(links)) {
    const link = document.getElementById(id);
    link.href = url;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.removeAttribute('aria-disabled');
  }
  document.querySelectorAll('.pending').forEach(p => p.hidden = true);
  document.getElementById('availability').innerHTML = '<strong>La beta está disponible.</strong> Completá los pasos en orden y volvé acá entre uno y otro.';
}
