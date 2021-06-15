import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Propiedades from "./pages/Propiedades";
import Error404 from "./pages/Error404";
import Home from "./pages/Home";
import Layout from "./components/Layout";
import Propiedad from "./pages/Propiedad";
import Login from "./pages/Login";


const App = () => {
  return (
    <>
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/propiedades" component={Propiedades} />
            <Route exact path="/propiedad/:id" component={Propiedad} />
            <Route component={Error404} />
          </Switch>
        </Layout>
      </Router>
    </>
  );
};

export default App;
