import logo from './logo.svg';
import './App.css';
import Dashboard from './Screens/Analytics_Com/Dashboard';
import { Route, Switch } from 'react-router';
import Products from './Screens/Analytics_Com/Products';
import { BrowserRouter } from 'react-router-dom';
import Login_Signup from './Screens/Login_Signup/Login_Signup';

function App() {
  return (
    <BrowserRouter>
    <Switch>      
      <Route path='/products' component={Products} />
      <Route path='/Dashboard' exact component={Dashboard} />
      <Route path='/' exact component={Login_Signup} />
    </Switch>
    </BrowserRouter>
  );
}

export default App;
