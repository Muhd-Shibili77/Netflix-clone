import React,{ useRef,useEffect,useState } from 'react'
import cards_data from '../../assets/cards/Cards_data'
import './TitleCards.css'
import { Link } from 'react-router-dom';





function TitleCards({title,category}) {
  
  const cardRef = useRef();
  const [apiData,setApiData] = useState([])
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNWZlM2VjMjMwNzYzMmU1MmM5Yjk0N2VkMGU4OGYxOCIsIm5iZiI6MTczNDY3NTI1MS43OTcsInN1YiI6IjY3NjUwYjMzNTJhYjEyZGZlYTVkZTUzNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ZfhS_IhBTNsDykLNDm8AauPOcO_-_63Qvzgv5p0GZuo'
    }
  };
  
  

  const handleWheel =(e)=>{
    e.preventDefault();
    cardRef.current.scrollLeft+=e.deltaY;
  }
  
  useEffect(()=>{

    fetch(`https://api.themoviedb.org/3/movie/${category?category:'now_playing'}?language=en-US&page=1`, options)
    .then(res => res.json())
    .then(res => setApiData(res.results))
    .catch(err => console.error(err));


    cardRef.current.addEventListener('wheel',handleWheel)
  },[])



  return (
    <div className="titlecards">
      <h2>{title?title:'Popular in Netflix'}</h2>
      <div className="card-list" ref={cardRef}>
        {apiData.map((item,index)=>{
          return(
            <Link to={`/player/${item.id}`} className="card" key={index}>
              <img src={`https://image.tmdb.org/t/p/w500`+item.backdrop_path} alt="" />
              <p>{item.original_title}</p>
            </Link>
          );
        })}
      </div>
    </div>
  )
}

export default TitleCards