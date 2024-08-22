import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import ReactPlayer from 'react-player'
import { Typography, Box, Stack } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'

import { fetchfromAPI } from '../utils/FetchfromAPI'
import Videos from './Videos'


const Videodetail = () => {
const[videodetail, setvideodetail]=useState(null);
const[videos, setvideos]=useState(null);

const {id}=useParams()

useEffect(()=>{
  fetchfromAPI(`videos?part=snippet,statistics&id=${id}`)
  .then((data)=>setvideodetail(data.items[0]))

  fetchfromAPI(`search?part=snippet&relatedTovideoId=${id}&type=video`)
  .then((data)=>setvideos(data.items))
},[id])

if (!videodetail) return <div>Loading...</div>


const {snippet: {title, channelId, channelTitle }, statistics:{viewCount, likeCount}}=videodetail;
  return (
    <Box minHeight='95vh'>
      <Stack  direction={{xs:'column', md:'row'}} >
        <Box flex={1}>
        <Box sx={{width:'100%', position:'sticky', top:'86px'}}>
          <ReactPlayer  url={`https://www.youtube.com/watch?v=${id}`} className='react-player' controls/>
          <Typography color='#fff' fontWeight='bold' variant='h5' p={2}>
            {title}
          </Typography>
          <Stack direction='row' justifyContent='space-between' sx={{
            color:'#fff'}} py={1} px={2} mt='-10px'>
              <Link to={`/channel/${channelId}`}>
              <Typography variant={{sm:'subtitle',md:'h6'}} color='#fff' >
                {channelTitle}
                  <CheckCircle sx={{fontSize:'14px', color:'gray', ml:'5px'}}></CheckCircle>
              </Typography>
              </Link>
              <Stack direction='row' gap='20px' alignItems='center'>
                <Typography variant='body1' sx={{opacity:0.7}} >
                    {parseInt(viewCount).toLocaleString()} Views
                </Typography>

                <Typography variant='body1' sx={{opacity:0.7}} >
                    {parseInt(likeCount).toLocaleString()} Likes
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>
      <Box px={2} py={{md:1, xs:5}} justifyContent='center' alignItems='center'>
      <Videos Videos={videos} direction='column'></Videos>
      </Box>
      </Stack>

    </Box>
  )
}

export default Videodetail
