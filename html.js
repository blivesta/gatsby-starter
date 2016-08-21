import React from 'react'
import DocumentTitle from 'react-document-title'
import { config } from 'config'
import { prefixLink } from 'gatsby-helpers'
import svgSprite from '!raw!./svgpack/svgpack-sprite.svg'

const BUILD_TIME = new Date().getTime()

class Html extends React.Component {
  static get propTypes () {
    return {
      body: React.PropTypes.string
    }
  }

  render () {
    const { body } = this.props
    const title = DocumentTitle.rewind()

    let css
    if (process.env.NODE_ENV === 'production') {
      css = <style dangerouslySetInnerHTML={{ __html: require('!raw!./public/styles.css') }} />
    }

    return (
      <html lang='en'>
        <head>
          <meta charSet='utf-8' />
          <meta httpEquiv='x-ua-compatible' content='ie=edge' />
          <meta name='viewport' content='width=device-width, initial-scale=1.0' />
          <meta name='description' content={config.description} />
          <meta property='og:description' content={config.description} />
          <meta property='og:image' content='' />
          <meta property='og:locale' content='en_US' />
          <meta property='og:site_name' content={config.siteTitle} />
          <meta property='og:title' content={title} />
          <meta property='og:type' content='website' />
          <meta property='og:url' content={config.siteUrl} />
          <meta property='fb:app_id' content={config.facebookAppId} />
          <meta name='twitter:card' content='summary' />
          <meta name='twitter:site' content={config.siteUrl} />
          <title>{title}</title>
          <link rel='apple-touch-icon' href={prefixLink('/apple-touch-icon.png')} />
          <link rel='shortcut icon' href={prefixLink('/favicon.ico')} />
          {css}
        </head>
        <body className=''>
          <svg xmlns='http://www.w3.org/2000/svg' style={{ display: 'none' }} dangerouslySetInnerHTML={{ __html: svgSprite }} />

          <div id='react-mount' dangerouslySetInnerHTML={{ __html: body }} />

          <script src={prefixLink(`/bundle.js?t=${BUILD_TIME}`)} />

          <script dangerouslySetInnerHTML={{ __html: `
            (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
            (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
            m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
            })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
            ga('create', '${config.ga}', 'auto');
            ga('send', 'pageview');
          `}} />
        </body>
      </html>
    )
  }
}

export default Html
