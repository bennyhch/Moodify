import React, {useState} from 'react'
import { postOneEntry } from '../Services/ApiClient';
import anxiousFace from './../images/anxious.png';
import sadFace from'./../images/sad.png';
import happyFace from './../images/happy.png';
import Button from 'react-bootstrap/Button'
import './CSS/Emotions.css';
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"></link>



export default function Emotions({setEntry}) {
  // const [value, setValue] = React.useState(new Date());

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
			e.target.userdate.value = new Date();
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
            <h1>How you feeling?</h1>
            <div className='emoji-container'>

                <label className='anxiousemoji'>
                  <div className='emotionlabel'>ANXIOUS</div>
                  <input type="radio" value='anxious' name="anxious"  checked={emojiType === 'anxious'} onChange={onChangeValue}/> <img src={anxiousFace} />
                </label>

                <label className='sademoji'>
                  <div className='emotionlabel'>SAD</div>
                  <input type="radio" value='sad' name="sad" checked={emojiType === 'sad'} onChange={onChangeValue}/> <img src={sadFace}/>
                </label>

                <label className='happyemoji'>
                  <div className='emotionlabel'>HAPPY</div>
                  <input type="radio" value='happy' name="happy" checked={emojiType === 'happy'} onChange={onChangeValue}/> <img src={happyFace} />
                </label>

            </div>

            <div className='question-container'>
              <div className='question'>Triggering Event?</div>
              <textarea type='text' name='usertriggeringevent' placeholder='e.g., I failed the test...' required/>

              <div className='question'>What's on your mind?</div>
              <textarea type='text' name='userthought' placeholder="e.g., I'm such a loser..." required/>

              <div className='question'>How did you react to it?</div>
              <textarea type='text' name='userbehavior' placeholder='e.g., I cried...' required/>

              <div className='question'>Date and Time</div>
              <input type='datetime-local' name='userdate' required/>

              <div>
                {/* <button type='submit'>Submit</button> */}
                <Button className='button' type='submit' variant="outline-info">Submit</Button>{' '}
                {/* https://react-bootstrap.github.io/components/buttons/#button-props */}
              </div>

            </div>
            
        </form>

    </div>
  )
}
