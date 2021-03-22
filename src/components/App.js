import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import theme from './UI/Theme';
import Login from './UI/Login';
import Users from './UI/Users';
import {Context} from './Context/Context';
import PrivateRoute from './Route/PrivateRoute'

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Context>
        <Switch>
          <Route path ='/' exact component={Login}/>
          <PrivateRoute exact path ='/users' component={Users} dd='ceva'/>
        </Switch>
        </Context>
      </ThemeProvider>
    </Router>  
  );
}

export default App;
