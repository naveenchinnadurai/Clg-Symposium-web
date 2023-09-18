import './App.css'
import DeptPage from './pages/deptPage'
import Home from './pages/home'
import Intro from './pages/intro'
import {Route,Routes} from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
function App() {
  return(
    <div className="app">
      <Routes>
        <Route path='/' element={<Intro/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/deptpage' element={<DeptPage />}></Route>
      </Routes>
    </div>
  )
}

export default App
