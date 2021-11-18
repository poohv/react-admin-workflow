
import { BrowserRouter as Router, Route , Switch } from 'react-router-dom';
import Mindex from './components/index';
import Wochange from './components/Wochage';
import Woview from './components/Woview';
import detail from './components/Wodetail';
function App() {
  
  return (  
    
         <Router>
            <Switch>
            <Route exact path = "/"  component = {Mindex}></Route>     
            <Route exact path = "/wochange"  component = {Wochange}></Route>
            <Route exact path = "/Wonew"  component = {Woview}></Route>
            <Route exact path = "/detail/:no"  component = {detail}></Route>
            </Switch>
          </Router>
  );
}

export default App;
