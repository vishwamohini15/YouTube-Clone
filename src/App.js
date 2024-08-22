import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';

import {Navbar, Feed,Videodetail,Channeldetail,Searchfeed } from './Components';


const App=()=> (
    <BrowserRouter>
      <Box sx={{backgroundColor:'#000'}}>
        <Navbar/>
        <Routes>
          <Route path='/' exact element={<Feed/>}/>
          <Route path='/video/:id'  element={<Videodetail/>}/>
          <Route path='/channel/:id'  element={<Channeldetail/>}/>
          <Route path='/search/:searchTerm'  element={<Searchfeed/>}/>
        </Routes>

      </Box>
    </BrowserRouter>
)

export default App;
