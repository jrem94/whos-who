import React, { Component } from 'react'
import styled from 'styled-components'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'

const StyledAbout = styled.div`
  background-color: #CBF7ED;
  padding: 10px;
`
const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
`
const HorizontalSpace = styled.span`
  margin: 40px;
`

class About extends Component {
  render () {
    return (
      <StyledAbout>
        <h1>About Page</h1>
        <p>
          Want to get to know me? Below you will find both my professional and personal biographies.
        </p>
        <CardContainer>
          <Card style={{ padding: '25px' }}>
            <CardContent>
              <h3>Professional</h3>
              <p>
                Growth is very important to me, and always has been.
                That's why no matter where I've worked or what the job was I always
                strived to excell - to set new standards, and make the overall
                quality or the product or the service I was proving better.
                During my time as a manager at Chick-Fil-A, I constantly analyzed
                and rewrote the my store's training manual and workflow. It wasn't
                enough to simply do my job, and meet corporate standards. I wanted
                to exceed them, and I wanted my team members to want the same.
                Through persistance, and constant examination of the store and myself
                I managed to create and instill a habit of high productivity
                and even higher professionalism. I carried that same energy and habit
                with me when I became a Field Supervisor for a small plumbing
                business, and I still carry that same flame today. As a software
                developer, I believe that it's not enough to simply "write code" and
                meet standards. It's about exceeding customer expectations, and
                walking the extra mile with my team in order to promote a courteous
                culture and a habit of exceptional productivity.
              </p>
            </CardContent>
          </Card>
          <HorizontalSpace />
          <Card style={{ padding: '25px' }}>
            <CardContent>
              <h3>Personal</h3>
              <p>
                I am a twenty-four year old husband and father of two. My two children -
                Kenzie and Rhonan - are some the most intelligent children I've ever met.
                Although that means I'm in big trouble later, for now it's fun to have an
                active role in teaching them about the world and to experience their
                wonder and excitment about life firsthand. My wife, Hannah, is the strongest
                person I know. She not only holds down the fort at home, she is also a
                highly compassionate person who truly cares for the well-being of others
                - even complete strangers. She is also very smart and down-to-earth which
                helps to balance out my "dreamer" personality. She and I are a package
                deal and wherever I go, she goes too. It has been a wonderful half-decade,
                and I'm just as eager for the next five years. Other than my family, I
                enjoy hosting and hanging out with close friends, and playing paintball
                when the budget allows. I also write as a hobby, and have even published
                a novel. My life is a wonderful mix of love, adventure, and creativity.
              </p>
            </CardContent>
          </Card>
        </CardContainer>
      </StyledAbout>
    )
  }
}

export default About
