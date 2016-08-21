import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'

class Nav extends React.Component {
  render () {
    return (
      <nav className='Container t-gutter'>
        <ul className='ListInline'>
          <li>
            <Link to={prefixLink('/about/')}>
              About
            </Link>
          </li>
          <li>
            <Link to={prefixLink('/blog/')}>
              Blog
            </Link>
          </li>
          <li>
            <Link to={prefixLink('/repository/')}>
              Repository
            </Link>
          </li>
        </ul>
      </nav>
    )
  }
}

export default Nav
