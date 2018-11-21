import React, { Component } from 'react'
import Landing from '../Landing/Landing'
import About from '../About/About'
import Proof from '../Proof/Proof'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import styled from 'styled-components'
import Button from '@material-ui/core/Button'

const StyledNav = styled.div`
  text-decoration: none;
  justify-content: space-between
`

class Nav extends Component {
  render () {
    return (
      <Router>
        <div>
          <nav>
            <StyledNav>
              <Link to='/'>
                <Button variant='contained' color='secondary'>Home</Button>
              </Link>
              <Link to='/about'>
                <Button variant='contained' color='secondary'>About</Button>
              </Link>
              <Link to='/proof'>
                <Button variant='contained' color='secondary'>Proof</Button>
              </Link>
            </StyledNav>
          </nav>

          <Route path='/' exact component={Landing} />
          <Route path='/about' exact component={About} />
          <Route path='/proof' exact component={Proof} />
        </div>
      </Router>
    )
  }
}

export default Nav
