import React from 'react'
import { Stack,Box } from '@mui/material'
import Videocardo from './Videocardo'
import Channelcard from './Channelcard'

const Videos = ({Videos, direction}) => {
  if(!Videos?.length)return'loading...';
  // console.log(Videos);
  return (
     <Stack direction={direction||'row'} flexWrap='wrap' justifyContent='start' gap={2}>
       {Videos.map((item, idx)=>(
         <Box key={idx}>
            {item.id.videoId && <Videocardo video={item} />}
            {item.id.channelId  && <Channelcard channeldetail={item} />}

         </Box>
     ))}
     </Stack> 

  )
}

export default Videos
