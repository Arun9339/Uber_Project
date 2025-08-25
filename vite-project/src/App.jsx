import {Route, Routes} from 'react-router-dom'
import Home from './pages/Home'

function App() {
  return (
   <div className=''>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/login' element={<UserLogin/>} />
      <Route path='/signup' element={<UserSignup/>} />
      <Route path='/CaptainLogin' element={<CaptainLogin/>} />
      <Route path='/CaptainSignup' element={<CaptainSignup/>} />
      
    </Routes>
   </div>
  )
}

export default App
