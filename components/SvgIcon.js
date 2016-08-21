import React from 'react'

class SvgIcon extends React.Component {

  static get propTypes () {
    return {
      className: React.PropTypes.string,
      iconName: React.PropTypes.string,
      viewBox: React.PropTypes.string
    }
  }

  static get defaultProps () {
    return {
      className: 'icon',
      iconName: '',
      viewBox: '0 0 32 32'
    }
  }

  render () {
    const useTag = `<use xlink:href=${this.props.iconName} />`
    return (
      <svg
        viewBox={this.props.viewBox}
        className={this.props.className}
        dangerouslySetInnerHTML={{__html: useTag}}
      />
    )
  }
}

export default SvgIcon
