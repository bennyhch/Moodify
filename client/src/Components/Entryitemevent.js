import React from 'react';
import moment from 'moment';
import './CSS/Entryitem.css';
import WordCloud from 'react-d3-cloud'; 
import Wordcloud from './Wordcloud';


export default function Entryitemevent({ent}) {
  
 
  return (
    <div className='container'>
        <div className='event'>{ent.triggeringEvent}</div>
        <div className='date'>{moment(ent.date).format('h:mm a - MMMM Do YY')}</div>
    </div>
  )
}
