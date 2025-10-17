import './App.scss'
import Home from './pages/Home';
import Form from './pages/Form';
import {Routes, Route} from 'react-router-dom';

function App() {

  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/form' element={<Form/>} />
    </Routes>
  )
}

export default App
