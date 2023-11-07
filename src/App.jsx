
import { useState } from 'react'
import './App.css'
import { puppyList } from './data.js'


function App() {
  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null);

  function handleClick(puppyId) {
    // Update the featured puppy ID when a puppy is clicked
    setFeatPupId(puppyId);
  }

  const featuredPup = puppies.find((pup)=> pup.id === featPupId)
  console.log(featuredPup);
  return (
    <div className="App">
      <p id = "cardHeader">Puppy Pals</p>
      {puppies.map((puppy) => {
        return (
          <p onClick={() => handleClick(puppy.id)} key={puppy.id}>
            {puppy.name}
          </p>
        );
      })}

    {featPupId && (
        <div className = "featurePuppy">
          <h2>{featuredPup.name}</h2>
          <ul>
            <li>Age: {featuredPup.age}</li>
            <li>Email: {featuredPup.email}</li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
