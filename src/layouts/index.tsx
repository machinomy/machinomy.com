import * as React from 'react'
import Helmet from 'react-helmet'

import Header from '../components/Header/Header'
import './index.css'
import { ThemeProvider } from 'styled-components'
import Theme from './Theme'
import Footer from '../components/Footer/Footer'

export type Props = {
  children: Function
  data: any
}

export default class Index extends React.Component {
  children: Function
  data: any

  constructor (props: Props) {
    super(props)
    this.children = props.children
    this.data = props.data
  }

  render () {
    let links = this.data.site.siteMetadata.links
    return (
      <div>
        <Helmet
          title={this.data.site.siteMetadata.title}
          meta={[
            { name: 'viewport', content: 'width=device-width, initial-scale=1.0'},
            { name: 'og:title', content: 'Machinomy – micropayments on Ethereum'},
            { name: 'og:type', content: 'website'},
            { name: 'og:url', content: 'https://machinomy.com'},
            { name: 'og:image', content: 'https://machinomy.com/images/robot_on_pink.png'},
            { name: 'og:description', content: 'Micropayments on Ethereum'},
            { name: '', content: ''},
            { name: 'description', content: 'Micropayments on Ethereum' },
            { name: 'keywords', content: 'micropayments, state channels, ethereum, blockchain' },
          ]}
        />
        <ThemeProvider theme={Theme}>
          <div>
            <Header twitter={links.twitter} gitter={links.gitter} github={links.github} medium={links.medium} />
            {this.children()}
            <Footer twitter={links.twitter} gitter={links.gitter} github={links.github} medium={links.medium} />
          </div>
        </ThemeProvider>
      </div>
    )
  }
}

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
        links {
          twitter
          gitter
          github
          medium
        }
      }
    }
  }
`
