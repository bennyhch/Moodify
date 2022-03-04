import React from 'react'
import Entryitem from './Entryitem'

export default function Statistics({entry}) {
  return (
    <div>
      <div>
        {/* bar chart */}
      </div>
      <div>
        {entry.map((ent) => <Entryitem ent={ent} key={ent.id}></Entryitem>)}
        {/* {console.log(entry)} */}
      </div>
    </div>
  )
}
