import React, { Component } from 'react'
import styled from 'styled-components'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'

const StyledAbout = styled.div`
  background-color: #CBF7ED;
`
const CardContainer = styled.div`
  display: flex;
`
const HorizontalSpace = styled.span`
  margin: 50px;
`

class About extends Component {
  render () {
    return (
      <StyledAbout>
        <h1>About Page</h1>
        <p>I am an absolute baller!</p>
        <CardContainer>
          <Card>
            <CardContent>
              <h3>Professional</h3>
              <p>This is where the Professional bio will go.</p>
            </CardContent>
          </Card>
          <HorizontalSpace />
          <Card>
            <CardContent>
              <h3>Personal</h3>
              <p>This is where the Personal bio will go.</p>
            </CardContent>
          </Card>
        </CardContainer>
      </StyledAbout>
    )
  }
}

export default About
