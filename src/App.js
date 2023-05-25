import logo from './logo.svg';
import './App.css';
import AppHome from './home/apphome';
import AppUser from './user/appuser';


function App() {
      if(localStorage.getItem("sellerid") == null){
        return ( <AppHome/> );
      }
      else{
        return( <AppUser/> );
      }
}

export default App;
