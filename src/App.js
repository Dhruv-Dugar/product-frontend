import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Homepage from './pages/homepage'
import Viewpage from './pages/viewpage'
import Createpage from './pages/createpage'
import Deletepage from './pages/deletepage'
import Updatepage from './pages/updatepage'


function App() {
  return (
    <BrowserRouter className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/view' element={<Viewpage />} />
        <Route path='/create' element={<Createpage />} />
        <Route path='/delete' element={<Deletepage />} />
        <Route path='/update' element={<Updatepage />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App; 