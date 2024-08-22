import React from 'react'
import { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Box } from '@mui/material'
import { fetchfromAPI } from '../utils/FetchfromAPI'
import Channelcard from './Channelcard'
import Videos from './Videos'

const Channeldetail = () => {
const [channeldetail, setchanneldetail]=useState(null)
const [videos, setvideos]=useState([])

  const {id}=useParams();
  // console.log(channeldetail, videos);
  
  useEffect(() => {
   fetchfromAPI(`channels?part=snippet&id=${id}`)
   .then((data)=>setchanneldetail(data?.items[0]))

   fetchfromAPI(`search?channelId=${id}&part=snippet&order=date`)
   .then((data)=>setvideos(data?.items))
  }, [id])
  
  return (
    <Box  minHeight='95vh'>
      <div style={{
        background: 'rgb(242,42,214)',
        background: 'linear-gradient(90deg, rgba(242,42,214,1) 0%, rgba(242,42,49,1) 38%, rgba(0,212,255,1) 77%)',
        zIndex:10,
        height:'300px'
      }}
      />
        <Channelcard channeldetail={channeldetail} marginTop='-113px'></Channelcard>
        <Box ml='100px' sx={{mr:{sm:'100px'}}}>
        <Videos Videos={videos}/>
        </Box>

    </Box>
  )
}

export default Channeldetail
