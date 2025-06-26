import GuessMediaFromUrl from '../utils/GuessMediaFromUrl.js'

let arr = []

chrome.webRequest.onBeforeRequest.addListener(
  function(details) {
        const media = GuessMediaFromUrl(details.url.toLowerCase())

        if (media) {
            arr.push({ media, ...details})
            chrome.runtime.sendMessage({ type: 'mediaHits', hits: arr }) 
        }

      },
  { urls: ["<all_urls>"] }
)


chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === 'clearHits') {
    arr = []
    sendResponse({ status: 'success', message: 'Hits cleared' })
  }
})