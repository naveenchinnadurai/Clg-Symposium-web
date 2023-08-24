import './App.css'
import Home from './pages/home'
import Intro from './pages/intro'
import {Route,Routes} from 'react-router-dom'

function App() {
  return(
    <div className="app">
      <Routes>
        <Route path='/' element={<Intro/>}/>
        <Route path='/home' element={<Home/>}/>
      </Routes>
    </div>
  )
}

export default App
