import React from 'react'
import { Route, Switch, HashRouter } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Navbar from './components/Navbar/index';
import Footer from './components/Footer';
import styled from 'styled-components';


const App = () => {
  return (
    <HashRouter>
      <Container>
        <Navbar />
        <Switch>
          <Route path="/" exact component={LandingPage} />
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
