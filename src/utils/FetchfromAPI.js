import axios from "axios"

const BASE_URL='https://youtube-v31.p.rapidapi.com';

const options = {
  params: {
    maxResults: '50'
  },
  headers: {
    'x-rapidapi-key':'a1431be115mshd532b7e03c9cf56p1e34a6jsn192fe01c93df',
    'x-rapidapi-host': 'youtube-v31.p.rapidapi.com'
  }
};
   


export const fetchfromAPI=async(url)=>{
    const {data}= await axios.get(`${BASE_URL}/${url}`,options)
     
     return data;
}
