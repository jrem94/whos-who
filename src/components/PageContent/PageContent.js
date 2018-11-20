import React, { Component } from 'react'
import Nav from '../Nav/Nav'
import StyledPageContent from './StyledPageContent'

class PageContent extends Component {
  render () {
    return (
      <StyledPageContent>
        <Nav />
      </StyledPageContent>
    )
  }
}

export default PageContent
