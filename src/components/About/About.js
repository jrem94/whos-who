import React, { Component } from 'react'
import styled from 'styled-components'

const StyledAbout = styled.div`
  background-color: yellowgreen;
`

class About extends Component {
  render () {
    return (
      <StyledAbout>
        <h1>About Page</h1>
        <p>I am an absolute baller!</p>
      </StyledAbout>
    )
  }
}

export default About
