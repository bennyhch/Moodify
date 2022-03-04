import React, {useEffect, useState} from 'react';
import './App.css';
import Emotions from './Components/Emotions';
import Navbarcomp from './Components/Navbarcomp';

///////////////
import 'bootstrap/dist/css/bootstrap.min.css';
import { getEntry } from './Services/ApiClient';
///////////////


function App() {
/////////
  const [entry, setEntry] = useState([]);

  useEffect(() => {
    getEntry()
      .then(entryList => setEntry(entryList));
  }, []);
//////////


  return (
    <div className="App">
      <Navbarcomp entry={entry} setEntry={setEntry}/>
      <Emotions entry={entry} setEntry={setEntry}></Emotions>
    </div>
  );
}

export default App;
