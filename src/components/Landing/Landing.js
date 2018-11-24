import React, { Component } from 'react'
import styled from 'styled-components'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'

const StyledLanding = styled.div`
  background-color: #CBF7ED;
  padding: 20px;
`
const StyledNav = styled.nav`
  display: flex;
  flex-direction: row;
`
const HorizontalSpace = styled.span`
  margin: 40px;
`
const CardContainer = styled.div`
  float: right;
  flex-direction: column;
`
const VerticalSpace = styled.div`
  margin: 20px;
`

class Landing extends Component {
  render () {
    return (
      <StyledLanding>
        <h1>Home</h1>
        <p>
          Hello and welcome! This is my portfolio site, made with React! Feel free to navigate using the
          {' '}
          top navigation bar,<br />
          or if you need any additional information or would like to contact me
          directly please reference the navigation
          {' '}
          <br />
          {' '}
          bar at the bottom of the page. Thank you, and enjoy
          your visit!
        </p>
        <CardContainer>
          <Card>
            <CardContent>
              "No one in the brief history of <br />
              computing has ever written a <br />
              piece of perfect software. It's <br />
              unlikely that you'll be the first."<br />
              - Andy Hunt
            </CardContent>
          </Card>
        </CardContainer>
        <br />
        <div>
          <p>Please select which you would like to do: </p>
          <VerticalSpace />
          <VerticalSpace />
          <VerticalSpace />
          <StyledNav>
            <Link to='/about' style={{ textDecoration: 'none' }}>
              <Button
                variant='contained'
                style={{ backgroundColor: '#406E8E', color: 'white' }}
              >
                Learn about me
              </Button>
            </Link>
            <HorizontalSpace />
            <Link to='/proof' style={{ textDecoration: 'none' }}>
              <Button
                variant='contained'
                style={{ backgroundColor: '#406E8E', color: 'white' }}
              >
                See what I've done
              </Button>
            </Link>
          </StyledNav>
        </div>
      </StyledLanding>
    )
  }
}

export default Landing
