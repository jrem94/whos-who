import React, { Component } from 'react'
import styled from 'styled-components'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import { Route } from 'react-router-dom'
import PictureFrame from '../PictureFrame/PictureFrame.js'

const StyledLanding = styled.div`
  background-color: #CBF7ED;
  padding: 80px;
`
const StyledNav = styled.nav`
  margin: 10px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  align-content: center;
  justify-content: space-around;
`
const HorizontalSpace = styled.span`
  margin: 40px;
`
const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2%;
`
const VerticalSpace = styled.div`
  margin: 20px;
`
const PicDiv = styled.div`
  margin: 10px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  align-content: center;
  justify-content: space-around;
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
const GradButton = styled(Button)`
background: linear-gradient(320deg, #072b61, #462c72, #3f2963, #462c72, #072b61);
background-size: 1000% 1000%;

-webkit-animation: AnimationName 37s ease infinite;
-moz-animation: AnimationName 37s ease infinite;
animation: AnimationName 37s ease infinite;

@-webkit-keyframes AnimationName {
    0%{background-position:0% 4%}
    50%{background-position:100% 97%}
    100%{background-position:0% 4%}
}
@-moz-keyframes AnimationName {
    0%{background-position:0% 4%}
    50%{background-position:100% 97%}
    100%{background-position:0% 4%}
}
@keyframes AnimationName { 
    0%{background-position:0% 4%}
    50%{background-position:100% 97%}
    100%{background-position:0% 4%}
}
`

class Landing extends Component {
  render () {
    return (
      <StyledLanding>
        <CardContainer2>
          <h1>Home</h1>
        </CardContainer2>
        <CardContainer2>
          <CardContainer>
            <Card>
              <CardContent style={{ fontSize: '20px' }}>
                "Good design adds value faster <br />
                than it adds cost." <br />
                - Thomas C. Gale
              </CardContent>
            </Card>
          </CardContainer>
          <CardContainer>
            <Card>
              <CardContent>
                <PicDiv>
                  <Route path='/' exact component={PictureFrame} />
                </PicDiv>

                <p style={{ fontSize: '18' }}>
                  Hello and welcome! I'm Joshua Morris his is my portfolio site.
                  {' '}
                  <br />
                  Feel free to navigate using the top navigation bar,<br />
                  or if you need any additional information or would like to
                  {' '}
                  <br />
                  contact me directly please reference the navigation<br />
                  bar at the bottom of the page. Thank you, and enjoy your visit!
                </p>
                <div>
                  <p>Please select which you would like to do: </p>
                  <VerticalSpace />
                  <StyledNav>
                    <Link to='/about' style={{ textDecoration: 'none' }}>
                      <GradButton
                        variant='contained'
                        style={{ backgroundColor: '#406E8E', color: 'white' }}
                      >
                        Learn about me
                      </GradButton>
                    </Link>
                    <HorizontalSpace />
                    <Link to='/proof' style={{ textDecoration: 'none' }}>
                      <GradButton
                        variant='contained'
                        style={{ backgroundColor: '#406E8E', color: 'white' }}
                      >
                        See what I've done
                      </GradButton>
                    </Link>
                  </StyledNav>
                </div>
              </CardContent>
            </Card>
          </CardContainer>
          <CardContainer>
            <Card>
              <CardContent style={{ fontSize: '20px' }}>
                "No one in the brief history of <br />
                computing has ever written a <br />
                piece of perfect software. It's <br />
                unlikely that you'll be the first."<br />
                - Andy Hunt
              </CardContent>
            </Card>
          </CardContainer>
        </CardContainer2>
        <VerticalSpace />
      </StyledLanding>
    )
  }
}

export default Landing
