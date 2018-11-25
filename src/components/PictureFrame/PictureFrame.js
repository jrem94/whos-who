import React, { Component } from 'react'
import styled from 'styled-components'

const StyledPictureFrame = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  margin: 20px;
  border: 2px solid slategray;
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
