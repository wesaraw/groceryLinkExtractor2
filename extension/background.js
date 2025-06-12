let results = [];

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.local.set({ results: [] });
});

chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  if (msg.name && msg.price && msg.url) {
    results.push(msg);
    chrome.storage.local.set({ results });
  }
});
