import React from 'react'
import { postOneEntry } from '../Services/ApiClient';
import anxiousFace from './../images/anxious.png';



export default function Emotions({setEntry}) {
  
	const sumbitHandler = (e) => {
		e.preventDefault();
		const entry = { 
			emotion: e.target.useremotions.value, 
			triggeringEvent: e.target.usertriggeringevent.value, 
			thought: e.target.userthought.value,
			behavior: e.target.userbehavior.value,
			date: e.target.userdate.value
	};
	console.log(entry, 'entry');

	postOneEntry(entry)
		.then(newEntry => {
			setEntry(lastEntry => [...lastEntry, newEntry]);
			// emotions set it back to default?? 
			e.target.usertriggeringevent.value = '';
			e.target.userthought.value = '';
			e.target.userbehavior.value = '';
			e.target.userdate.value = null;
			
		})
		.catch(e => console.log(e));
	}

  return (
    <div>
        <form onSubmit={sumbitHandler}>

            <div className='question'>How you feeling?</div>
            <select name="useremotions">
                <option value="sad">Sad</option>
                <option value="anxious">Anxious</option>
                <option value="happy">Happy</option>
            </select>
{/* checkbox experiment */}
            <ul>
              <li>
                <input type="checkbox" id="myCheckbox1" />
                <label for="myCheckbox1"><img src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/320/whatsapp/314/anxious-face-with-sweat_1f630.png" /></label>
              </li>
              <li>
                <input type="checkbox" id="myCheckbox2" />
                <label for="myCheckbox2"><img src={anxiousFace} /></label>
              </li>
            </ul>
{/* checkbox experiment  */}
            <div className='question'>Triggering Event...</div>
            <input type='text' name='usertriggeringevent' placeholder='I failed the test...' required/>

            <div className='question'>What's on your mind?</div>
            <input type='text' name='userthought' placeholder="e.g., I'm such a loser..." required/>

            <div className='question'>How did you react to it?</div>
            <input type='text' name='userbehavior' placeholder='I cried' required/>

            <div className='question'>Date and Time</div>
            <input type='datetime-local' name='userdate' required/>

            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}
