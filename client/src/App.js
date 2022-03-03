import React, {useEffect, useState} from 'react';
import './App.css';
import Emotions from './Components/Emotions';
import Navbarcomp from './Components/Navbarcomp';

///////////////
import 'bootstrap/dist/css/bootstrap.min.css';
///////////////


function App() {
/////////
  const [entry, setEntry] = useState([]);

  useEffect(() => {

  }, []);
//////////


  return (
    <div className="App">
      <Navbarcomp/>
      <Emotions entry={entry} setEntry={setEntry}> </Emotions>
    </div>
  );
}

export default App;
