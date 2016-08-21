import React from 'react'

class RepoList extends React.Component {
  static get propTypes () {
    return {
      data: React.PropTypes.array
    }
  }

  constructor (props) {
    super(props)
    this.state = {
      data: this.props.data
    }
  }

  render () {
    let dom
    if (this.props.data !== undefined) {
      dom = (
        this.props.data.map((item) => {
          return (
            <div key={item.name}>
              <h2>{item.name}</h2>
              <p>{item.description}</p>
            </div>
          )
        })
      )
    }
    return (
      <section>
        {dom}
      </section>
    )
  }
}

export default RepoList
