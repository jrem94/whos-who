import React, { Component } from 'react'
import styled from 'styled-components'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'

const StyledProof = styled.div`
  background-color: #CBF7ED;
  padding: 20px;
`
const Anchor = styled.a`
  text-decoration: none;
`
const VerticalSpace = styled.div`
  margin: 10px;
`
const CardContainer = styled.div`
  float: right;
  flex-direction: column;
`

class Proof extends Component {
  render () {
    return (
      <StyledProof>
        <h1>Proof</h1>
        <p>
          This is a list of my projects. Clicking the links will open up a new tab showing the GitHub respository that contains the code.
        </p>
        <CardContainer>
          <Card>
            <CardContent style={{ fontSize: '20px' }}>
              All projects presented on this page were made <br />
              during my time at Fasttrack'd, and represent <br />
              my accomplishments throughout the course. <br />
            </CardContent>
          </Card>
        </CardContainer>
        <ul>
          <li>
            <Anchor href='https://github.com/cooksystemsinc/js-assignment-quizler-jrem94'>
              Quizler{' '}
            </Anchor>
            {' '}
            - A quiz creating/taking CLI application built using NodeJs, Vorpal, and Inquisitor.
          </li>
          <VerticalSpace />
          <li>
            <Anchor href='https://github.com/cooksystemsinc/js-assessment-dev-duel-jrem94'>
              Dev-Duel{' '}
            </Anchor>
            {' '}
            - A web-based dueling application which utilizes GitHub's API, built using HTML, CSS, NodeJs, and JQuery.
          </li>
          <VerticalSpace />
          <li>
            <Anchor href='https://github.com/cooksystemsinc/java-assessment-smart-share-jrem94'>
              Smart Share{' '}
            </Anchor>
            {' '}
            - A command line interface database management system built using Java 8, JAXB, and PicoCLI.
          </li>
          <VerticalSpace />
          <li>
            <Anchor href='https://github.com/cooksystemsinc/social-media-assessment-jrem94'>
              Social Media Backend{' '}
            </Anchor>
            {' '}
            - A social media backend similar to Twitter built using Java 8, Spring, and Hibernate.
          </li>
          <VerticalSpace />
          <VerticalSpace />
          <VerticalSpace />
        </ul>
      </StyledProof>
    )
  }
}

export default Proof
