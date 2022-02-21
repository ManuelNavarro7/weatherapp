import './App.css';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import {BrowserRouter,Routes,Route,useParams} from 'react-router-dom'
import CustomProvider, {shopContext} from './context/CustomProvider';
import ComponentCommon from './components/commonComponents';
import NavbarComponent from './components/NavBar';
import WeatherApi from './components/Api';

function App() {

  const Navbar=() =><NavbarComponent/> 
  const Weather=()=><WeatherApi/>

  return (
    
    <CustomProvider>
      <BrowserRouter>
      <Navbar/>
      

      <Routes>
      <Route exact path = "/" element={<Weather/>}></Route>


      </Routes>
      
      </BrowserRouter>
    </CustomProvider>
    
  );
}

export default App;
