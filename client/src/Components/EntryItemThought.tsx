import React from 'react'
import moment from 'moment';
import './CSS/EntryItem.css';
import Entry from '../interfaces/entry';

interface EntryProps {
  entry: Entry;
}


export default function EntryItemThought({entry}: EntryProps) {
  return (
    <div className='container'>
      <div className='event'>{entry.thought.toUpperCase()}</div>
      <div className='date'>{moment(entry.date).format('h:mm a - MMMM Do YY')}</div>
    </div>
  )
}
