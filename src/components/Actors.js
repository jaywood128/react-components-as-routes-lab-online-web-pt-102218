import React from 'react';
import { actors } from '../data';
import Movies from './Movies';

const Actors = (props) => {


  return (
    <div>
      <h1> Actors Page </h1>
      {actors.map((actor, i) => (
        <div key={i}> 
          <h3> Name: {actor.name} </h3> 
          <ul>
          {actor.movies.map((movie, i) => <li key={i}> {movie}</li>)}
          </ul>
        </div>
      ))}
  
    </div>
  )
  ;
};

export default Actors;
