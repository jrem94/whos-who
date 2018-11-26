import React, { Component } from 'react'
import styled from 'styled-components'

const StyledPictureFrame = styled.img`
  width: 175px;
  height: 175px;
  border-radius: 50%;
  margin: 10px;
  border: 5px solid slategray;
`

class PictureFrame extends Component {
  render () {
    return (
      <StyledPictureFrame
        src='../images/portfolio-img.jpg'
        alt='Joshua Morris'
      />
    )
  }
}

export default PictureFrame
