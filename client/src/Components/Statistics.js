import React from 'react'
import Entryitem from './Entryitem'

export default function Statistics({entry}) {
  
  const filteringSad = entry.filter(oneEntry => oneEntry.emotion === 'sad');
  const filteringHappy = entry.filter(oneEntry => oneEntry.emotion === 'happy');
  const filteringAnxious = entry.filter(oneEntry => oneEntry.emotion === 'anxious');

  return (
    <div>
      
      <div>
        {/* bar chart */}
      </div>

      <div>
        <div>
          {console.log(entry)}
          <h3>Sad</h3>
          <div style={{color: 'red'}}>Event:</div>
            <div>
              {filteringSad.map((ent) => <Entryitem ent={ent} key={ent.id}></Entryitem>)}
            </div>
          <div style={{color: 'red'}}>Thought:</div>
            <div>
                {entry.map((ent) => <Entryitem ent={ent} key={ent.id}></Entryitem>)}
            </div>

          

        </div>
      </div>


    </div>
  )
}
