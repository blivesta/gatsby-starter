import React from 'react'
import moment from 'moment'
import DocumentTitle from 'react-document-title'
import ReadNext from '../components/ReadNext'
import { config } from 'config'

class MarkdownWrapper extends React.Component {
  render () {
    const { route } = this.props
    const post = route.page.data

    return (
      <DocumentTitle title={`${post.title} | ${config.blogTitle}`}>
        <section className='Container Container--slim t-gutter markdown'>
          <h1>{post.title}</h1>
          <section dangerouslySetInnerHTML={{ __html: post.body }} />
          <em>
            Posted {moment(post.date).format('MMMM D, YYYY')}
          </em>
          <hr />
          <ReadNext post={post} pages={route.pages} />
        </section>
      </DocumentTitle>
    )
  }
}

MarkdownWrapper.propTypes = {
  route: React.PropTypes.object
}

export default MarkdownWrapper
