import React, {useEffect, useState} from 'react';
import './App.css';
import Navbarcomp from './Components/Navbarcomp';
import 'bootstrap/dist/css/bootstrap.min.css';
import { getEntries } from './Services/ApiClient';


function App() {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    getEntries()
      .then(entryList => setEntries(entryList));
  }, []);

  return (
    <div className="App">
      <Navbarcomp entries={entries} setEntry={setEntry}/>
    </div>
  );
}

export default App;
