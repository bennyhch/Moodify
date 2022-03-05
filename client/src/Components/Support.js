import React from 'react'
import ReactDOM from "react-dom";
import WordCloud from 'react-d3-cloud'; 


import Entryitembehavior from './Entryitembehavior';
import Entryitemevent from './Entryitemevent';
import Entryitemthought from './Entryitemthought';


export default function Support({entry}) {

  const filteringSad = entry.filter(oneEntry => oneEntry.emotion === 'sad');
  const filteringHappy = entry.filter(oneEntry => oneEntry.emotion === 'happy');
  const filteringAnxious = entry.filter(oneEntry => oneEntry.emotion === 'anxious');

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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




  return (
    <div>
      <div>
        <WordCloud width={500} height={500} data={arrCloudSadEvent} />
        <WordCloud width={500} height={500} data={arrCloudSadThought} />
        <WordCloud width={500} height={500} data={arrCloudSadBehavior} />

      </div>
      <div>
        <WordCloud width={500} height={500} data={arrCloudHappyEvent} />
        <WordCloud width={500} height={500} data={arrCloudHappyThought} />
        <WordCloud width={500} height={500} data={arrCloudHappyBehavior} />
      </div>
      <div>
        <WordCloud width={500} height={500} data={arrCloudAnxiousEvent} />
        <WordCloud width={500} height={500} data={arrCloudAnxiousThought} />
        <WordCloud width={500} height={500} data={arrCloudAnxiousBehavior} />
      </div>

    </div>

  )
}
