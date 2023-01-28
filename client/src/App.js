import { BrowserRouter , Routes, Route } from 'react-router-dom'
import Home from './Pages/Home/Index'
import Navbar from './Components/Navbar/Index'
import Footer from './Components/Footer/Index'
import Add from './Pages/Add/index'
function App() {
  return (
   <BrowserRouter>
   <Navbar/>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/add' element={<Add/>}/>
   </Routes>
   <Footer/>
   </BrowserRouter>
  );
}

export default App;
