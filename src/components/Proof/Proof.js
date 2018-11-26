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
const HorizontalSpace = styled.span`
  margin: 40px;
`
const CardContainer = styled.div`
  float: right;
  flex-direction: column;
`
const StyledUl = styled.ul`
  font-weight: bold;
`
const CardContainer2 = styled.div`
  margin: 10px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  align-content: center;
  justify-content: space-around;
`
const Justifier = styled.div`
  margin: 10px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  justify-content: space-around;
`
const Boldify = styled.p`
  font-weight: bold;
  font-size: 18px;
`

class Proof extends Component {
  render () {
    return (
      <StyledProof>
        <Justifier>
          <h1>Proof</h1>
          <Boldify>
            This is a list of my projects. Clicking the links will open up a new tab showing the GitHub respository that contains the code.
          </Boldify>
        </Justifier>
        <CardContainer>
          <Card>
            <CardContent style={{ fontSize: '20px' }}>
              All projects presented on this page were made <br />
              during my time at Fasttrack'd, and represent <br />
              my accomplishments throughout the course. <br />
            </CardContent>
          </Card>
        </CardContainer>
        <StyledUl>
          <li>
            <Anchor
              href='https://github.com/cooksystemsinc/js-assignment-quizler-jrem94'
              target='_blank'
            >
              Quizler{' '}
            </Anchor>
            {' '}
            - A quiz creating/taking CLI application built using NodeJs, Vorpal, and Inquisitor.
          </li>
          <VerticalSpace />
          <li>
            <Anchor
              href='https://github.com/cooksystemsinc/js-assessment-dev-duel-jrem94'
              target='_blank'
            >
              Dev-Duel{' '}
            </Anchor>
            {' '}
            - A web-based dueling application which utilizes GitHub's API, built using HTML, CSS, NodeJs, and JQuery.
          </li>
          <VerticalSpace />
          <li>
            <Anchor
              href='https://github.com/cooksystemsinc/java-assessment-smart-share-jrem94'
              target='_blank'
            >
              Smart Share{' '}
            </Anchor>
            {' '}
            - A command line interface database management system built using Java 8, JAXB, and PicoCLI.
          </li>
          <VerticalSpace />
          <li>
            <Anchor
              href='https://github.com/cooksystemsinc/social-media-assessment-jrem94'
              target='_blank'
            >
              Social Media Backend{' '}
            </Anchor>
            {' '}
            - A social media backend similar to Twitter built using Java 8, Spring, and Hibernate.
          </li>
        </StyledUl>
        <VerticalSpace />
        <VerticalSpace />
        <VerticalSpace />
        <small>
          My other non-cooksys related projects and respositories can be found by clicking on the "GitHub" link in the bottom navigation  bar.
        </small>
        <h2>What do I use?</h2>
        <CardContainer2>
          <Card style={{ padding: '25px' }}>
            <CardContent>
              <h3>Software</h3>
              <ul>
                <li>Visual Studio Code</li>
                <li>Exclipse</li>
                <li>Git</li>
                <li>GitHub</li>
                <li>Postman</li>
                <li>Console Emulator</li>
              </ul>
            </CardContent>
          </Card>
          <HorizontalSpace />
          <Card style={{ padding: '25px' }}>
            <CardContent>
              <h3>Languages</h3>
              <ul>
                <li>JavaScript (Node)</li>
                <li>C#</li>
                <li>Java 8</li>
                <li>HTML5</li>
                <li>CSS3</li>
                <li>Console Emulator</li>
              </ul>
            </CardContent>
          </Card>
          <HorizontalSpace />
          <Card style={{ padding: '25px' }}>
            <CardContent>
              <h3>Frame Works and Libraries</h3>
              <ul>
                <li>Spring</li>
                <li>JAXB</li>
                <li>Hibernate</li>
                <li>NodeJs</li>
                <li>JQuery</li>
                <li>React</li>
              </ul>
            </CardContent>
          </Card>
        </CardContainer2>
      </StyledProof>
    )
  }
}

export default Proof
