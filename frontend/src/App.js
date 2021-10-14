
import { BrowserRouter as Router, Route , Switch } from 'react-router-dom';
import Mindex from './components/index';
import Wochange from './components/Wochage';
import Woview from './components/Woview';
function App() {
  
  return (  
    
         <Router>
            <Switch>
            <Route exact path = "/"  component = {Mindex}></Route>     
            <Route exact path = "/wochange"  component = {Wochange}></Route>
            <Route exact path = "/Wonew"  component = {Woview}></Route>
            </Switch>
          </Router>
    
        
  );
}

export default App;
