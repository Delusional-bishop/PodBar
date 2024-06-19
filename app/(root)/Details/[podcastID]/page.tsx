import React from 'react'

const PodcastDetails = ({params}:{params:{podcastID:string}}) => {
  return (
    <div>
      <p className="text-white-1">
        Podcst details for {params.podcastID}
      </p>
    </div>
  )
}

export default PodcastDetails
