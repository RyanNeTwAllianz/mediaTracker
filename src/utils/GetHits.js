
const GetHits = (callback) => {
  const handler = (message) => {
    if (message.type === "mediaHits" && message.hits) {
        callback(message.hits)
    }
  }

  chrome.runtime.onMessage.addListener(handler)
  return () => chrome.runtime.onMessage.removeListener(handler)
}

export default GetHits
