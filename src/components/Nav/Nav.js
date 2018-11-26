import React, { Component } from 'react'
import Landing from '../Landing/Landing'
import About from '../About/About'
import Proof from '../Proof/Proof'
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'
import styled from 'styled-components'
import Button from '@material-ui/core/Button'

const StyledNav = styled.div`
  margin: 10px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  align-content: center;
  justify-content: center;
`
const HorizontalSpace = styled.span`
  margin: 15px;
`
const Link = styled(NavLink)`
  text-decoration: none;
  &.active {
  }
`
const NavElements = styled.div`
  justify-content: center;
`
const GradButton = styled(Button)`
background: linear-gradient(320deg, #072b61, #462c72, #3f2963, #462c72, #072b61);
background-size: 1000% 1000%;

-webkit-animation: AnimationName 37s ease infinite;
-moz-animation: AnimationName 37s ease infinite;
animation: AnimationName 37s ease infinite;

@-webkit-keyframes AnimationName {
    0%{background-position:0% 4%}
    50%{background-position:100% 97%}
    100%{background-position:0% 4%}
}
@-moz-keyframes AnimationName {
    0%{background-position:0% 4%}
    50%{background-position:100% 97%}
    100%{background-position:0% 4%}
}
@keyframes AnimationName { 
    0%{background-position:0% 4%}
    50%{background-position:100% 97%}
    100%{background-position:0% 4%}
}
`

class Nav extends Component {
  render () {
    return (
      <Router>
        <NavElements>
          <nav style={{ textDecoration: 'slategray' }}>
            <StyledNav>
              <Link to='/'>
                <GradButton
                  variant='contained'
                  style={{ backgroundColor: '#406E8E', color: 'white' }}
                >
                  Home
                </GradButton>
              </Link>
              <HorizontalSpace />
              <Link to='/about'>
                <GradButton
                  variant='contained'
                  style={{ backgroundColor: '#406E8E', color: 'white' }}
                >
                  About
                </GradButton>
              </Link>
              <HorizontalSpace />
              <Link to='/proof'>
                <GradButton
                  variant='contained'
                  style={{ backgroundColor: '#406E8E', color: 'white' }}
                >
                  Proof
                </GradButton>
              </Link>
            </StyledNav>
          </nav>

          <Route path='/' exact component={Landing} />
          <Route path='/about' exact component={About} />
          <Route path='/proof' exact component={Proof} />
        </NavElements>
      </Router>
    )
  }
}

export default Nav
