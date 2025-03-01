import { useState ,useEffect} from 'react'
import { Box, Typography } from '@mui/material'
import Videos from './Videos'
import { fetchfromAPI } from '../utils/FetchfromAPI'
import { useParams } from 'react-router-dom'

const Searchfeed = () => {
const [videos, setvideos]=useState([])
const {searchTerm}=useParams()

useEffect(() => {
  fetchfromAPI(`search?part=snippet&q=${searchTerm}`)
  .then((data)=>setvideos(data.items))
}, [searchTerm])



  return (
    <Box p={2}  sx={{overflow:'auto', height:'90vh', flex:2}} >
    <Typography variant='h4'
    fontWeight='bold' mb={2} sx={{
      color:'white'
    }}
    >
      search Results for: <span style={{color:'#F31503'}}>{searchTerm}</span>Videos
    </Typography>

    <Videos Videos={videos}/>
  </Box>
  )
}

export default Searchfeed;

