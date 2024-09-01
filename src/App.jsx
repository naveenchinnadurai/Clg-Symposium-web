import AOS from 'aos'
import { Route, Routes } from 'react-router-dom'
import DeptPage from './pages/deptPage'
import Home from './pages/home'
import Splash from './pages/splash'
import 'aos/dist/aos.css'
import './global.css'
AOS.init();
function App() {
  return (
    <div className="text-white">
      <Routes>
        <Route path='/' element={<Splash />} />
        <Route path='/home' element={<Home />} />
        <Route path='/deptpage' element={<DeptPage />}></Route>
      </Routes>
    </div>
  )
}

export default App
