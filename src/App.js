import React from 'react'
import { Route, Switch, HashRouter } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import About from './pages/About';
import Navbar from './components/Navbar/index';
import Footer from './components/Footer';
import BloodKnowledge from './pages/BloodKnowledge';
import styled from 'styled-components';
import PlateletKnowledge from './pages/PlateletKnowledge'
import ThalMajor from './pages/ThalMajor'
import ThalMinor from './pages/ThalMinor'

const App = () => {
  return (
    <HashRouter>
      <Container>
        <Navbar />
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route path="/about" exact component={About} />
          <Route path="/blood-donation" exact component={BloodKnowledge} />
          <Route path="/platelet-donation" exact component={PlateletKnowledge} />
          <Route path="/thallasaemia-major" exact component={ThalMajor} />
          <Route path="/thallasaemia-minor" exact component={ThalMinor} />
        </Switch>
        <Footer />
      </Container>
    </HashRouter>
  )
}

export default App

const Container = styled.div`
  min-height:100vh;
  display:flex;
  flex-direction:column;
  justify-content:space-between;
`
