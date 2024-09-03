import AOS from 'aos'
import { Route, Routes, useLocation } from 'react-router-dom'
import DeptPage from './pages/deptPage'
import Home from './pages/home'
import Splash from './pages/splash'
import DeptCard from './components/deptCard';
import Timeline from './components/Timeline';
import 'aos/dist/aos.css'
import './global.css'
import NotFound from './pages/notFoundPage'
import Footer from './components/footer'
import image from './assets/logo.png'
AOS.init();
function App() {
  const location = useLocation();
  return (
    <div className="relative text-white bg-gradient-to-r from-slate-900 via-cyan-950 to-gray-800 bg-logo">
      {
        location.pathname === "/" ? null : (
          <div className="fixed h-screen flex items-center justify-center w-screen">
            <img src={image} className='opacity-10 z-0' />
          </div>
        )
      }
      <Routes>
        <Route path='/' element={<Splash />} />
        <Route path='/home' element={<Home />} />
        <Route path='/deptPage' element={<DeptPage />}></Route>
        <Route path='/*' element={<NotFound />} />
        <Route path="/deptCard" element={<DeptCard />} />
        <Route path="/timeline" element={<Timeline />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
