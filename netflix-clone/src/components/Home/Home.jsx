import React,{useEffect,useState} from 'react'
import './Home.scss'
import axios from 'axios';
import {Link } from 'react-router-dom';

const api='d31c000c5d916b22d4c9d1358bbf876c';
const url="https://api.themoviedb.org/3"
const upcoming='upcoming';
const imgUrl="https://image.tmdb.org/t/p/original"
const toprated='top_rated';
const nowplaying='now_playing';
const Popular='popular';





const Card=({img})=>(
    <img className='card' src={img} alt='cover'/>
)

const Row=({title,arr=[]})=>(

    <div className='row'>
<h2>{title}</h2>


<div>


{
arr.map((item,index)=>(

    <Card key={index} img={`${imgUrl}${item.poster_path}`}/>
 
))
}


</div>

    </div>
)



const Home = () => {
    const [upcomingMovie, setupcomingMovie] = useState([])
    const [topRated, settopRated] = useState([])
    const [popular, setpopular] = useState([])
    const [nowPlaying,setNowPlaying]=useState([])
    const [genre, setGenre] = useState([])
    useEffect(() => {
      
        const fetchUpcoming=async()=>{

{const {data :{results}}= await axios.get(`${url}/movie/${upcoming}?api_key=${api}`) ;  //upcoming movie

       
setupcomingMovie(results);
}
        }

        const fetchRated=async()=>{
const {data}= await axios.get(`${url}/movie/${toprated}?api_key=${api}`) ; 
settopRated(data.results);
}

const fetchPopular=async()=>{
const {data:{results}}= await axios.get(`${url}/movie/${Popular}?api_key=${api}`) ; 
setpopular(results);
}
const fetchNowplaying=async()=>{
    const {data:{results}}= await axios.get(`${url}/movie/${nowplaying}?api_key=${api}`) ; 
    setNowPlaying(results);
    }
    const genre=async()=>{
        const { data : {genres},}= await axios.get(`${url}/genre/movie/list?api_key=${api}`) ; 
        setGenre(genres);
        console.log(genres);
        }
    

fetchUpcoming();
fetchNowplaying();
fetchPopular();
fetchRated();
genre();




    }, [])
    




  return (
    <section className="home">
        <div className="banner" style={{
            backgroundImage:popular[0]? `url(${`${imgUrl}/${popular[0].poster_path}`})`:"none"
        }}>


    
        </div>
        <Row title={"Upcoming Movies"} arr={upcomingMovie}/>
        <Row title={"Popular"} arr={popular}/>
        <Row title={"Now Playing"} arr={nowPlaying}/>
        <Row title={"Top Rated"} arr={topRated}/>
<div className="genreBox">
{genre.map((item)=>(
<Link key={item.id} to={`/genre/${item.id}`}>{item.name}</Link> 
))}

</div>

        
    </section>
  )
}

export default Home