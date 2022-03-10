import moment from 'moment';
import React, { PureComponent, useState, useCallback } from 'react';
import { BarChart, Bar, Cell, ReferenceLine, PieChart, Pie, Sector, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './CSS/Statistics.css';

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
  // console.log('counts of Sad day', countsSad);

  const dayOfTheWeekHappy =  filteringHappy.map((one) => moment(one.date).format('dddd'));
  const countsHappy = {};
  dayOfTheWeekHappy.forEach((x) => {
    countsHappy[x] = (countsHappy[x] || 0) + 1;
  });
  // console.log('countsSad',countsSad);

  const dayOfTheWeekAnxious = filteringAnxious.map((one) => moment(one.date).format('dddd'));
  const countsAnxious = {};
  dayOfTheWeekAnxious.forEach((x) => {
    countsAnxious[x] = (countsAnxious[x] || 0) + 1;
  });
  // console.log('countsAnxious.Tuesday',countsAnxious.Tuesday || 0);



  ////////////////////////////////////////////////
  const dataPosAndNeg = [
    {
      name: 'Mon',
      Positivity: (countsHappy.Monday || 0),
      Negativity: (-( (countsSad.Monday || 0) + (countsAnxious.Monday || 0)) || 0),
    },
    {
      name: 'Tues',
      Positivity: (countsHappy.Tuesday || 0),
      Negativity: (-( (countsSad.Tuesday || 0) + (countsAnxious.Tuesday || 0)) || 0),
    },
    {
      name: 'Wed',
      Positivity: (countsHappy.Wednesday || 0),
      Negativity: (-( (countsSad.Wednesday || 0) + (countsAnxious.Wednesday || 0)) || 0),
    },
    {
      name: 'Thurs',
      Positivity: (countsHappy.Thursday || 0),
      Negativity: (-( (countsSad.Thursday || 0) + (countsAnxious.Thursday || 0)) || 0),
    },
    {
      name: 'Fri',
      Positivity: (countsHappy.Friday || 0),
      Negativity: (-( (countsSad.Friday || 0) + (countsAnxious.Friday || 0)) || 0),
    },
    {
      name: 'Sat',
      Positivity: (countsHappy.Saturday || 0),
      Negativity: (-( (countsSad.Saturday || 0) + (countsAnxious.Saturday || 0)) || 0),
    },
    {
      name: 'Sun',
      Positivity: (countsHappy.Sunday || 0),
      Negativity: (-( (countsSad.Sunday || 0) + (countsAnxious.Sunday || 0)) || 0),
    },
  ];

  ////////////////////////////////////////////////
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

  ///////////////////////////////////////////////////////////////PIE CHART MESS... START FROM HERE
  const dataPie = [
    { name: "Sad", value: numSad },
    { name: "Happy", value: numHappy },
    { name: "Anxious", value: numAnxious }
  ];
  
  const renderActiveShape = (props) => {
    const RADIAN = Math.PI / 180;
    const {
      cx,
      cy,
      midAngle,
      innerRadius,
      outerRadius,
      startAngle,
      endAngle,
      fill,
      payload,
      percent,
      value
    } = props;
    const sin = Math.sin(-RADIAN * midAngle);
    const cos = Math.cos(-RADIAN * midAngle);
    const sx = cx + (outerRadius + 10) * cos;
    const sy = cy + (outerRadius + 10) * sin;
    const mx = cx + (outerRadius + 30) * cos;
    const my = cy + (outerRadius + 30) * sin;
    const ex = mx + (cos >= 0 ? 1 : -1) * 22;
    const ey = my;
    const textAnchor = cos >= 0 ? "start" : "end";
  
    return (
      <g>
        <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
          {payload.name}
        </text>
        <Sector
          cx={cx}
          cy={cy}
          innerRadius={innerRadius}
          outerRadius={outerRadius}
          startAngle={startAngle}
          endAngle={endAngle}
          fill={fill}
        />
        <Sector
          cx={cx}
          cy={cy}
          startAngle={startAngle}
          endAngle={endAngle}
          innerRadius={outerRadius + 6}
          outerRadius={outerRadius + 10}
          fill={fill}
        />
        <path
          d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
          stroke={fill}
          fill="none"
        />
        <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
        <text
          x={ex + (cos >= 0 ? 1 : -1) * 12}
          y={ey}
          textAnchor={textAnchor}
          fill="#333"
        >{`${value} times`}</text>
        <text
          x={ex + (cos >= 0 ? 1 : -1) * 12}
          y={ey}
          dy={18}
          textAnchor={textAnchor}
          fill="#999"
        >
          {`(${(percent * 100).toFixed(2)}%)`}
        </text>
      </g>
    );
  };

  const [activeIndex, setActiveIndex] = useState(0);
  const onPieEnter = useCallback(
    (_, index) => {
      setActiveIndex(index);
    },
    [setActiveIndex]
  );
  ///////////////////////////////////////////////////////////////PIE CHART MESS... STOP FROM HERE


  return (
    <div className='statbody'>
          
      <h1>Experience of Positive and Negative Emotions by Day</h1>
      <div className='charts'>
        <div className='firstrow'>
          <div id='linechart'>
            <LineChart
              width={500}
              height={300}
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5
              }}>
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

          <div id='barchart' style={{height: 400, width: 500}}>
            <ResponsiveContainer >
              <BarChart
                width={500}
                height={300}
                data={dataPosAndNeg}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <ReferenceLine y={0} stroke="#000" />
                <Bar dataKey="Positivity" fill="#8884d8" />
                <Bar dataKey="Negativity" fill="#82ca9d" />
              </BarChart>
            </ResponsiveContainer>  
          </div>
        </div>

          <div id='piechart'>
            <PieChart width={400} height={400}>
              <Pie
                activeIndex={activeIndex}
                activeShape={renderActiveShape}
                data={dataPie}
                cx={200}
                cy={200}
                innerRadius={60}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
                onMouseEnter={onPieEnter}
              />
            </PieChart>
          </div>
      </div>
    </div>
  )
}
