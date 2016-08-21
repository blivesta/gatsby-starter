import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import { config } from 'config'
import Nav from './Nav'

class Header extends React.Component {
  static get propTypes () {
    return {
      location: React.PropTypes.object,
      route: React.PropTypes.object
    }
  }

  render () {
    let innerHtml
    if (this.props.location.pathname === prefixLink('/')) {
      innerHtml = (
        <div className='Container Container--slim t-gutter t-ptGt t-pbGt'>
          <h1 className='t-fontGt t-ptGt'>
            <Link to={prefixLink('/')}>
              {config.siteTitle}
            </Link>
          </h1>
          <h2 className='t-mbMd'>{config.description}</h2>

          <Nav />
        </div>
      )
    } else {
      innerHtml = (
        <div className='Container Container--slim t-gutter'>
          <h3 className='t-mbMi'>
            <Link to={prefixLink('/')}>
              {config.siteTitle}
            </Link>
          </h3>
          <h4 className='t-fontXs t-mbMd t-mt0'>{config.description}</h4>
          <Nav />
        </div>
      )
    }

    return (
      <header>
        {innerHtml}
      </header>
    )
  }
}

export default Header
