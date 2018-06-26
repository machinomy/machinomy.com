import * as React from 'react'
import styled from 'styled-components'

const twitterWhite = require('../Header/twitter-white.svg')
const gitterWhite = require('../Header/gitter-white.svg')
const githubWhite = require('../Header/github-white.svg')

const Row = styled('div')`
  background: #333333;
  margin-top: 1.5rem;
  padding: 1rem;
  color: white;
`

const Menu = styled('ul')`
  list-style-type: none;
  padding: 0;
  margin: 0;
  li:first-child a {
    padding-left: 0;
  }
  li a {
    color: white;
  
    img {
      margin-right: 0.5rem;
    }
  }
`

const Line = styled('hr')`
  display: block;
  height: 1px;
  border: 0;
  border-top: 1px solid #de5080;
  margin: 1em 0;
  padding: 0;
`

const Icon = styled('img')`
  margin-top: -5px;
  width: 24px;
  height: 24px;
`

export interface Props {
  twitter: string
  gitter: string
  github: string
  medium: string
}

export default class Footer extends React.Component<Props> {
  render () {
    return <Row className="grid-x grid-padding-x">
      <div className="cell medium-4">
        &nbsp;
      </div>
      <div className="cell large-6">
        <Menu className="menu">
          <li>
            <a href={this.props.twitter}>
              <Icon src={twitterWhite}/>
              Follow
            </a>
          </li>
          <li>
            <a href={this.props.gitter}>
              <Icon src={gitterWhite} />
              Discuss
            </a>
          </li>
          <li>
            <a href={this.props.github}>
              <Icon src={githubWhite} />
              Contribute
            </a>
          </li>
        </Menu>
        {/*<Line/> FIXME*/}
        {/*<Menu className="menu">*/}
          {/*<li><a href="/documentation">Documentation</a></li>*/}
          {/*<li><a href="/blog">Blog</a></li>*/}
        {/*</Menu>*/}
      </div>
    </Row>
  }
}
