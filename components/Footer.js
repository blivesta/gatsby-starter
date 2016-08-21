import React from 'react'
import { config } from 'config'
import SvgIcon from './SvgIcon'

class Footer extends React.Component {
  render () {
    return (
      <div className='Container Container--slim t-gutter t-ptHg t-pbMd'>
        <p>
          <a href={config.githubUrl} target='_blank'>
            <SvgIcon
              iconName='#icon-github'
              className='icon'
            />
            Download on GitHub
          </a>
        </p>
      </div>
    )
  }
}

export default Footer
