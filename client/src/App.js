import Navbar from "./components/Navbar";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Register from "./components/Register";
import Login from "./components/Login";
import PageNotFound from "./components/PageNotFound";
import { Logout } from "./components/Logout";
import { createContext, useReducer } from "react";
import { userReducer, initialState } from "./reducer/userReducer";

export const userContext = createContext();

const RoutingRender = () => {
  return (
    <>
      <Switch>
        <Route exact path='/' component={Home}></Route>
        <Route path='/about' component={About}></Route>
        <Route path='/login' component={Login}></Route>
        <Route path='/contact' component={Contact}></Route>
        <Route path='/register' component={Register}></Route>
        <Route path='/logout' component={Logout}></Route>
        <Route component={PageNotFound}></Route>
      </Switch>
    </>
  );
};
const App = () => {
  //useReducer
  const [state, dispatch] = useReducer(userReducer, initialState);

  return (
    <>
      <userContext.Provider value={{ state, dispatch }}>
        <Navbar />
        <RoutingRender />
      </userContext.Provider>
    </>
  );
};

export default App;
