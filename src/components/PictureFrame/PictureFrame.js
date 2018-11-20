import React, { Component } from 'react'
import StyledPictureFrame from './StyledPictureFrame'

class PictureFrame extends Component {
  render () {
    return (
      <div className='picture'>
        <StyledPictureFrame
          src='../images/portfolio-img.jpg'
          alt='Joshua Morris'
        />
      </div>
    )
  }
}

export default PictureFrame
