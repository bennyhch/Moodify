import React from 'react'
import moment from 'moment';
import './CSS/Entryitem.css';


export default function Entryitemthought({ent}) {
  return (
    <div className='container'>
      <div className='event'>{ent.thought}</div>
      <div className='date'>{moment(ent.date).format('h:mm a - MMMM Do YY')}</div>
    </div>
  )
}
