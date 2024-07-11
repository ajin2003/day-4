import './App.css'
import Film from './components/Film'
import View from './components/View'
import {Route,Routes} from 'react-router-dom'
import Add from './components/Add'

function App() {

  return (
    <>
    <View/>
    <Routes>
      <Route path='/' element={<Film/>}> </Route>
      <Route path='/add' element={<Add/>}> </Route>
   </Routes>
       </>
  )
}

export default App

