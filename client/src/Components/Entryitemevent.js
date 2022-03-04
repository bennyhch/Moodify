import React from 'react'

export default function Entryitemevent({ent}) {
  
  return (
    <div>
      {/* <div className='emotion-box'>
        <h3>Sad</h3>
        <div>Event:</div>
      </div> */}
      <div>{ent.triggeringEvent}</div>
    
      
    </div>
        
        
        
        
    //     <div>
    //     {console.log('ENT!', ent)}
            
    //         {/* <p>all: {ent} </p> */}
            
    //     </div>
    //     <div>
    //         <p>thought: {ent.thought}</p>
    //     </div>
    // </div>
  )
}
