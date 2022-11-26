import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Card from './components/Card'
import axios from 'axios';

function App() {

  const [artistData, setArtistData] = useState()
  
  async function getArtistData() {
      const { data } = await axios.get('http://localhost:3000/artist');
      setArtistData(data)
  }

  return (
    <div className="App">
    <button onClick={getArtistData}>fetch</button>
    <p>tutorial project</p>
    <Card></Card>
    </div>
  )
}

export default App
