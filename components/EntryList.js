import React from 'react'
import { Link } from 'react-router'
import sortBy from 'lodash/sortBy'
import { prefixLink } from 'gatsby-helpers'
import access from 'safe-access'
import include from 'underscore.string/include'

class EntyList extends React.Component {
  static get propTypes () {
    return {
      pages: React.PropTypes.array
    }
  }

  render () {
    const pageLinks = []
    const sortedPages = sortBy(this.props.pages, (page) =>
      access(page, 'data.date')
    ).reverse()
    sortedPages.forEach((page) => {
      if (access(page, 'file.ext') === 'md' && !include(page.path, '/404')) {
        const title = access(page, 'data.title') || page.path
        pageLinks.push(
          <li key={page.path}>
            <Link to={prefixLink(page.path)}>{title}</Link>
          </li>
        )
      }
    })
    return (
      <ul className='List'>
        {pageLinks}
      </ul>
    )
  }
}

export default EntyList
