/* global chrome */

function main() {
  const extensionOrigin = "chrome-extension://" + chrome.runtime.id;
  // Fetch the local React index.html page
  fetch(chrome.runtime.getURL("index.html") /*, options */)
    .then((response) => response.text())
    .then((html) => {
      const styleStashHTML = html.replace(
        /\/static\//g,
        `${extensionOrigin}/static/`
      );
      // eslint-disable-next-line no-undef
      $(styleStashHTML).appendTo("body");
    })
    .catch((error) => {
      console.warn(error);
    });
}

window.addEventListener("message", function (event) {
  if (event.source !== window) return;
  onDidReceiveMessage(event);
});

async function onDidReceiveMessage(event) {
  if (event.data.type && event.data.type === "GET_EXTENSION_ID") {
    window.postMessage(
      { type: "EXTENSION_ID_RESULT", extensionId: chrome.runtime.id },
      "*"
    );
  }
}

main();
