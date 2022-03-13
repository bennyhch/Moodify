import React from 'react'
////
import 'antd/dist/antd.css';
import { Collapse } from 'antd';
import WordCloud from 'react-d3-cloud'; 
///
import Entryitembehavior from './Entryitembehavior';
import Entryitemevent from './Entryitemevent';
import Entryitemthought from './Entryitemthought';
import { sortDate } from '../utilities/sort';
import './CSS/Journal.css'
import anxiousFace from './../images/anxious.png';
import sadFace from'./../images/sad.png';
import happyFace from './../images/happy.png';
const { Panel } = Collapse;

export default function Journal({entry}) {

	const filterEmotion = (emotion) => entry.filter(oneEntry => oneEntry.emotion === emotion);

//Word Cloud

  const wordCloud = (emotion, type) => {
	const wordsArr = [];

	filterEmotion(emotion).forEach(event => {
		const dailyWords = event[type].match(/[a-zA-Z]+/g);
		wordsArr.push(...dailyWords)
	})
  const wordCloudArr = [];
	const countsCloudEvent = {};
	wordsArr.forEach(wrd => {
		let val;
		if (wrd.lenth < 3) val = 1000;
		else if (wrd.lenth < 6) val = 3000;
		else if (wrd.lenth < 9) val = 4000;
		else val = 2000;
		countsCloudEvent[wrd] = (countsCloudEvent[wrd] || 0) + val;
	})
	for (const [key, value] of Object.entries(countsCloudEvent)) {
		let cloudEventObj = {};
		cloudEventObj.text = key;
		cloudEventObj.value = value;
		wordCloudArr.push(cloudEventObj);
	}
	return wordCloudArr;
	}

 


////CHOAS STOPS FROM HERE ////////////////////////////////////////////////////
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
									<div>{filterEmotion('sad').map((ent) => <Entryitemevent ent={ent} key={ent.id} entry={sortDate(entry)}></Entryitemevent>)}</div>
								</div>
								<div className='cloudcontainer'>
									<WordCloud width={500} height={500} data={wordCloud('sad', 'triggeringEvent')} />
								</div>
							</div>
						</Panel>

						<Panel header="Thought" key="2" className='headerjournal'>
							<div className='collapsecontainer'>
								<div className='textcontainer'>
									<p>{filterEmotion('sad').map((ent) => <Entryitemthought ent={ent} key={ent.id}></Entryitemthought>)}</p>
								</div>
								<div className='cloudcontainer'>
									<WordCloud width={500} height={500} data={wordCloud('sad', 'thought')} />
								</div>
							</div>
						</Panel>

						<Panel header="Behaviour" key="3" className='headerjournal'>
							<div className='collapsecontainer'>
								<div className='textcontainer'>
									<p>{filterEmotion('sad').map((ent) => <Entryitembehavior ent={ent} key={ent.id}></Entryitembehavior>)}</p>
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
								<p>{filterEmotion('happy').map((ent) => <Entryitemevent ent={ent} key={ent.id}></Entryitemevent>)}</p>
							</div>
							<div className='cloudcontainer'>
								<WordCloud width={500} height={500} data={wordCloud('happy', 'triggeringEvent')} />
							</div>
						</div>
					</Panel>

					<Panel header="Thought" key="2" className='headerjournal'>
						<div className='collapsecontainer'>
							<div className='textcontainer'>
								<p>{filterEmotion('happy').map((ent) => <Entryitemthought ent={ent} key={ent.id}></Entryitemthought>)}</p>
							</div>
							<div className='cloudcontainer'>
								<WordCloud width={500} height={500} data={wordCloud('happy', 'thought')} />
							</div>
						</div>
					</Panel>

					<Panel header="Behaviour" key="3" className='headerjournal'>
						<div className='collapsecontainer'>
							<div className='textcontainer'>
								<p>{filterEmotion('happy').map((ent) => <Entryitembehavior ent={ent} key={ent.id}></Entryitembehavior>)}</p>
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
									<p>{filterEmotion('anxious').map((ent) => <Entryitemevent ent={ent} key={ent.id}></Entryitemevent>)}</p>
								</div>
								<div className='cloudcontainer'>
									<WordCloud width={500} height={500} data={wordCloud('anxious', 'triggeringEvent')} />
								</div>
							</div>
						</Panel>

						<Panel header="Thought" key="2" className='headerjournal'>
							<div className='collapsecontainer'>
								<div className='textcontainer'>
									<p>{filterEmotion('anxious').map((ent) => <Entryitemthought ent={ent} key={ent.id}></Entryitemthought>)}</p>
								</div>
								<div className='cloudcontainer'>
									<WordCloud width={500} height={500} data={wordCloud('anxious', 'thought')} />
								</div>
							</div>
						</Panel>

						<Panel header="Behaviour" key="3" className='headerjournal'>
							<div className='collapsecontainer'>
								<div className='textcontainer'>
									<p>{filterEmotion('anxious').map((ent) => <Entryitembehavior ent={ent} key={ent.id}></Entryitembehavior>)}</p>
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
