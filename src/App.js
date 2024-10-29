import { useState } from 'react';
import { data } from './data';
import './App.css';

function App() {
  
  const [item, setItem] = useState(0);
  const {id, image, source, brand, model, description} = data[item];

  const previousItem = () => {
    setItem((item => {
      item --;
      if (item < 0) {
        return data.length-1
      }
      
      return item;
    }))
  }

  const nextItem = () => {
    setItem((item => {
      item ++;
      if (item > data.length-1) {
        item = 0;
      }

      return item;
    }))
    
  }

  return (
    <div>
      <div className='container'>
        <h1>All coffee machines</h1>
      </div>

      <div className='container'>
        <h2>{brand} {model}</h2>
      </div>

      <div className='container'>
        <img src={image} width="300px" alt='Coffee machine'/>
      </div>

      <div className='container'>
        <p>{source}</p>
      </div>

      <div className='container'>
        <p className='text'>{description}</p>
      </div>

      <div className='btn'>
        <button onClick={previousItem}>Previous</button>
        <button onClick={nextItem}>Next</button>
      </div>
      
    </div>
  );
}

export default App;
