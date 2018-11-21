import React, { Component } from 'react'
import PictureFrame from './PictureFrame/PictureFrame.js'
import Engraving from './Engraving/Engraving.js'
import PageContent from './PageContent/PageContent.js'
import styled from 'styled-components'

const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: lightseagreen;
`

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
