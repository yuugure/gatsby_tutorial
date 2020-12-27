import React from "react"
import styled from 'styled-components'

const Container = styled.footer`
  marginTop: '2rem';
  text-align: center;
`

const Footer = () => (
  <Container>
    © {new Date().getFullYear()}, Yuuichi
  </Container>
)

export default Footer