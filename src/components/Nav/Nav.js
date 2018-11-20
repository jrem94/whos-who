import React, { Component } from 'react'
import Landing from '../Landing/Landing'
import About from '../About/About'
import Proof from '../Proof/Proof'
import StyledNav from './StyledNav'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

class Nav extends Component {
  render () {
    return (
      <Router>
        <div>
          <nav>
            <StyledNav>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/about'>About</Link>
              </li>
              <li>
                <Link to='/proof'>Proof</Link>
              </li>
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
