setTimeout(() => {
  const containers = document.querySelectorAll(
    '.product-grid-cell_price-container'
  );
  const items = [];
  containers.forEach((container) => {
    const nameEl = container.querySelector(':scope > span.sr-only');
    const priceEl = container.querySelector('.product-grid-cell_main-price');
    if (nameEl && priceEl) {
      const name = nameEl.textContent.trim();
      let priceText = priceEl.textContent.trim();
      const match = priceText.match(/\$[\d.,]+/);
      const price = match ? match[0] : priceText;
      items.push({ name, price, url: window.location.href });
    }
  });
  if (items.length) {
    chrome.runtime.sendMessage({ items });
  }
}, 1000);
