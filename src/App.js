import React, { useState } from "react";
import "./App.css";
import {Header} from "./components/Header";
import { MovieDetail } from "./components/MovieDetail";

const App = () => {
  const [movie, setMovie] = useState(null);
  

  return (
    <div className="App">

    <Header movie={movie} setMovie={setMovie}/>
    <MovieDetail movie={movie} />
      
    </div>
  );
};

export default App;