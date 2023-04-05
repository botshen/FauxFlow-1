/* eslint-disable no-console */
console.info('chrome-ext template-react-ts background script')

chrome.action.onClicked.addListener((tab) => {
  chrome.windows.create({
    url: chrome.runtime.getURL('popup.html'),
    type: 'popup',
    width: 1000,
    height: 700,
    top: 100,
    left: 270,
  })
})
export {}
