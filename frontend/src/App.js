
import { BrowserRouter as Router, Route , Switch } from 'react-router-dom';
import Mindex from './components/index';
import Wochange from './components/Wochage';
function App() {
  
  return (  
    
         <Router>
            <Switch>
            <Route exact path = "/"  component = {Mindex}></Route>     
            <Route exact path = "/wochange"  component = {Wochange}></Route>
            </Switch>
          </Router>
    
        
  );
}

export default App;
