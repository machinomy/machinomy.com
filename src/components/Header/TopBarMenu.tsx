import * as React from 'react'
import styled, { css } from 'react-emotion'
import Link from 'gatsby-link'

const List = styled('ul')`
  background: transparent;
  float: left;
  margin: 0 0 0 -1rem;
  list-style-type: none;
`

const Item = styled('li')`
  display: table-cell;
  vertical-align: middle;
`

const linkStyle = (props: any) => css`line-height: ${props.theme.topBar.lineHeight};
  height: ${props.theme.topBar.lineHeight};
  padding: 0 1rem;
  color: #fff;
  display: block;
  
  @media (max-width: ${props.theme.breakpoints.medium}) {
    & {
      padding-top: .5rem;
      padding-bottom: .5rem;
      line-height: inherit;
      height: inherit;
    }
  }`

const MenuLink = styled(Link)`
  ${linkStyle}
`

const ExternalLink = styled('a')`
  ${linkStyle}
`

export interface Props {
  medium: string
  gitter: string
}

export default class TopBarMenu extends React.Component<Props> {
  render () {
    return <List>
      <Item><ExternalLink href={this.props.gitter}>Community</ExternalLink></Item>
      {/*<Item><MenuLink to="#FIXME">Documentation</MenuLink></Item>*/}
      {/*<Item><MenuLink to="#FIXME">API</MenuLink></Item>*/}
      <Item><ExternalLink href={this.props.medium}>Blog</ExternalLink></Item>
    </List>
  }
}