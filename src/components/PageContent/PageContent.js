import React, { Component } from 'react'
import Nav from '../Nav/Nav'
import StyledPageContent from './StyledPageContent'
import ExternalLinks from '../ExternalLinks/ExternalLinks'

class PageContent extends Component {
  render () {
    return (
      <StyledPageContent>
        <Nav />
        <hr />
        <ExternalLinks />
      </StyledPageContent>
    )
  }
}

export default PageContent
