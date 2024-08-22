import { useState ,useEffect} from 'react'
import { Box, Stack, Typography } from '@mui/material'
import Sidebar from './Sidebar'
import Videos from './Videos'
import { fetchfromAPI } from '../utils/FetchfromAPI'

const Feed = () => {
const[selectcategory, setsellectedcotegory]=useState('New')
const [videos, setvideos]=useState([])

useEffect(() => {
  fetchfromAPI(`search?part=snippet&q=${selectcategory}`)
  .then((data)=>setvideos(data.items))
}, [selectcategory])



  return (
    <Stack  sx={{flexDirection: {sx:
      "column", md:"row" }}}>
      
      <Box sx={{height:{sx:'auto', md:'92vh'}, borderRight:'1px solid #3d3d3d', px:{sx:0, md:2}}}>
        <Sidebar
        selectcategory={selectcategory}
        setsellectedcotegory={setsellectedcotegory}
        />

        <Typography className='copyright' variant='body2' sx={{mt:1.5, color:'#fff'}}>
            Copyright 2024 Vishwamohini
        </Typography>
      </Box>

      <Box p={2} sx={{overflow:'auto', height:'90vh', flex:2}}>
        <Typography variant='h4'
        fontWeight='bold' mb={2} sx={{
          color:'white'
        }}
        >
          {selectcategory}<span style={{color:'#F31503'}}>Videos</span>
        </Typography>

        <Videos Videos={videos}></Videos>
      </Box>
    </Stack>
  )
}

export default Feed
