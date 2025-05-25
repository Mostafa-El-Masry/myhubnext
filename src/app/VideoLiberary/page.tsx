import React from 'react'
import AmbitiousCleverDiscus from "@/videos/AmbitiousCleverDiscus.mp4"
import Ava1 from "@/videos/Ava Addams, Daisy Summers - Step Daughter And Step Mom.mp4"
import  Video from 'next-video'

const  VideoLiberary = () => {
  return (
    <div className='flex gap-6 max-w-3xl'>
      
      <Video src={AmbitiousCleverDiscus} style={{width: '20vw'}}/>
      <Video src={Ava1} style={{width: '20vw'}}/>
    </div>
  )
}

export default VideoLiberary
