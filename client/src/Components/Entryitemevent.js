import React from 'react';
import moment from 'moment';
import './CSS/Entryitem.css';



export default function Entryitemevent({ent}) {
  
 
  return (
    <div className='container'>
        <div className='event'>{ent.triggeringEvent.toUpperCase()}</div>
        <div className='date'>{moment(ent.date).format('h:mm a - MMMM Do YY')}</div>
    </div>
  )
}
