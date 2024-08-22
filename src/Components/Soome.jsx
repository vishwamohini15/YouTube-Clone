import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Paper, IconButton } from '@mui/material'
import {Search} from '@mui/icons-material'


//this is searchbar....
const Soome = () => {
  const[searchterm, setsearchterm]=useState('')
  const navigate=useNavigate()

  const handelsubmit=(e)=>{
    e.preventDefault()

    if(searchterm){
      navigate(`/search/${searchterm}`)

      setsearchterm('')
    }
  }

  return (
    <Paper
    component="form"
    onSubmit={handelsubmit}
     sx={{
          borderRadius:20,
          border:'1px solid #e3e3e3',
          pl:2,
          boxShadow:'none',
          mr:{sm:5}
     }}
    >
     <input className='search-bar'
     placeholder='search...'
     value={searchterm}
     onChange={(e)=> {setsearchterm(e.target.value)}}
     
     />
     <IconButton type='submit' sx={{p:'10px', color:'red'}}>
          <Search></Search>
     </IconButton>

    </Paper>
  )
}

export default Soome
