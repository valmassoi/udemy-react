import React from 'react'

const VideoDetail = ({video}) => {//(props)
  if(!video) {
    return <div>Loading...</div>
  }

  const videoId = video.id.videoId
  const url = `https://www.youtube.com/v/${videoId}`
  return(
    <div className="video-detail col-md-8">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe type="text/html" className="embed-responsive-item" src={url}></iframe>
      </div>
      <div className="details">
        <div>{video.snippet.title}</div>
        <div>{video.snippet.description}</div>
      </div>
    </div>

  )

}

export default VideoDetail