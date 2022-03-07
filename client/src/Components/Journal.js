import React from 'react'
////
import 'antd/dist/antd.css';
import { Collapse } from 'antd';
////
import moment from 'moment';
import Entryitembehavior from './Entryitembehavior';
import Entryitemevent from './Entryitemevent';
import Entryitemthought from './Entryitemthought';

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

  return (
    <div>

    	<div>
        <div className='sadbox'>
          <h3>Sad</h3>
					<Collapse >
						<Panel header="Event" key="1">
							<p>{filteringSad.map((ent) => <Entryitemevent ent={ent} key={ent.id}></Entryitemevent>)}</p>
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
