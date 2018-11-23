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
        <p>
          This is a list of my projects. Clicking the links will open up a new tab showing the GitHub respository that contains the code.
        </p>
        <ul>
          <li>
            <Anchor href='https://github.com/cooksystemsinc/js-assignment-quizler-jrem94'>
              Quizler{' '}
            </Anchor>
            {' '}
            - A quiz creating/taking CLI application built using NodeJs, Vorpal, and Inquisitor.
          </li>
          <li>
            <Anchor href='https://github.com/cooksystemsinc/js-assessment-dev-duel-jrem94'>
              Dev-Duel{' '}
            </Anchor>
            {' '}
            - A web-based dueling application which utilizes GitHub's API, built using HTML, CSS, NodeJs, and JQuery.
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
