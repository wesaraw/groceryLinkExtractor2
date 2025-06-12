setTimeout(() => {
  const nameEls = document.querySelectorAll('span.sr-only');
  const priceEls = document.querySelectorAll('span.product-grid-cell_main-price');
  const items = [];
  for (let i = 0; i < Math.min(nameEls.length, priceEls.length); i++) {
    const name = nameEls[i].textContent.trim();
    const price = priceEls[i].textContent.trim();
    items.push({ name, price, url: window.location.href });
  }
  if (items.length) {
    chrome.runtime.sendMessage({ items });
  }
}, 1000);
