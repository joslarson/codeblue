// Called when the url of a tab changes.
function checkForValidUrl(tabId, changeInfo, tab) {
  // If the letter 'g' is found in the tab's URL...
  if (tab.url.indexOf('http://jetblue.rp4me.com/') > -1) {
    // ... show the page action.
    chrome.pageAction.show(tabId);
  }
}

// Listen for any changes to the URL of any tab.
chrome.tabs.onUpdated.addListener(checkForValidUrl);

chrome.runtime.onConnect.addListener(function(port) {
  console.assert(port.name == "codeblue");
  port.onMessage.addListener(function(msg) {
    if (msg.request == "options")
      port.postMessage({options: localStorage});
  });
});