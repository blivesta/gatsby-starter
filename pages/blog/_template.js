import React from 'react'

class EntryWrapper extends React.Component {
  static get propTypes () {
    return {
      children: React.PropTypes.any
    }
  }

  render () {
    const { children } = this.props
    return (
      <div>
        {children}
      </div>
    )
  }
}

export default EntryWrapper
