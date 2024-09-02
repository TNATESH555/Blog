import React from 'react'
import { BrowserRouter as Router, Route,Routes} from 'react-router-dom';
import Contact from './Contact'
import Articles from './Articles'
// import Blognav from './Blognav.jsx'
import Articles_brief from './Articles_brief.jsx'
import Ai from './Ai.jsx'
import NavBar from './Auth.jsx'
//import BasicSelect from './Sample.jsx';
  import Users from './Users.jsx';
import Right from './other.jsx'

function App() {
  return (
    <div>
      <NavBar/>
      {/* <Blognav/> */}
      <Router>   
          <Routes>
          <Route path='/' element={<Users/>}/>
          <Route path='/articles' element={<Articles/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/brief' element={<Articles_brief/>}/>
          <Route path='/ai' element={<Ai/>}/>
          <Route path='/addusers' element={<Right/>}/>
          </Routes>
          </Router>   
       {/* <Sampletxt/>  */}
      
      
    </div>
  )
}

export default App