import React from 'react'
import moment from 'moment';
import './CSS/EntryItem.css';
import Entry from '../interfaces/entry';


interface EntryProps {
  entry: Entry;
}


const EntryItemBehaviour: React.FC<EntryProps> = ({ entry }: EntryProps) => {
  return (
    <div className='container'>
      <div className='event'>{entry.behavior.toUpperCase()}</div>
      <div className='date'>{moment(entry.date).format('h:mm a - MMMM Do YY')}</div>
    </div>
  )
}

export default EntryItemBehaviour