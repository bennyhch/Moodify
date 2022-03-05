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

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Word Cloud
	function splitingSentences (string) { 
		let word = string.trim().split(" ");
		return word;
	}
//// Sad
	const arrSadEvent = [];
	filteringSad.forEach(oneEvent => {
		// console.log('spliting oneEvent.triggeringEvent', splitingSentences(oneEvent.triggeringEvent));
		arrSadEvent.push(splitingSentences(oneEvent.triggeringEvent))
		return arrSadEvent;
	});
	// console.log('myarr', arrSadEvent);
	const flattenedSadEvent = [].concat(...arrSadEvent);
	// console.log('flattenedSadEvent', flattenedSadEvent);

	const arrSadThought = [];
	filteringSad.forEach(oneEvent => {
		arrSadThought.push(splitingSentences(oneEvent.thought))
		return arrSadThought;
	});
	const flattenedSadThought = [].concat(...arrSadThought);

	const arrSadBehavior = [];
	filteringSad.forEach(oneEvent => {
		arrSadBehavior.push(splitingSentences(oneEvent.behavior))
		return arrSadBehavior;
	});
	const flattenedSadBehavior = [].concat(...arrSadBehavior);

//// Happy
	const arrHappyEvent = [];
	filteringHappy.forEach(oneEvent => {
		arrHappyEvent.push(splitingSentences(oneEvent.triggeringEvent))
		return arrHappyEvent;
	});
	const flattenedHappyEvent = [].concat(...arrHappyEvent);
	console.log(flattenedHappyEvent, 'happy event')

	const countsCloudHappyEvent = {};
	flattenedHappyEvent.forEach((wrd) => {
		countsCloudHappyEvent[wrd] = (countsCloudHappyEvent[wrd] || 0) + 1;
	});
	console.log( 'countsCloudHappyEventOBJECT!', countsCloudHappyEvent);
	const arrCloudHappyEvent = [];
	for (const [key, value] of Object.entries(countsCloudHappyEvent)) {
		let obj = {text: `${key}`, value: `${value}`}
		obj.value = Number(obj.value);
		arrCloudHappyEvent.push(obj);
		// arrCloudHappyEvent.push({text: `${key}`, value: `${value}`});
	}
	console.log('arrCloudHappyEvent', arrCloudHappyEvent);


	const arrHappyThought = [];
	filteringHappy.forEach(oneEvent => {
		arrHappyThought.push(splitingSentences(oneEvent.thought))
		return arrHappyThought;
	});
	const flattenedHappyThought = [].concat(...arrHappyThought);

	const arrHappyBehavior = [];
	filteringHappy.forEach(oneEvent => {
		arrHappyBehavior.push(splitingSentences(oneEvent.behavior))
		return arrHappyBehavior;
	});
	const flattenedHappyBehavior = [].concat(...arrHappyBehavior);

	//// Anxiety
	const arrAnxiousEvent = [];
	filteringAnxious.forEach(oneEvent => {
		arrAnxiousEvent.push(splitingSentences(oneEvent.triggeringEvent))
		return arrAnxiousEvent;
	});
	const flattenedAnxiousEvent = [].concat(...arrAnxiousEvent);

	const arrAnxiousThought = [];
	filteringAnxious.forEach(oneEvent => {
		arrAnxiousThought.push(splitingSentences(oneEvent.thought))
		return arrAnxiousThought;
	});
	const flattenedAnxiousThought = [].concat(...arrAnxiousThought);

	const arrAnxiousBehavior = [];
	filteringAnxious.forEach(oneEvent => {
		arrAnxiousBehavior.push(splitingSentences(oneEvent.behavior))
		return arrAnxiousBehavior;
	});
	const flattenedAnxiousBehavior = [].concat(...arrAnxiousBehavior);



//Word Cloud Above
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////
  
	
	
	
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
      	<WordCloud width={500} height={500} data={arrCloudHappyEvent} />
			</div>
			
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
