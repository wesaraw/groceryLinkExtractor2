function buildCSV(data) {
  const header = 'Name,Price,URL\n';
  const rows = data.map(item => `${item.name},${item.price},${item.url}`).join('\n');
  return header + rows;
}

function downloadCSV(csv) {
  const blob = new Blob([csv], { type: 'text/csv' });
  const url = URL.createObjectURL(blob);
  chrome.downloads.download({ url, filename: 'beef_prices.csv', saveAs: true }, () => {
    URL.revokeObjectURL(url);
  });
}

const countEl = document.getElementById('item-count');

function updateCount() {
  chrome.storage.local.get({ results: [] }, (data) => {
    countEl.textContent = data.results.length.toString();
  });
}

document.getElementById('download').addEventListener('click', () => {
  chrome.storage.local.get({ results: [] }, (data) => {
    const csv = buildCSV(data.results);
    downloadCSV(csv);
  });
});

document.addEventListener('DOMContentLoaded', updateCount);
chrome.storage.onChanged.addListener(updateCount);
