import * as React from 'react'
import styled from 'styled-components'

const twitterWhite = require('./twitter-white.svg')
const gitterWhite = require('./gitter-white.svg')
const githubWhite = require('./github-white.svg')

const List = styled.ul`
  background: transparent;
  float: left;
  margin: 0;
  list-style-type: none;
`

const Item = styled.li`
  display: table-cell;
  vertical-align: middle;
`

const MenuLink = styled.a`
  line-height: ${props => props.theme.topBar.lineHeight};
  height: ${props => props.theme.topBar.lineHeight};
  padding: 0 1rem;
  color: #fff;
  display: block;
  
  @media (max-width: ${props => props.theme.breakpoints.medium}) {
    & {
      padding-top: .5rem;
      padding-bottom: .5rem;
      line-height: inherit;
      height: inherit;
    }
  }
`

const Icon = styled.img`
  margin-top: -5px;
  width: 24px;
  height: 24px;
`

export interface Props {
  twitter: string
  gitter: string
  github: string
}

export default class IconMenu extends React.Component<Props> {
  render () {
    return <List className="float-right">
      <Item><MenuLink href={this.props.twitter}><Icon src={twitterWhite}/></MenuLink></Item>
      <Item><MenuLink href={this.props.gitter}><Icon src={gitterWhite}/></MenuLink></Item>
      <Item><MenuLink href={this.props.github}><Icon src={githubWhite}/></MenuLink></Item>
    </List>
  }
}