import React from 'react'
import moment from 'moment';
import Entryitembehavior from './Entryitembehavior';
import Entryitemevent from './Entryitemevent';
import Entryitemthought from './Entryitemthought';

import WordCloud from 'react-d3-cloud';


export default function Journal({entry}) {

	const filteringSad = entry.filter(oneEntry => oneEntry.emotion === 'sad');
  const filteringHappy = entry.filter(oneEntry => oneEntry.emotion === 'happy');
  const filteringAnxious = entry.filter(oneEntry => oneEntry.emotion === 'anxious');

  	
	const dayOfTheWeekSad =  filteringSad.map((one) => moment(one.date).format('dddd'));
  const countsSad = {};
  dayOfTheWeekSad.forEach((x) => {
    countsSad[x] = (countsSad[x] || 0) + 1;
  });

  const dayOfTheWeekHappy =  filteringHappy.map((one) => moment(one.date).format('dddd'));
  const countsHappy = {};
  dayOfTheWeekHappy.forEach((x) => {
    countsHappy[x] = (countsHappy[x] || 0) + 1;
  });

  const dayOfTheWeekAnxious = filteringAnxious.map((one) => moment(one.date).format('dddd'));
  const countsAnxious = {};
  dayOfTheWeekAnxious.forEach((x) => {
    countsAnxious[x] = (countsAnxious[x] || 0) + 1;
  });

  return (
    <div>
    	<div>
        <div className='sadbox'>
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
                {filteringSad.map((ent) => <Entryitembehavior ent={ent} key={ent.id}></Entryitembehavior>)}
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
                {filteringHappy.map((ent) => <Entryitembehavior ent={ent} key={ent.id}></Entryitembehavior>)}
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
                {filteringAnxious.map((ent) => <Entryitembehavior ent={ent} key={ent.id}></Entryitembehavior>)}
            </div>
        </div>
      </div>
    </div>
  )
}
