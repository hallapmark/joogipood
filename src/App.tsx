import './App.css'
import { Route, Routes } from 'react-router-dom'
import Avaleht from './pages/Avaleht'
import LisaJook from './pages/LisaJook'
import HaldaJooke from './pages/HaldaJooke'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Avaleht />}/>
        <Route path="/lisa" element={<LisaJook />}/>
        <Route path="/halda" element={<HaldaJooke />}/>

        <Route path="/*" element=
          {
            <div>
              <h2>404</h2>
              <h3>Page not Found</h3>
            </div>
          }
        />
      </Routes>
    </>
  )
}

export default App
