import React, { Component } from 'react'
import StyledApp from './StyledApp.js'
import PictureFrame from './PictureFrame/PictureFrame.js'
import Engraving from './Engraving/Engraving.js'
import PageContent from './PageContent/PageContent.js'

class App extends Component {
  render () {
    return (
      <StyledApp className='App'>
        <div>
          <PictureFrame />
          <Engraving />
          <PageContent />
        </div>
      </StyledApp>
    )
  }
}

export default App
