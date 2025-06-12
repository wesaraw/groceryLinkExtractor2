setTimeout(() => {
  const nameEl = document.querySelector('span.sr-only');
  const priceEl = document.querySelector('span.product-grid-cell_main-price');
  if (nameEl && priceEl) {
    const name = nameEl.textContent.trim();
    const price = priceEl.textContent.trim();
    chrome.runtime.sendMessage({ name, price, url: window.location.href });
  }
}, 1000);
