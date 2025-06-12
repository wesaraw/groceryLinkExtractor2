let results = [];

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.local.set({ results: [] });
  chrome.action.setBadgeBackgroundColor({ color: '#FF0000' });
  chrome.action.setBadgeText({ text: '0' });
});

chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  if (Array.isArray(msg.items)) {
    results = results.concat(msg.items);
    chrome.storage.local.set({ results });
    chrome.action.setBadgeText({ text: String(results.length) });
  } else if (msg.name && msg.price && msg.url) {
    results.push({ name: msg.name, price: msg.price, url: msg.url });
    chrome.storage.local.set({ results });
    chrome.action.setBadgeText({ text: String(results.length) });
  }
});
