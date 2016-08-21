import React from 'react'
import DocumentTitle from 'react-document-title'
import { config } from 'config'
import EntryList from '../../components/EntryList'

class EntryIndex extends React.Component {
  static get propTypes () {
    return {
      route: React.PropTypes.object
    }
  }

  render () {
    return (
      <DocumentTitle title={config.siteTitle}>
        <section className='Container Container--slim t-gutter'>
          <h1>Blog</h1>
          <EntryList pages={this.props.route.pages} />
        </section>
      </DocumentTitle>
    )
  }
}

export default EntryIndex
