import logo from './logo.svg';
import './App.css';
import AddressForm from './components/address-form/address-form.jsx'
import HomePage from './components/home-page/home-page'

import {
  BrowserRouter as Router,
  Switch,
  Route,Redirect
} from "react-router-dom"


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/"><HomePage/></Route>
          <Route exact path="/home"><HomePage/></Route>

          <Route exact path="/address-form"><AddressForm/></Route>
          <Route path = "/edit-contact/:id"><AddressForm/></Route>


        </Switch>
      </Router>    </div>
  );
}


export default App;
