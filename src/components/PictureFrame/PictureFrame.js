import React, { Component } from 'react'
import StyledPictureFrame from './StyledPictureFrame'

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
