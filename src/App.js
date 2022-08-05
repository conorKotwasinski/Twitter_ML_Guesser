import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styled from "styled-components";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import "./styles.css";
const Styles = styled.div`
  .navbar {
    background: #fda085;
  }

  .App {
    height: 100vh;
    width: 100%;
    background-image: linear-gradient(120deg, #f6d365, #fda085);
  }

  a,
  .navbar-brand,
  .navbar-nav .nav-link {
    text-decoration: none;
    color: black;
    &:hover {
      color: white;
    }
  }
`;

export default function App() {
  return (
    <Styles>
      <div className="App">
        <Router>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
          </Switch>
        </Router>
      </div>
    </Styles>
  );
}
