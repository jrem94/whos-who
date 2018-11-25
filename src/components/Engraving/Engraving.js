import React, { Component } from 'react'
import styled from 'styled-components'

const StyledEngraving = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: center;
  color: white;
  font-size: 30px;
`
const StyledSub = styled.h4`
  font-size: 20px;
`

class Engraving extends Component {
  render () {
    return (
      <StyledEngraving>
        Joshua Morris
        <StyledSub>
          Software Developer
        </StyledSub>
      </StyledEngraving>
    )
  }
}

export default Engraving
