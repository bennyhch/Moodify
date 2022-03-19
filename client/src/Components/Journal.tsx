import React from 'react'
////
import 'antd/dist/antd.css';
import { Collapse } from 'antd';
import WordCloud from 'react-d3-cloud'; 
//////
import EntryItemBehaviour from './EntryItemBehaviour.tsx';
import EntryItemEvent from './EntryItemEvent.tsx';
import EntryItemThought from './EntryItemThought.tsx';
import './CSS/Journal.css'
import anxiousFace from './../images/anxious.png';
import sadFace from'./../images/sad.png';
import happyFace from './../images/happy.png';
import Entry from '../interfaces/entry';

const { Panel } = Collapse;

interface EntryProps {
	entries: Entry[];
}
interface CloudObj {
	[key: string]: string | number;
}

export default function Journal({ entries }: EntryProps) {
	

	const filterEmotion = (emotion: string): Entry[] => entries.filter(oneEntry => oneEntry.emotion === emotion);

//Word Clouds

  const wordCloud = (emotion: string, type: string) => {
	const wordsArr: string[] = [];

		filterEmotion(emotion).forEach((event: any) => {//event inherits the type Entry from the result of filterEmotion(emotin), but this leaves an error since the interface Entry has predefined property keys - and I couldn't make the dynamic keys work with them...
		console.log("event: ", event)
		const dailyWords:string[] = event[type].match(/[a-zA-Z]+/g);
		wordsArr.push(...dailyWords)
	})
		const wordCloudArr = [];
		
		const countsCloudEvent: {
			[key: string]: number;
		} = {};

	wordsArr.forEach(wrd => {
		let val;
		if (wrd.length < 3) val = 1000;
		else if (wrd.length < 6) val = 3000;
		else if (wrd.length < 9) val = 4000;
		else val = 2000;
		countsCloudEvent[wrd] = (countsCloudEvent[wrd] || 0) + val;
	})
	for (const [key, value] of Object.entries(countsCloudEvent)) {
		const wordCloudObj: CloudObj = {};
		wordCloudObj.text = key;
		wordCloudObj.value = value;
		wordCloudArr.push(wordCloudObj);
	}
	return wordCloudArr;
	}

 


////CHOAS STARTS FROM HERE ////////////////////////////////////////////////////
  return (
    <div>

    	<div>
        <div className='sadbox' className='journalboxes'>
					<img className='faceJournal' src={sadFace}  />
          <h1>Sad</h1>
					<Collapse >
						<Panel header="Event" key="1" className='headerjournal'>
							<div className='collapsecontainer'>
								<div className='textcontainer'>
									<div>{filterEmotion('sad').map((ent) => <EntryItemEvent entry={ent} key={ent.id} ></EntryItemEvent>)}</div>
								</div>
								<div className='cloudcontainer'>
									<WordCloud width={500} height={500} data={wordCloud('sad', 'triggeringEvent')} />
								</div>
							</div>
						</Panel>

						<Panel header="Thought" key="2" className='headerjournal'>
							<div className='collapsecontainer'>
								<div className='textcontainer'>
									<p>{filterEmotion('sad').map((ent) => <EntryItemThought entry={ent} key={ent.id}></EntryItemThought>)}</p>
								</div>
								<div className='cloudcontainer'>
									<WordCloud width={500} height={500} data={wordCloud('sad', 'thought')} />
								</div>
							</div>
						</Panel>

						<Panel header="Behaviour" key="3" className='headerjournal'>
							<div className='collapsecontainer'>
								<div className='textcontainer'>
									<p>{filterEmotion('sad').map((ent) => <EntryItemBehaviour entry={ent} key={ent.id}></EntryItemBehaviour>)}</p>
								</div>
								<div className='cloudcontainer'>
									<WordCloud width={500} height={500} data={wordCloud('sad', 'behavior')} />
								</div>
							</div>
						</Panel>
  				</Collapse>
        </div>

        <div className='happybox' className='journalboxes'>
					<img className='faceJournal' src={happyFace}  />
          <h1>Happy</h1>
				<Collapse >
					<Panel header="Event" key="1" className='headerjournal'>
						<div className='collapsecontainer'>
							<div className='textcontainer'>
								<p>{filterEmotion('happy').map((ent) => <EntryItemEvent entry={ent} key={ent.id}></EntryItemEvent>)}</p>
							</div>
							<div className='cloudcontainer'>
								<WordCloud width={500} height={500} data={wordCloud('happy', 'triggeringEvent')} />
							</div>
						</div>
					</Panel>

					<Panel header="Thought" key="2" className='headerjournal'>
						<div className='collapsecontainer'>
							<div className='textcontainer'>
								<p>{filterEmotion('happy').map((ent) => <EntryItemThought entry={ent} key={ent.id}></EntryItemThought>)}</p>
							</div>
							<div className='cloudcontainer'>
								<WordCloud width={500} height={500} data={wordCloud('happy', 'thought')} />
							</div>
						</div>
					</Panel>

					<Panel header="Behaviour" key="3" className='headerjournal'>
						<div className='collapsecontainer'>
							<div className='textcontainer'>
								<p>{filterEmotion('happy').map((ent) => <EntryItemBehaviour entry={ent} key={ent.id}></EntryItemBehaviour>)}</p>
							</div>
							<div className='cloudcontainer'>
								<WordCloud width={500} height={500} data={wordCloud('happy', 'behavior')} />
							</div>
						</div>
					</Panel>
  				</Collapse>
        </div>

        <div className='anxiousbox' className='journalboxes'>
					<img className='faceJournal' src={anxiousFace}  />
          <h1>Anxiety</h1>
				<Collapse >
						<Panel header="Event" key="1" className='headerjournal'>
							<div className='collapsecontainer'>
								<div className='textcontainer'>
									<p>{filterEmotion('anxious').map((ent) => <EntryItemEvent entry={ent} key={ent.id}></EntryItemEvent>)}</p>
								</div>
								<div className='cloudcontainer'>
									<WordCloud width={500} height={500} data={wordCloud('anxious', 'triggeringEvent')} />
								</div>
							</div>
						</Panel>

						<Panel header="Thought" key="2" className='headerjournal'>
							<div className='collapsecontainer'>
								<div className='textcontainer'>
									<p>{filterEmotion('anxious').map((ent) => <EntryItemThought entry={ent} key={ent.id}></EntryItemThought>)}</p>
								</div>
								<div className='cloudcontainer'>
									<WordCloud width={500} height={500} data={wordCloud('anxious', 'thought')} />
								</div>
							</div>
						</Panel>

						<Panel header="Behaviour" key="3" className='headerjournal'>
							<div className='collapsecontainer'>
								<div className='textcontainer'>
									<p>{filterEmotion('anxious').map((ent) => <EntryItemBehaviour entry={ent} key={ent.id}></EntryItemBehaviour>)}</p>
								</div>
								<div className='cloudcontainer'>
									<WordCloud width={500} height={500} data={wordCloud('anxious', 'behavior')} />
								</div>
							</div>
						</Panel>
  				</Collapse>
        </div>
      </div>
    </div>
  )
}
