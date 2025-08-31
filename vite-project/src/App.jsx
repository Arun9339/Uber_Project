import {Route, Routes} from 'react-router-dom'
import UserContext from './Context/userContext'
import Home from './pages/Home'
import UserLogin from './pages/UserLogin'
import UserSignup from './pages/UserSignup'
import CaptainLogin from './pages/CaptainLogin'
import CaptainSignup from './pages/CaptainSignup' 
import UserProtectedWrapper from './pages/UserProtectWrapper'
import UserProtectedWrapper from './pages/UserProtectWrapper'
import UserLogout from './pages/UserLogout'

function App() {
  return (
   <div className=''>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/login' element={<UserLogin/>} />
        <Route path='/signup' element={<UserSignup/>} />
        <Route path='/CaptainLogin' element={<CaptainLogin/>} />
        <Route path='/CaptainSignup' element={<CaptainSignup/>} />
        <Route path='/home' element={<Home/>}/>
        <Route path = 'home' element = {<UserProtectedWrapper>
          <Home/>
        </UserProtectedWrapper>}/>

        <Route path='/user/logout' element={<UserProtectedWrapper></UserProtectedWrapper>}></Route>
      
    </Routes>
   </div>
  )
}

export default App
