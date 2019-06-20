import React from 'react';
import Display from './Components/Display'
import './App.css';
import Nav from './Components/Nav'
function App() {
  const preload = {
    "data" : [
      {
        id: 1,
        name: { first: "Waylin", last: "Lumsdon" },
        city: "Likiep",
        country: "Marshall Islands",
        employer: "Twinder",
        title: "Physical Therapy Assistant",
        favoriteMovies: [
          "That Night in Varennes (Nuit de Varennes, La)",
          "Spy(ies) (Espion(s))",
          "Klip (Clip)"
        ]
      }
    ]
  }



  return (
    <div className="App">
    <Nav />
   <Display items={preload} />
    </div>
  );
}

export default App;
