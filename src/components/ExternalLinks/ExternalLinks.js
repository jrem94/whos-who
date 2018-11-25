import React, { Component } from 'react'
import styled from 'styled-components'
import Button from '@material-ui/core/Button'

const StyledExternalLinks = styled.div`
    margin: 10px;
`
const HorizontalSpace = styled.span`
  margin: 15px;
`
const A = styled.a`
  text-decoration: none;
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

class ExternalLinks extends Component {
  render () {
    return (
      <nav style={{ textDecoration: 'slategray' }}>
        <StyledExternalLinks>
          <A href='mailto:jrem94@live.com?Subject=Portfolio%20message'>
            <GradButton
              variant='contained'
              style={{ backgroundColor: '#406E8E', color: 'white' }}
            >
              Email
            </GradButton>
          </A>
          <HorizontalSpace />
          <A
            href='https://github.com/jrem94?tab=repositories'
            rel='noopener noreferrer'
            target='_blank'
          >
            <GradButton
              variant='contained'
              style={{ backgroundColor: '#406E8E', color: 'white' }}
            >
              GitHub
            </GradButton>
          </A>
          <HorizontalSpace />
          <A href='../../resume.pdf' download='Joshus Morris Resume.pdf'>
            <GradButton
              variant='contained'
              style={{ backgroundColor: '#406E8E', color: 'white' }}
            >
              Resume
            </GradButton>
          </A>
        </StyledExternalLinks>
      </nav>
    )
  }
}

export default ExternalLinks
