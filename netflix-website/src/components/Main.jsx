import React, { useEffect, useState } from 'react';
import axios from 'axios';
import requests from '../Requests'

const Main = () => {
    const [movies, setMovies] = useState([])
     
    
    useEffect(() => {
        //when component mounts we make an API call then we grab the data and store it in setMovies
        axios.get(requests.requestPopular).then((response)=>(
            setMovies(response.data)
        ))
    }, [])
    console.log(movies)


  return (
    <div>Main</div>
  )
}

export default Main