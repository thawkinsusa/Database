import React, {Component} from 'react';
import './Display.css'
const Display = (props) => {
    return (
      <div className='display'>
        
      <React.Fragment>
        {props.items.data.map(item => (
          <React.Fragment key={item.id}>
             <h1></h1>
            <h2 className='name'><br></br>Name {item.name.first} {item.name.last}
            </h2>
            <h3>From: {item.city}</h3>
            <h4>Job Title: {item.title}</h4>
            <h5>Employer: {item.employer}</h5>
            <h6>{item.favoriteMovies}</h6>
          </React.Fragment>
        ))}
      </React.Fragment>
    <a class="previous"> Previous</a>
    <a class="next">Next</a>
    <a class='edit'> edit </a>
    <a class='delete'> delete </a>
    <a class='new'> new </a>
    <a class="next">Next</a>
      </div>
    )
  }
  

    export default Display