import React, { Component } from 'react'
import styled from 'styled-components'

const StyledEngraving = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: center;
  color: slategray;
  font-size: 45px;
`
const StyledSub = styled.h2`
  font-size: 25px;
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
