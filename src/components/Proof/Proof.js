import React, { Component } from 'react'
import styled from 'styled-components'

const StyledProof = styled.div`
  background-color: #CBF7ED;
`
const Anchor = styled.a`
  text-decoration: none;
`

class Proof extends Component {
  render () {
    return (
      <StyledProof>
        <h1>Proof</h1>
        <p>Awesome projects go here!</p>
        <ul>
          <li>
            <Anchor href='http://github.com'>Project </Anchor>
            {' '}
            - This is the desciption of the project.
          </li>
          <li>
            <Anchor href='http://github.com'>Project </Anchor>
            {' '}
            - This is the desciption of the project.
          </li>
          <li>
            <Anchor href='http://github.com'>Project </Anchor>
            {' '}
            - This is the desciption of the project.
          </li>
          <li>
            <Anchor href='http://github.com'>Project </Anchor>
            {' '}
            - This is the desciption of the project.
          </li>
        </ul>
      </StyledProof>
    )
  }
}

export default Proof
