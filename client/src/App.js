import React, {useEffect, useState} from 'react';
import './App.css';
import Emotions from './Components/Emotions';
import Navbar from './Components/Navbar';



function App() {
/////////
  const [entry, setEntry] = useState([]);

  useEffect(() => {

  }, []);
//////////


  return (
    <div className="App">
      <Navbar/>
      <Emotions entry={entry} setEntry={setEntry}> </Emotions>
    </div>
  );
}

export default App;
