import React from 'react'
import DocumentTitle from 'react-document-title'
import { config } from 'config'
import request from 'superagent'
import RepoList from '../../components/RepoList'

class Repo extends React.Component {
  constructor (props) {
    super(props)
    this._get = this._get.bind(this)
    this.state = {
      data: {}
    }
  }

  componentDidMount () {
    this._get()
  }

  _get () {
    const URL = 'https://api.github.com/search/repositories?q=user:blivesta'
    request
      .get(URL)
      .end(function a (err, res) {
        if (err) throw err
        this.setState({
          data: res.body
        })
      }.bind(this))
  }

  render () {
    return (
      <DocumentTitle title={`${config.siteTitle} | React.js components`}>
        <section className='Container Container--slim t-gutter t-ptLg t-mbGt'>
          <h1>GitHub Repository</h1>
          <RepoList data={this.state.data.items} />
        </section>
      </DocumentTitle>
    )
  }
}

export default Repo
