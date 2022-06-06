import './App.css';
import { useState } from 'react';
import {moviesData}from "./Data";
import MovieList from './Components/MovieList';
import Search from './Components/Search';
import AddMovie from './Components/AddMovie';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MovieInfo from './Components/MovieInfo';

function App() {
  const [movies, setMovies] = useState(moviesData);
  const  [text, setText] = useState('');
  const  [rating, setRating] = useState(1);
  const handleAdd = (newMovie) => setMovies([...movies,newMovie]);

  const handleText =(e)=> setText(e.target.value);
  const handleRating = (x) => setRating(x);
  
  
  
  return (
    <div className="App">
      
        
      <AddMovie add={handleAdd}/>
      <Search rating={rating} text={text} handleText={handleText} handleRating={handleRating} />
      
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<MovieList movies={movies.filter((el)=>el.name.toLowerCase().includes(text.toLowerCase()) && el.rating>=rating)} />}/> 
        <Route path="/movie/:id" element={<MovieInfo mov={movies} />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
