import React, { Component } from 'react'
import styled from 'styled-components'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'

const StyledLanding = styled.div`
  background-color: #CBF7ED;
`

class Landing extends Component {
  render () {
    return (
      <StyledLanding>
        <h1>Home</h1>
        <p>Hello and welcome to my portfolio!</p>
        <br />
        <p>Please select which you would like to do: </p>
        <nav>
          <Link to='/about' style={{ textDecoration: 'none' }}>
            <Button variant='contained' style={{ backgroundColor: '#406E8E' }}>
              Learn about me
            </Button>
          </Link>
          <Link to='/proof' style={{ textDecoration: 'none' }}>
            <Button variant='contained' style={{ backgroundColor: '#406E8E' }}>
              See what I've done
            </Button>
          </Link>
        </nav>
      </StyledLanding>
    )
  }
}

export default Landing
