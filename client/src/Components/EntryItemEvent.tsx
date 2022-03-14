import React from 'react';
import moment from 'moment';
import './CSS/EntryItem.css';
import Entry from '../interfaces/entry';

interface EntryProps {
  entry: Entry
}


export default function EntryItemEvent({entry}: EntryProps) {
  
 
  return (
    <div className='container'>
        <div className='event'>{entry.triggeringEvent.toUpperCase()}</div>
        <div className='date'>{moment(entry.date).format('h:mm a - MMMM Do YY')}</div>
    </div>
  )
}
