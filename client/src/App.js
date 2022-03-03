import { useEffect } from 'react';
import './App.css';
import Emotions from './Components/Emotions';
import Navbar from './Components/Navbar';



function App() {
/////////
  // const [emotion, setEmotion] = useState([]);

  // useEffect(() => {

  // })
//////////


  return (
    <div className="App">
      <Navbar/>
      <Emotions />
    </div>
  );
}

export default App;
