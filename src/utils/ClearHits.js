

const ClearHits = () => {
    try {
        chrome.runtime.sendMessage({ type: 'clearHits' })
    } catch(e) {console.log(e)}
}

export default ClearHits