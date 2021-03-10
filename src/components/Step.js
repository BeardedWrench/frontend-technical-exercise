import React from 'react';

export default function Step( { step, content } ){

  return(
    <li>
         {
         /**
          * Checks if the incoming Step number is less than 10,
          * if it is, we prepend a 0, if it's more than 10, we just display the original number. 
          */
         }
       
        <h2>{ ( step.stepNumber < 10 ? '0' : '' ) + step.stepNumber }</h2>
        <h3>{ content.title }</h3>
        <p>{ content.body }</p>
    </li>
  );
}