import React, { Component } from 'react'
import styled from 'styled-components'

const StyledEngraving = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: slategray;
`

class Engraving extends Component {
  render () {
    return (
      <StyledEngraving>
        <h2>Joshua Morris</h2>
        <h3>Software Developer</h3>
      </StyledEngraving>
    )
  }
}

export default Engraving
