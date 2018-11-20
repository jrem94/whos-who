import React, { Component } from 'react'
import StyledExternalLinks from './StyledExternalLinks'

class ExternalLinks extends Component {
  render () {
    return (
      <div>
        <StyledExternalLinks>
          <li>
            <a href='mailto:jrem94@live.com?Subject=Portfolio%20message'>
              Email
            </a>
            <a
              href='https://github.com/jrem94?tab=repositories'
              rel='noopener noreferrer'
              target='_blank'
            >
              GitHub
            </a>
            <a href='../../resume.pdf' download='Joshus Morris Resume.pdf'>
              Resume
            </a>
          </li>
        </StyledExternalLinks>
      </div>
    )
  }
}

export default ExternalLinks
