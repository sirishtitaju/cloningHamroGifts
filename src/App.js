import Navbar from './components/navbar'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import About from './pages/About'
import Home from './pages/Home'
import Cart from './pages/Cart'
import { useEffect } from 'react'

let appHeader = 'App-header';
let sticky = null;

function App() {

  useEffect(() => {
    let yLeftToGo = window.pageYOffset;
    console.log(yLeftToGo);

    window.onscroll = function (e) {
      if (this.oldScroll > this.scrollY) {
        sticky = 'sticky';
        console.log("Sticky On");
      } else {
        sticky = null;
      }
      this.oldScroll = this.scrollY;
    }
  });

  return (
    <div className='App'>
      <header className={`${appHeader} ${sticky}`}>
        <Navbar />
      </header>
      <main>
        <Routes>
          <Route path='/About' element={<About />} />
          <Route path='/' element={<Home />} />
          <Route path='/Cart' element={<Cart />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
