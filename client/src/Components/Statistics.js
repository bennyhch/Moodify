import React from 'react'
import Entryitemevent from './Entryitemevent'
import Entryitemthought from './Entryitemthought';

export default function Statistics({entry}) {
  
  const filteringSad = entry.filter(oneEntry => oneEntry.emotion === 'sad');
  const filteringHappy = entry.filter(oneEntry => oneEntry.emotion === 'happy');
  const filteringAnxious = entry.filter(oneEntry => oneEntry.emotion === 'anxious');

  console.log(filteringHappy);
  return (
    <div>
      
      <div>
        {/* bar chart */}
      </div>

      <div>
        <div className='sadbox'>
          {/* {console.log(entry)} */}
          <h3>Sad</h3>
          <div style={{color: 'red'}}>Event:</div>
            <div>
              {filteringSad.map((ent) => <Entryitemevent ent={ent} key={ent.id}></Entryitemevent>)}
            </div>
          <div style={{color: 'red'}}>Thought:</div>
            <div>
                {filteringSad.map((ent) => <Entryitemthought ent={ent} key={ent.id}></Entryitemthought>)}
            </div>
          <div style={{color: 'red'}}>Behaviour:</div>
            <div>
                {filteringSad.map((ent) => <Entryitemthought ent={ent} key={ent.id}></Entryitemthought>)}
            </div>
        </div>

        <div className='happybox'>
          <h3>Happy</h3>
          <div style={{color: 'blue'}}>Event:</div>
            <div>
              {filteringHappy.map((ent) => <Entryitemevent ent={ent} key={ent.id}></Entryitemevent>)}
            </div>
          <div style={{color: 'blue'}}>Thought:</div>
            <div>
                {filteringHappy.map((ent) => <Entryitemthought ent={ent} key={ent.id}></Entryitemthought>)}
            </div>
          <div style={{color: 'blue'}}>Behaviour:</div>
            <div>
                {filteringHappy.map((ent) => <Entryitemthought ent={ent} key={ent.id}></Entryitemthought>)}
            </div>
        </div>

        <div className='anxiousbox'>
          <h3>Anxiety</h3>
          <div style={{color: 'green'}}>Event:</div>
            <div>
              {filteringAnxious.map((ent) => <Entryitemevent ent={ent} key={ent.id}></Entryitemevent>)}
            </div>
          <div style={{color: 'green'}}>Thought:</div>
            <div>
                {filteringAnxious.map((ent) => <Entryitemthought ent={ent} key={ent.id}></Entryitemthought>)}
            </div>
          <div style={{color: 'green'}}>Behaviour:</div>
            <div>
                {filteringAnxious.map((ent) => <Entryitemthought ent={ent} key={ent.id}></Entryitemthought>)}
            </div>
        </div>
      </div>


    </div>
  )
}
