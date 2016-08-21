import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

class Template extends React.Component {
  render () {
    const { location, children } = this.props
    return (
      <div className=''>
        <Header location={location} />
        {children}
        <Footer />
      </div>
    )
  }
}

Template.propTypes = {
  children: React.PropTypes.any,
  location: React.PropTypes.object
}

export default Template
