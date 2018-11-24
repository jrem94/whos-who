import React, { Component } from 'react'
import styled from 'styled-components'
import Button from '@material-ui/core/Button'

const StyledExternalLinks = styled.div`
    margin: 10px;
`
const HorizontalSpace = styled.span`
  margin: 10px;
`
const A = styled.a`
  text-decoration: none;
`

class ExternalLinks extends Component {
  render () {
    return (
      <nav style={{ textDecoration: 'slategray' }}>
        <StyledExternalLinks>
          <A href='mailto:jrem94@live.com?Subject=Portfolio%20message'>
            <Button
              variant='contained'
              style={{ backgroundColor: '#406E8E', color: 'white' }}
            >
              Email
            </Button>
          </A>
          <HorizontalSpace />
          <A
            href='https://github.com/jrem94?tab=repositories'
            rel='noopener noreferrer'
            target='_blank'
          >
            <Button
              variant='contained'
              style={{ backgroundColor: '#406E8E', color: 'white' }}
            >
              GitHub
            </Button>
          </A>
          <HorizontalSpace />
          <A href='../../resume.pdf' download='Joshus Morris Resume.pdf'>
            <Button
              variant='contained'
              style={{ backgroundColor: '#406E8E', color: 'white' }}
            >
              Resume
            </Button>
          </A>
        </StyledExternalLinks>
      </nav>
    )
  }
}

export default ExternalLinks
