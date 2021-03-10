import React, { useEffect, useState } from 'react';
import Step from './components/Step';

import logo from './assets/images/logo-endless.svg'

function App() {

  const [ steps, setSteps ] = useState( [] );
  

  // on componentDidMount, fetch the data from the api and assign our "steps" slice of state to the response.
  useEffect( () => {
    fetch(`https://uqnzta2geb.execute-api.us-east-1.amazonaws.com/default/FrontEndCodeChallenge`)
      .then( res => res.json() )

      // Sets the slice of state "steps" to the returned data, 
      // sorted in ascending order based on the stepNumber key's value.
      .then( data => setSteps( data.sort( ( a, b ) => a.stepNumber - b.stepNumber) ) )
  }, [])

/*******************************************
 * getLatest()
 * Description: Receives an array, sorts the array by the key of "effectiveDate" in ascending order.
 * 
 * Usage: getLatest( [
 *  { effectiveDate: "2019-04-04T05:04:05.000Z" }, 
 *  { effectiveDate: "2019-04-04T03:04:05.000Z" }
 *  ] )
 * 
 * Output: returns the most recently added item based on the effectiveDate key's value, 
 *        the above usage would return: { effectiveDate: "2019-04-04T05:04:05.000Z" }
 *******************************************/
  const getLatest = ( arr ) => {
    const sortedArray = arr.sort( ( a, b ) => new Date( b.effectiveDate ) - new Date( a.effectiveDate ) )
    return sortedArray[0];
  }
  return (
    <div className="App">
      <header>
        <div className="logo">
          <img src={ logo } alt="Endless" />
        </div>
      </header>
      <div className="container">
        <section className="splash">
          <figure className="splash-image" alt="Kids playing videos games">
            <section className="splash-container">
              <div className="splash-container-content">
                <h3>New Games and Accessories</h3>
                <h2>Monthly Packages.</h2>
                <h2>Excitement delivered daily.</h2>
                <p>What’s the best way to shop for the latest video games<br/>
                  and peripherals? How about never shopping at all?<br/>
                  You’ll get new stuff on your doorstep — every month.</p>
                <button>get started</button>
              </div>
            </section>
          </figure>
        </section>

        <section className="how-it-works">
          <h2>How It Works</h2>
          <ul>
            {
              /**
               * Maps over each Step object in our slice of state, creating a new step Component
               */
              steps.map( step => {
                return <Step step={ step } content={ getLatest( step.versionContent ) } key={ step.id }/>
              })
            }
          </ul>
        </section>
      </div>
    </div>
  );
}

export default App;
