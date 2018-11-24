import React, { Component } from 'react'
import styled from 'styled-components'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'

const StyledLanding = styled.div`
  background-color: #CBF7ED;
  padding: 10px;
`
const StyledNav = styled.nav`
  display: flex;
  flex-direction: row;
`
const HorizontalSpace = styled.span`
  margin: 40px;
`
const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
`

class Landing extends Component {
  render () {
    return (
      <StyledLanding>
        <h1>Home</h1>
        <p>
          Hello and welcome! This is my portfolio site, made with React! Feel free to navigate using the
          {' '}
          top navigation bar, or if you need any additional information or would like to contact me
          directly please reference the navigation bar at the bottom of the page. Thank you, and enjoy
          your visit!
        </p>
        <br />
        <p>Please select which you would like to do: </p>
        <StyledNav>
          <Link to='/about' style={{ textDecoration: 'none' }}>
            <Button variant='contained' style={{ backgroundColor: '#406E8E' }}>
              Learn about me
            </Button>
          </Link>
          <HorizontalSpace />
          <Link to='/proof' style={{ textDecoration: 'none' }}>
            <Button variant='contained' style={{ backgroundColor: '#406E8E' }}>
              See what I've done
            </Button>
          </Link>
        </StyledNav>
      </StyledLanding>
    )
  }
}

export default Landing
