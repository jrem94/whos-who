import React, { Component } from 'react'
import Nav from '../Nav/Nav'
import ExternalLinks from '../ExternalLinks/ExternalLinks'
import styled from 'styled-components'

const StyledPageContent = styled.div`
  background-color: #A2D3FF;
  display: flex;
  flex-direction: column;
  width: 95%;
  height: 95%;
  margin: 2.5%;
`

class PageContent extends Component {
  render () {
    return (
      <StyledPageContent>
        <Nav />
        <ExternalLinks />
      </StyledPageContent>
    )
  }
}

export default PageContent
