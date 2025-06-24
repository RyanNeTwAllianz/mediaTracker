

const ClearHits = () => {
    console.log('dsfsdfds')
    try {
        chrome.runtime.sendMessage({ type: 'clearHits' })
    } catch(e) {console.log(e)}
}

export default ClearHits