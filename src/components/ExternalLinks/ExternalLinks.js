import React, { Component } from 'react'
import styled from 'styled-components'
import Button from '@material-ui/core/Button'

const StyledExternalLinks = styled.div`
    text-decoration: none;
    justify-content: space-between
`

class ExternalLinks extends Component {
  render () {
    return (
      <div>
        <StyledExternalLinks>
          <a href='mailto:jrem94@live.com?Subject=Portfolio%20message'>
            <Button variant='contained' color='secondary'>Email</Button>
          </a>
          <a
            href='https://github.com/jrem94?tab=repositories'
            rel='noopener noreferrer'
            target='_blank'
          >
            <Button variant='contained' color='secondary'>GitHub</Button>
          </a>
          <a href='../../resume.pdf' download='Joshus Morris Resume.pdf'>
            <Button variant='contained' color='secondary'>Resume</Button>
          </a>
        </StyledExternalLinks>
      </div>
    )
  }
}

export default ExternalLinks
