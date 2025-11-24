import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import CalendarPage from './components/CalendarPage';
import AboutPage from './components/AboutPage';
import Resources from './components/Resources';
import ScholarShpe from './components/ScholarShpe';
import Membershpe from './components/Membershpe';
import OurTeam from './components/OurTeam.jsx';
import Signup from './components/SignUp';
import ForgotPassword from './components/ForgotPassword';



function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/signUp" component={Signup} />
        <Route path="/ForgotPassword" component={ForgotPassword} />
        <Route path="/calendar" component={CalendarPage} />
        <Route path="/about" component={AboutPage} />
        <Route exact path="/resources" component={Resources} /> 
        <Route path="/resources/scholarshpe" component={ScholarShpe} />
        <Route path="/membershpe" component={Membershpe} />
        <Route path="/ourTeam" component={OurTeam} />

      </Switch>
    </Router>
  );
}

export default App;
