import 'bootstrap/dist/css/bootstrap.min.css'

import './App.css';
import React,{useState,useEffect} from 'react'
import Contact from './components/Contact';
import Aboutclick from './components/assets/Aboutclick';
import Home from './components/assets/page/Home';
import { Route,Routes,BrowserRouter } from 'react-router-dom';
import NotFound from './components/assets/page/NotFound';
import Cv from './components/assets/page/Cv';
import Skilscontainer from './components/Skilscontainer';
import { ClimbingBoxLoader } from 'react-spinners';



// loading





function App() {
  const [loading,setLoading] = useState(false);
  useEffect(() =>{
    setLoading(true)
    setTimeout(() =>{
      setLoading(false)
    },2500)
  },[]
  )
  

 
  return(
<>

<div className='loadingapp'>
  {


loading ?
      <ClimbingBoxLoader className='box'
      color={"#5F9EA0"}
      loading={loading}
      size={25}
     
      data-testid="loader"
    /> 
      :
   <BrowserRouter>
   
 
 <Routes>

  <Route path="/" element={<Home />} />
  <Route path="*" element={<NotFound />} />
  <Route path="/about" element={<Aboutclick/>} />
  <Route path="/cv" element={<Cv/>}/>
  <Route path='/skils' element={<Skilscontainer/>}/>
  <Route path='/contact' element= {<Contact/>} />

  
 </Routes>
 
 </BrowserRouter>
}
 </div>
 </>
   
  
  );
}

export default App;
