import React, { Component } from 'react'
import StyledApp from './StyledApp.js'
import Nav from './Nav/Nav.js'
import PictureFrame from './PictureFrame/PictureFrame.js'
import Engraving from './Engraving/Engraving.js'
import PageContent from './PageContent/PageContent.js'

class App extends Component {
  render () {
    return (
      <StyledApp className='App'>
        <Nav />
        <PictureFrame />
        <Engraving />
        <PageContent />
      </StyledApp>
    )
  }
}

export default App
