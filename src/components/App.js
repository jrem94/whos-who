import React, { Component } from 'react'
import PictureFrame from './PictureFrame/PictureFrame.js'
import Engraving from './Engraving/Engraving.js'
import PageContent from './PageContent/PageContent.js'
import styled from 'styled-components'

const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: linear-gradient(to right bottom, #051937, #071e3f, #0a2348, #0d2850, #102d59);
  width: 98%;
  margin: 0 1%;
`

class App extends Component {
  render () {
    return (
      <StyledApp className='App'>
        <PictureFrame />
        <Engraving />
        <PageContent />
      </StyledApp>
    )
  }
}

export default App
