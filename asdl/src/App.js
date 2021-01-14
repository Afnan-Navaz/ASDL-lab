import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Input from './pages/Input';
import Home from './pages/Home';
import Employee from './pages/Employee';
import EmpDetails from './pages/EmpDetails';
import Admin from './pages/Admin';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Input} />
          <Route path="/home" component={Home} />
          <Route exact path="/employee" component={Employee} />
          <Route path="/employee/:id" component={EmpDetails} />
          <Route path="/admin" component={Admin} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
