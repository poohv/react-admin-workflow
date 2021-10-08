
import { BrowserRouter as Router, Route , Switch } from 'react-router-dom';
import ListBoardComponent from './components/ListBoardComponent';
import CreateBoard from './components/CreateBoard';
import ReadBoard from './components/ReadBoard';


function App() {
  return (
    <div>       
        <div className="card-body">  
          <Router>
            <Switch>
            <Route exact path = "/"  component = {ListBoardComponent}></Route>
            <Route path = "/board" component = {ListBoardComponent}></Route>
            <Route path = "/create-board" component={CreateBoard}></Route>
            <Route path = "/read-board/:key" component={ReadBoard}></Route>
            </Switch>
          </Router>
        </div>  
  </div>
  );
}

export default App;
