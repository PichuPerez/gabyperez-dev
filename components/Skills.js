import React from 'react'
import styled from 'styled-components'
import keyframes from 'styled-components'
import skillImg from '../pages/'

const MySkills = styled.p`
  padding-top: 80px;
  font-size: 80px;
  text-align: center;
`
const SkillImg = styled.div`
  height: 100vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(${props => props.img});
  object-fit: cover;
`

const SkillsContainer = styled.div`
  margin: auto;
  margin-top: 60px;
  padding-top: 50px;
  height: 330px;
  width: 570px;
`

const Skill = styled.img`
  width: 70px;
  height: 70px;
  margin: 30px;
  transition: all 0.4s ease-in-out;
  &:hover {
    transform: scale(3);
  }
`
const Credit = styled.p`
  font-size: 15px;
  color: white;
`

const Intro = () => {
  return (
    <div className="row">
      <div className="col-md-12">
        <SkillImg img="/jessy-smith-zFOm6KzA-7g-unsplash.jpg">
          <MySkills>My Skills</MySkills>
          <SkillsContainer>
            <Skill
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1116997/javascript.svg"
              alt="JS Logo"
            ></Skill>
            <Skill src="https://graphql.org/img/logo.svg" alt="JS Logo"></Skill>
            <Skill
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K"
              alt="React Logo"
            ></Skill>
            <Skill
              src="https://nodejs.org/static/images/logo.svg"
              alt="nodejs Logo"
            ></Skill>
            <Skill
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1116997/git.png"
              alt="git Logo"
            ></Skill>
            <Skill
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1116997/npm.svg"
              alt="npm Logo"
            ></Skill>
            <Skill
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1116997/github-octocat.svg"
              alt="Github Logo"
            ></Skill>
            <Skill
              src="https://vuejs.org/images/logo.png"
              alt="Github Logo"
            ></Skill>
          </SkillsContainer>
          <Credit>Photo by Jessy Smith on Unsplash</Credit>
        </SkillImg>
      </div>
    </div>
  )
}

export default Intro
