import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Card from './components/Card'
import axios from 'axios';
import CardList from './components/Cardlist';
import TButton from './components/Button';

function App() {

  const [artistData, setArtistData] = useState()
  
  async function getArtistData() {
      const { data } = await axios.get('http://localhost:3000/artist');
      setArtistData(data)
      console.log(artistData)
  }

  

  useEffect(() => {
    getArtistData()
  },[])

  return (
    <div className="App">
    <p>tutorial project</p>

    {
      artistData && 
      <CardList artistData={artistData} text={'test ทดสอบ'} />
    }
    
    </div>
  )
}

export default App
