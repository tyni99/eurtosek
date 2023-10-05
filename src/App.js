import { useState } from 'react';
import './App.css';
import axios from 'axios';


const URL = "https://api.freecurrencyapi.com/v1/latest?apikeyHERE"

function App() {
  const [eur,setEur] = useState(0)
  const [sek,setSek] = useState(0)
  const [rate,setRate] = useState(0)
  
  const convert = (e) => {
    e.preventDefault()
    axios.get(URL)
    .then((response)=>{
      const json=response.data
      setRate(json.data.SEK)
      setSek(eur * json.data.SEK)
    }).catch (error =>{
      alert(error)
    })
  }
  
  return (
    <div id="container">
      <h3>VALUUTTALASKURI</h3>
      <form onSubmit={convert}>
        <div id="euro">
          <label>Eur</label>&nbsp;
          <input type="number" step="0.01"
          value={eur} onChange={e => setEur(e.target.value)} />
          <output>{rate}</output>
        </div>
        <div id="sek">
          <label>Sek</label>
          <output>{sek.toFixed(2)} SEK</output>
        </div>
        <div>
          <button>Calculate</button>
        </div>
      </form>
    </div>
  );
}

export default App;
