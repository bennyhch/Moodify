import React, {useState} from 'react'
import { postOneEntry } from '../Services/ApiClient';
import anxiousFace from './../images/anxious.png';
import sadFace from'./../images/sad.png';
import happyFace from './../images/happy.png';



export default function Emotions({setEntry}) {
  
  const [emojiType, setEmojiType] = useState("");

	const sumbitHandler = (e) => {
		e.preventDefault();
		const entry = { 
      emotion: emojiType,
			triggeringEvent: e.target.usertriggeringevent.value, 
			thought: e.target.userthought.value,
			behavior: e.target.userbehavior.value,
			date: e.target.userdate.value
	};
	// console.log(entry, 'entry');
  console.log('e', e);
  console.log('e.target', e.target);
  console.log('emoji Type', emojiType);

	postOneEntry(entry)
		.then(newEntry => {
			setEntry(lastEntry => [...lastEntry, newEntry]);
      setEmojiType('')
			e.target.usertriggeringevent.value = '';
			e.target.userthought.value = '';
			e.target.userbehavior.value = '';
			e.target.userdate.value = null;
		})
		.catch(e => console.log(e));
	}

  function onChangeValue(event) {
    setEmojiType(event.target.value);
    console.log(event.target.value);
  }

  return (
    <div>
        <form onSubmit={sumbitHandler}>
            <div className='question'>How you feeling?</div>
            {/* <select name="useremotions">
                <option value="sad">Sad</option>
                <option value="anxious">Anxious</option>
                <option value="happy">Happy</option>
            </select> */}
{/* checkbox experiment */}
            <div >
              <label>
                <input type="radio" value='anxious' name="anxious"  checked={emojiType === 'anxious'} onChange={onChangeValue}/> <img src={anxiousFace} />
              </label>
              <label>
                <input type="radio" value='sad' name="sad" checked={emojiType === 'sad'} onChange={onChangeValue}/> <img src={sadFace} />
              </label>
              <label>
                <input type="radio" value='happy' name="happy" checked={emojiType === 'happy'} onChange={onChangeValue}/> <img src={happyFace} />
              </label>
            </div>
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
