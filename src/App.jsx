
import './App.css'
import { Route, Routes } from 'react-router-dom';
import { BackgroundImage } from './components/BackgroundImage.jsx';
import {Header} from './components/Header.jsx'
import { Home } from './components/Home.jsx'
import { Destination } from './components/Destination.jsx';
import { Technology } from './components/Technology.jsx';
import { Crew } from './components/Crew.jsx';

function App() {
  return (
    <main className='max-w-[1440px] mx-auto'>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destinations/:name" element={<Destination />}/>
        <Route path='/crew' element={<Crew/>}/>
        <Route path='/technology' element={<Technology/>}/>
      </Routes>
    </main>

  )
}

export default App
