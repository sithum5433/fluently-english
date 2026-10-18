// Show a recoverable message if an application module fails to load.
function showLoadError(error) {
  console.error('Fluently could not start:', error);
  const container = document.getElementById('app');
  const panel = document.createElement('div');
  panel.className = 'error-screen';
  const title = document.createElement('h1');
  title.textContent = 'Let’s get you back to learning.';
  const message = document.createElement('p');
  message.textContent = location.protocol === 'file:'
    ? 'Open Fluently through the local website address so your lessons can load.'
    : 'Your learning space couldn’t load. Refresh the page to try again.';
  const retry = document.createElement(location.protocol === 'file:' ? 'a' : 'button');
  retry.className = 'btn btn-primary';
  if (location.protocol === 'file:') {
    retry.href = 'http://localhost:4173/';
    retry.textContent = 'Open Fluently';
  } else {
    retry.type = 'button';
    retry.textContent = 'Try again';
    retry.addEventListener('click', () => {
      const freshURL = new URL(location.href);
      freshURL.searchParams.set('reload', Date.now().toString());
      location.replace(freshURL.href);
    });
  }
  panel.append(title, message, retry);
  const details = document.createElement('details');
  details.style.marginTop = '24px';
  const summary = document.createElement('summary');
  summary.textContent = 'Show loading error';
  const diagnostic = document.createElement('pre');
  diagnostic.style.cssText = 'white-space:pre-wrap;overflow-wrap:anywhere;font-size:12px;line-height:1.7';
  diagnostic.textContent = `${error?.name || 'Error'}: ${error?.message || String(error)}`;
  details.append(summary, diagnostic);
  panel.append(details);
  container.replaceChildren(panel);
}

if (location.protocol === 'file:') {
  showLoadError(new Error('Serve the website over HTTP to load its modules.'));
} else {
  import('./app.js?v=20261018-3').catch(showLoadError);
}
