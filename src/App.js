import './App.css';
import Header from './components/Header'
import MainScreen from './components/MainScreen'
import Example from './components/old/Example'
import DesignProcess from './components/old/DesignProcess'
import Step1 from './components/old/Step1'
import ScreenPhone from './components/old/ScreenPhone'
import ScreenPhoneCircle from './components/old/ScreenPhoneCircle'
import ScreenPhoneFour from './components/old/ScreenPhoneFour'
import HandBlock from './components/old/handBlock'
import Step4 from './components/old/Step4'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import Zeitview from './pages/old/Zeitview'
import Ayla from './pages/old/Ayla'
import Xyztrust from './pages/old/Xyztrust'
import Cases from './pages/Cases'
import Home from './pages/Home'
// import macbook from '../assets/image/MacbookAir(2022).png'

function App() {

  return (
    <>
      <Routes>
        {/*<Route path="/" element={<Layout />}>*/}
        {/*<Route path="/" element={<Ayla />} />*/}
        <Route path="/" element={<Home />} />
        <Route path="zeit" element={<Zeitview />} />
        <Route path="xyz" element={<Xyztrust />} />
        <Route path="cases" element={<Cases />} />
        {/*<Route path="*" element={<NoMatch />} />*/}
      </Routes>

      {/*<Example />*/}
      {/*<div className="wrapper">*/}
      {/*  <Header />*/}
      {/*  <MainScreen macbook={macbook} main={main} />*/}
      {/*</div>*/}
      {/*<DesignProcess />*/}
      {/*<Step1 />*/}
      {/*<ScreenPhone />*/}
      {/*<ScreenPhoneCircle />*/}
      {/*<ScreenPhoneFour />*/}
      {/*<HandBlock />*/}
      {/*<Step4 />*/}
      {/*<Footer />*/}

      {/*<Ayla />*/}
      {/*<Zeitview />*/}
      {/*<Xyztrust />*/}
    </>
  );
}

export default App;
