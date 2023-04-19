import './App.css';
import { BrowserRouter as Router,Routes,Route } from "react-router-dom"
import Header from './Components/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home/Home';
import Services from './Components/Services/Services';

function App() {
  return (
    <>
     <div className='app-container'>
      <Router>
        <Header/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/services' element={<Services/>}/>
            
        </Routes>
      </Router> 
     </div>
     </>
  );
}

export default App;
