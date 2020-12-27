import React from "react"
import styled from 'styled-components'
import Profile from "../assets/profile.svg";

const HeroSection = styled.section`
  background: white;
  margin-bottom: 1.45rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  text-align: center;
`

const Column = styled.div`
  width: 100%;
  @media (min-width: 1024px) {
    width: 50%;
  }
`

const ProfileImg = styled(Profile)`
  width: 100%;
  height: 100%;
`

const SkillsButton = styled.button`
  color: white;
  width: 150px;
  height: 60px;
  border-radius: 10px;
  background-color: blue;
  border-color: none;
  border: none;
  outline: none;
`

const Hero = () => (
  <HeroSection>
    <Column>
      <ProfileImg />
    </Column>
    <Column>
      <SkillsButton>My Skills</SkillsButton>
    </Column>
  </HeroSection>
)

export default Hero
