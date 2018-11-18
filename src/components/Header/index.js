import React from 'react'
import { Link } from 'gatsby'

const Header = ({ siteTitle }) => (
  <div class="header">
    <div class="navMenu">
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'black',
            textDecoration: 'none',
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </div>
)

export default Header;