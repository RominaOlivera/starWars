import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from "./Component/Home/Home"
import Detail from './Component/Details/Details';
import LandingPage from './Component/LandingPage/LandingPage';



function App() {
  return (
    <BrowserRouter>
    <div className="App">

      <Switch>
       <Route exact path={"/"} component={LandingPage}/>   
       <Route path={"/Home"} component={Home}/>   
       <Route path ={'/:id'} component = {Detail}/>
 

      
       </Switch> 

    </div>
    </BrowserRouter>
  );
}

export default App;
