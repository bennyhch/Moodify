import React from 'react'
////
import 'antd/dist/antd.css';
import { Collapse } from 'antd';
////
import WordCloud from 'react-d3-cloud'; 

///
import moment from 'moment';
import Entryitembehavior from './Entryitembehavior';
import Entryitemevent from './Entryitemevent';
import Entryitemthought from './Entryitemthought';
import { sortDate } from '../utilities/sort';
import './CSS/Journal.css'

const { Panel } = Collapse;



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
//CHOAS STARTS FROM HERE ////////////////////////////////////////////////////

//Word Cloud
	function splitingSentences (string) { 
		let word = string.trim().split(" ");
		return word;
	}
// Sad // Sad// Sad// Sad// Sad// Sad// Sad// Sad// Sad// Sad// Sad// Sad// Sad// Sad
//Sad Event
	const arrSadEvent = [];
	filteringSad.forEach(oneEvent => {
		arrSadEvent.push(splitingSentences(oneEvent.triggeringEvent))
		return arrSadEvent;
	});
	const flattenedSadEvent = [].concat(...arrSadEvent);
  const countsCloudSadEvent = {};
	flattenedSadEvent.forEach((wrd) => {
		countsCloudSadEvent[wrd] = (countsCloudSadEvent[wrd] || 0) + 1;
	});
	const arrCloudSadEvent = [];
	for (const [key, value] of Object.entries(countsCloudSadEvent)) {
		let objSadEvent = {text: `${key}`, value: `${value}`}
		objSadEvent.value = (Number(objSadEvent.value)*1000);
		arrCloudSadEvent.push(objSadEvent);
	}

// Sad Thought
	const arrSadThought = [];
	filteringSad.forEach(oneEvent => {
		arrSadThought.push(splitingSentences(oneEvent.thought))
		return arrSadThought;
	});
	const flattenedSadThought = [].concat(...arrSadThought);
  const countsCloudSadThought = {};
	flattenedSadThought.forEach((wrd) => {
		countsCloudSadThought[wrd] = (countsCloudSadThought[wrd] || 0) + 1;
	});
	const arrCloudSadThought = [];
	for (const [key, value] of Object.entries(countsCloudSadThought)) {
		let objSadThought = {text: `${key}`, value: `${value}`}
		objSadThought.value = (Number(objSadThought.value)*1000);
		arrCloudSadThought.push(objSadThought);
	}

// Sad Behavior
	const arrSadBehavior = [];
	filteringSad.forEach(oneEvent => {
		arrSadBehavior.push(splitingSentences(oneEvent.behavior))
		return arrSadBehavior;
	});
	const flattenedSadBehavior = [].concat(...arrSadBehavior);
  const countsCloudSadBehavior = {};
	flattenedSadBehavior.forEach((wrd) => {
		countsCloudSadBehavior[wrd] = (countsCloudSadBehavior[wrd] || 0) + 1;
	});
	const arrCloudSadBehavior = [];
	for (const [key, value] of Object.entries(countsCloudSadBehavior)) {
		let objSadBehavior = {text: `${key}`, value: `${value}`}
		objSadBehavior.value = (Number(objSadBehavior.value)*1000);
		arrCloudSadBehavior.push(objSadBehavior);
  }

//// Happy //// Happy //// Happy //// Happy //// Happy //// Happy //// Happy //// Happy
// Happy Event
	const arrHappyEvent = [];
	filteringHappy.forEach(oneEvent => {
		arrHappyEvent.push(splitingSentences(oneEvent.triggeringEvent))
		return arrHappyEvent;
	});
	const flattenedHappyEvent = [].concat(...arrHappyEvent);
	const countsCloudHappyEvent = {};
	flattenedHappyEvent.forEach((wrd) => {
		countsCloudHappyEvent[wrd] = (countsCloudHappyEvent[wrd] || 0) + 1;
	});
	const arrCloudHappyEvent = [];
	for (const [key, value] of Object.entries(countsCloudHappyEvent)) {
		let objHappyEvent = {text: `${key}`, value: `${value}`}
		objHappyEvent.value = (Number(objHappyEvent.value)*1000);
		arrCloudHappyEvent.push(objHappyEvent);
	}
// Happy Thought
	const arrHappyThought = [];
	filteringHappy.forEach(oneEvent => {
		arrHappyThought.push(splitingSentences(oneEvent.thought))
		return arrHappyThought;
	});
	const flattenedHappyThought = [].concat(...arrHappyThought);
  const countsCloudHappyThought = {};
  flattenedHappyThought.forEach((wrd) => {
    countsCloudHappyThought[wrd] = (countsCloudHappyThought[wrd] || 0) + 1;
  });
  const arrCloudHappyThought = [];
  for (const [key, value] of Object.entries(countsCloudHappyThought)) {
		let obj = {text: `${key}`, value: `${value}`}
		obj.value = (Number(obj.value)*1000);
		arrCloudHappyThought.push(obj);
  }
// Happy Behavior
	const arrHappyBehavior = [];
	filteringHappy.forEach(oneEvent => {
		arrHappyBehavior.push(splitingSentences(oneEvent.behavior))
		return arrHappyBehavior;
	});
	const flattenedHappyBehavior = [].concat(...arrHappyBehavior);

  const countsCloudHappyBehavior = {};
  flattenedHappyBehavior.forEach((wrd) => {
    countsCloudHappyBehavior[wrd] = (countsCloudHappyBehavior[wrd] || 0) + 1;
  });
  const arrCloudHappyBehavior = [];
  for (const [key, value] of Object.entries(countsCloudHappyBehavior)) {
		let obj = {text: `${key}`, value: `${value}`}
		obj.value = (Number(obj.value)*1000);
		arrCloudHappyBehavior.push(obj);
  }



	//// Anxiety 	//// Anxiety	//// Anxiety	//// Anxiety	//// Anxiety	//// Anxiety	//// Anxiety	//// Anxiety
  //anxious event
	const arrAnxiousEvent = [];
	filteringAnxious.forEach(oneEvent => {
		arrAnxiousEvent.push(splitingSentences(oneEvent.triggeringEvent))
		return arrAnxiousEvent;
	});
	const flattenedAnxiousEvent = [].concat(...arrAnxiousEvent);
  const countsCloudAnxiousEvent = {};
	flattenedAnxiousEvent.forEach((wrd) => {
		countsCloudAnxiousEvent[wrd] = (countsCloudAnxiousEvent[wrd] || 0) + 1;
	});
	const arrCloudAnxiousEvent = [];
	for (const [key, value] of Object.entries(countsCloudAnxiousEvent)) {
		let objAnxiousEvent = {text: `${key}`, value: `${value}`}
		objAnxiousEvent.value = (Number(objAnxiousEvent.value)*1000);
		arrCloudAnxiousEvent.push(objAnxiousEvent);
  }

  //anxious thought
	const arrAnxiousThought = [];
	filteringAnxious.forEach(oneEvent => {
		arrAnxiousThought.push(splitingSentences(oneEvent.thought))
		return arrAnxiousThought;
	});
	const flattenedAnxiousThought = [].concat(...arrAnxiousThought);
  const countsCloudAnxiousThought = {};
	flattenedAnxiousThought.forEach((wrd) => {
		countsCloudAnxiousThought[wrd] = (countsCloudAnxiousThought[wrd] || 0) + 1;
	});
	const arrCloudAnxiousThought = [];
	for (const [key, value] of Object.entries(countsCloudAnxiousThought)) {
		let objAnxiousThought = {text: `${key}`, value: `${value}`}
		objAnxiousThought.value = (Number(objAnxiousThought.value)*1000);
		arrCloudAnxiousThought.push(objAnxiousThought);
  }

  // anxious behavior
	const arrAnxiousBehavior = [];
	filteringAnxious.forEach(oneEvent => {
		arrAnxiousBehavior.push(splitingSentences(oneEvent.behavior))
		return arrAnxiousBehavior;
	});
	const flattenedAnxiousBehavior = [].concat(...arrAnxiousBehavior);
  const countsCloudAnxiousBehavior = {};
	flattenedAnxiousBehavior.forEach((wrd) => {
		countsCloudAnxiousBehavior[wrd] = (countsCloudAnxiousBehavior[wrd] || 0) + 1;
	});
	const arrCloudAnxiousBehavior = [];
	for (const [key, value] of Object.entries(countsCloudAnxiousBehavior)) {
		let objAnxiousBehavior = {text: `${key}`, value: `${value}`}
		objAnxiousBehavior.value = (Number(objAnxiousBehavior.value)*1000);
		arrCloudAnxiousBehavior.push(objAnxiousBehavior);
  }



////CHOAS STOPS FROM HERE ////////////////////////////////////////////////////
  return (
    <div>

    	<div>
        <div className='sadbox'>
          <h3>Sad</h3>
					<Collapse >
						<Panel header="Event" key="1">
							<div className='container'>
								<div className='textcontainer'>
									<p>{filteringSad.map((ent) => <Entryitemevent ent={ent} key={ent.id} entry={sortDate(entry)}></Entryitemevent>)}</p>
								</div>
								{/* ////// */}
								<div className='cloudcontainer'>
									<WordCloud width={500} height={500} data={arrCloudSadEvent} />
								</div>
							</div>
						</Panel>
						<Panel header="Thought" key="2">
							<p>{filteringSad.map((ent) => <Entryitemthought ent={ent} key={ent.id}></Entryitemthought>)}</p>
						</Panel>
						<Panel header="Behaviour" key="3">
							<p>{filteringSad.map((ent) => <Entryitembehavior ent={ent} key={ent.id}></Entryitembehavior>)}</p>
						</Panel>
  				</Collapse>
        </div>

        <div className='happybox'>
          <h3>Happy</h3>
					<Collapse >
						<Panel header="Event" key="1">
							<p>{filteringHappy.map((ent) => <Entryitemevent ent={ent} key={ent.id}></Entryitemevent>)}</p>
						</Panel>
						<Panel header="Thought" key="2">
							<p>{filteringHappy.map((ent) => <Entryitemthought ent={ent} key={ent.id}></Entryitemthought>)}</p>
						</Panel>
						<Panel header="Behaviour" key="3">
							<p>{filteringHappy.map((ent) => <Entryitembehavior ent={ent} key={ent.id}></Entryitembehavior>)}</p>
						</Panel>
  				</Collapse>
        </div>

        <div className='anxiousbox'>
          <h3>Anxiety</h3>
					<Collapse >
						<Panel header="Event" key="1">
							<p>{filteringAnxious.map((ent) => <Entryitemevent ent={ent} key={ent.id}></Entryitemevent>)}</p>
						</Panel>
						<Panel header="Thought" key="2">
							<p>{filteringAnxious.map((ent) => <Entryitemthought ent={ent} key={ent.id}></Entryitemthought>)}</p>
						</Panel>
						<Panel header="Behaviour" key="3">
							<p>{filteringAnxious.map((ent) => <Entryitembehavior ent={ent} key={ent.id}></Entryitembehavior>)}</p>
						</Panel>
  				</Collapse>
        </div>

      </div>

    </div>
  )
}
