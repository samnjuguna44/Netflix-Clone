import axios from "axios";
import React, { useEffect, useState } from "react";
import Movie from '../components/Movie';
import {MdChevronLeft, MdChevronRight} from 'react-icons/md';

const Row = ({ title, fetchURL, rowID }) => {
  const [movies, setMovies] = useState([]);
  

  useEffect(() => {
    //useEffect to provide results for each row
    axios.get(fetchURL).then((response) => {
      setMovies(response.data.results);
    });
  }, [fetchURL]); // fetchURL whenever the URL changes the component will fire off again

  //function to control the sliders
  const slideLeft = () => {
    var slider = document.getElementById('slider' + rowID);
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideRight = () => {
    var slider = document.getElementById('slider' + rowID);
    slider.scrollLeft = slider.scrollLeft + 500;
  };
  

  return (
    <>
      <h2 className="text-white font-bold md:text-xl p-4">{title}</h2>
      <div className="relative flex items-center group">
         <MdChevronLeft className='bg-white left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block' size={40} onClick={slideLeft} />
        <div id={"slider" + rowID} className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative'>
          {movies.map((item, id) => (
            <Movie key={id} item={item}/>
          ))}
        </div>
         <MdChevronRight className='bg-white right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block' size={40} onClick={slideRight} />
      </div>
    </>
  );
};

export default Row;
