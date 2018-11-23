import React, { Component } from 'react'
import Landing from '../Landing/Landing'
import About from '../About/About'
import Proof from '../Proof/Proof'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import styled from 'styled-components'
import Button from '@material-ui/core/Button'

const StyledNav = styled.div`
  margin: 10px;
`
const HorizontalSpace = styled.span`
  margin: 10px;
`

class Nav extends Component {
  render () {
    return (
      <Router>
        <div>
          <nav style={{ textDecoration: 'slategray' }}>
            <StyledNav>
              <Link to='/' style={{ textDecoration: 'none' }}>
                <Button
                  variant='contained'
                  style={{ backgroundColor: '#406E8E' }}
                >
                  Home
                </Button>
              </Link>
              <HorizontalSpace />
              <Link to='/about' style={{ textDecoration: 'none' }}>
                <Button
                  variant='contained'
                  style={{ backgroundColor: '#406E8E' }}
                >
                  About
                </Button>
              </Link>
              <HorizontalSpace />
              <Link to='/proof' style={{ textDecoration: 'none' }}>
                <Button
                  variant='contained'
                  style={{ backgroundColor: '#406E8E' }}
                >
                  Proof
                </Button>
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
