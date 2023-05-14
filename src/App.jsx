import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import Header from './components/Header';
import Footer from './components/Footer';
import UncontrolledExample from './components/Slider';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/style.scss';


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="Container">
      <Header />
      <UncontrolledExample />
      <Footer />
    </div>
  )
}

export default App;
