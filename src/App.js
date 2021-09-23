import './App.css';
import { connect } from 'react-redux';
import RestaurantList from './modules/restaurantList/RestaurantList';
import Login from './modules/login/Login';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

function App(props) {
  const {
    userInfo
  } = props;

  return (
    <Router>
      <Switch>
        <Route exact={true} path="/">
          {!userInfo &&
            <Login />
          }
          {userInfo &&
           <Redirect to={{pathname: '/home'}} />
          }
        </Route>
        <Route path="/home">
              <RestaurantList />
            </Route>
      </Switch>
    </Router>
  );
}

export default connect(
  store => ({
      userInfo: store.login.userInfo,
  }),
  null
)(App);
