import Entryitemevent from './Entryitemevent';
import Entryitemthought from './Entryitemthought';
import moment from 'moment';
import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


export default function Statistics({entry}) {
  
  const filteringSad = entry.filter(oneEntry => oneEntry.emotion === 'sad');
  const filteringHappy = entry.filter(oneEntry => oneEntry.emotion === 'happy');
  const filteringAnxious = entry.filter(oneEntry => oneEntry.emotion === 'anxious');

  const numSad = filteringSad.length;
  const numHappy = filteringHappy.length;
  const numAnxious = filteringAnxious.length;
  
  const dayOfTheWeekSad =  filteringSad.map((one) => moment(one.date).format('dddd'));
  const countsSad = {};
  dayOfTheWeekSad.forEach((x) => {
    countsSad[x] = (countsSad[x] || 0) + 1;
  });
  console.log('counts of Sad day', countsSad);

  const dayOfTheWeekHappy =  filteringHappy.map((one) => moment(one.date).format('dddd'));
  const countsHappy = {};
  dayOfTheWeekHappy.forEach((x) => {
    countsHappy[x] = (countsHappy[x] || 0) + 1;
  });
  console.log('counts of Happy day', countsHappy);

  const dayOfTheWeekAnxious =  filteringAnxious.map((one) => moment(one.date).format('dddd'));
  const countsAnxious = {};
  dayOfTheWeekAnxious.forEach((x) => {
    countsAnxious[x] = (countsAnxious[x] || 0) + 1;
  });

  const data = [
    {
      name: 'Mon',
      Happy: (countsHappy.Monday || 0),
      Sad: (countsSad.Monday || 0),
      Anxious: (countsAnxious.Monday || 0),
      amt: 2,
    },
    {
      name: 'Tues',
      Happy: (countsHappy.Tuesday || 0),
      Sad: (countsSad.Tuesday || 0),
      Anxious: (countsAnxious.Tuesday || 0),
      amt: 2,
    },
    {
      name: 'Wed',
      Happy: (countsHappy.Wednesday || 0),
      Sad: (countsSad.Wednesday || 0),
      Anxious: (countsAnxious.Wednesday || 0),
      amt: 2,
    },
    {
      name: 'Thurs',
      Happy: (countsHappy.Thursday || 0),
      Sad: (countsSad.Thursday || 0),
      Anxious: (countsAnxious.Thursday || 0),
      amt: 2,
    },
    {
      name: 'Fri',
      Happy: (countsHappy.Friday || 0),
      Sad: (countsSad.Friday || 0),
      Anxious: (countsAnxious.Friday || 0),
      amt: 2,
    },
    {
      name: 'Sat',
      Happy: (countsHappy.Saturday || 0),
      Sad: (countsSad.Saturday || 0),
      Anxious: (countsAnxious.Saturday || 0),
      amt: 2,
    },
    {
      name: 'Sun',
      Happy: (countsHappy.Sunday || 0),
      Sad: (countsSad.Sunday || 0),
      Anxious: (countsAnxious.Sunday || 0),
      amt: 3,
    },
  ];



  return (
    <div>
      <div className='charts'>
        
        <div className='linechart'>
          <LineChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="Sad" stroke="#8884d8" activeDot={{ r: 5 }}/>
            <Line type="monotone" dataKey="Happy" stroke="#82ca9d" activeDot={{ r: 5 }}/>
            <Line type="monotone" dataKey="Anxious" stroke="#a3375f" activeDot={{ r: 5 }}/>

          </LineChart>
        </div>

      </div>
{/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
{/* entries below */}
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
