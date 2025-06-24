const GroupHitsByMedia = (hits) => {
  const grouped = {}

  hits.forEach(hit => {
    if (!hit.media) return

    if (!grouped[hit.media]) {
      grouped[hit.media] = []
    }

    grouped[hit.media].push(hit)
  })

  return Object.entries(grouped).map(([media, hits]) => ({
    media,
    hits
  }))
}

export default GroupHitsByMedia
