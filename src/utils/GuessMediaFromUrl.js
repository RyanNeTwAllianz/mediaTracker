
const GuessMediaFromUrl = (url) => {

    if (url.includes('snapchat')) {
        return 'SNAPCHAT'
    } else if (url.includes('facebook')) {
        return 'FACEBOOK'
    } else if (url.includes('linkedin')) {
        return 'LINKEDIN'
    } else if (url.includes('tiktok')) {
        return 'TIKTOK'
    } else if (url.includes('onemarketingazeu')) {
        return 'B/SS'
    } else if (url.includes('taboola')) {
        return 'TABOOLA'
    } else if (url.includes('contentsquare')) {
        return 'CONTENT_SQUARE'
    } else if (url.includes('doubleclick')) {
        return 'DOUBLE_CLICK'
    } else if (url.includes('stackadapt')) {
        return 'STACKADAPT'
    } else if (url.includes('bing')) {
        return 'BING'
    } else if (url.includes('outbrain')) {
        return 'OUTBRAIN'
    } else if (url.includes('powerspace')) {
        return 'POWER_SPACE'
    } else if (url.includes('time1.me')) {
        return 'TIMEONE'
    }

    return null
}

export default GuessMediaFromUrl