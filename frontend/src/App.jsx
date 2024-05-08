import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from './Components/Home'

import Women from './Components/Women'
import Men from './Components/Men'
import Home1 from './Home1/Home1'
import Contact from './Components/Contact'
function App() {
  return (
    <div>
     <Routes>
        <Route path='/' element={<Home1 />}></Route>
        <Route path='womenclothes' element={<Women />}></Route>
        <Route path='menclothes' element={<Men />}></Route>
        <Route path='contact' element={<Contact />}></Route>
        
       </Routes>
    </div>
  )
}

export default App