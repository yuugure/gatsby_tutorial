import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import styled from 'styled-components'

const HeaderStyle = styled.header`
  background: "white";
  marginBottom: "1.45rem";
`
const SiteTitle = styled.div`
  margin: 0 auto;
  maxWidth: 960;
`

const Home = styled.h1`
  padding: 0 1.5rem;
`

const Header = ({ siteTitle }) => (
  <HeaderStyle>
    <SiteTitle>
      <Home>
        <Link
          to="/"
          style={{
            color: `gray`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </Home>
    </SiteTitle>
  </HeaderStyle>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
