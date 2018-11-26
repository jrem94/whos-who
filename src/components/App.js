import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import PictureFrame from './PictureFrame/PictureFrame.js'
import Engraving from './Engraving/Engraving.js'
import PageContent from './PageContent/PageContent.js'
import styled from 'styled-components'

const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(320deg, #072b61, #462c72, #3f2963, #462c72, #072b61);
background-size: 1000% 1000%;

-webkit-animation: AnimationName 37s ease infinite;
-moz-animation: AnimationName 37s ease infinite;
animation: AnimationName 37s ease infinite;

@-webkit-keyframes AnimationName {
    0%{background-position:0% 4%}
    50%{background-position:100% 97%}
    100%{background-position:0% 4%}
}
@-moz-keyframes AnimationName {
    0%{background-position:0% 4%}
    50%{background-position:100% 97%}
    100%{background-position:0% 4%}
}
@keyframes AnimationName { 
    0%{background-position:0% 4%}
    50%{background-position:100% 97%}
    100%{background-position:0% 4%}
}
  width: 98%;
  margin: 0 1%;
`

class App extends Component {
  state = {
    isHidden: false
  }

  render () {
    return (
      <StyledApp className='App'>
        <Route path='/' exact component={PictureFrame} />
        <Engraving />
        <PageContent />
      </StyledApp>
    )
  }
}

export default App
