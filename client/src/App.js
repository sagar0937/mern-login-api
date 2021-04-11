import Navbar from "./components/Navbar";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Register from "./components/Register";
import Login from "./components/Login";
import PageNotFound from "./components/PageNotFound";

const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home}></Route>
        <Route path='/about' component={About}></Route>
        <Route path='/login' component={Login}></Route>
        <Route path='/contact' component={Contact}></Route>
        <Route path='/register' component={Register}></Route>
        <Route component={PageNotFound}></Route>
      </Switch>
    </>
  );
};

export default App;
