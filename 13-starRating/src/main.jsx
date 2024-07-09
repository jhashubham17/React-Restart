import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import StarRating from './StarRating.jsx'
import './index.css'

function Text(){

  const [movieRating, setMovieRating] = useState(0);
  return(
      <div>
          <StarRating 
          color='blue' 
          maxRating={10} 
          onSetRating={setMovieRating}/>
          <p>This movie was rated {movieRating} stars.</p>
      </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <StarRating 
    maxRating={5}
    defaultRating = {2}
    />

    <StarRating 
    maxRating={5} 
    messages = {['Terrible', 'Bad', 'Okey','Good', 'Amazing']}
    color='red'
    />

    <Text/>

  </React.StrictMode>
)
