import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import About from './pages/about/About'
import Contact from './pages/contact/Contact'
import Gallery from './pages/gallery/Gallery'
import Home from './pages/home/Home'
import NotFound from './pages/notfound/NotFound'
import Plans from './pages/plans/Plans'
import Trainers from './pages/trainers/Trainers'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/plans" element={<Plans />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/trainers" element={<Trainers />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
