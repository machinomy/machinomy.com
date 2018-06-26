"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_helmet_1 = require("react-helmet");
const Header_1 = require("../components/Header/Header");
require("./index.css");
const styled_components_1 = require("styled-components");
const Theme_1 = require("./Theme");
const Footer_1 = require("../components/Footer/Footer");
class Index extends React.Component {
    constructor(props) {
        super(props);
        this.children = props.children;
        this.data = props.data;
    }
    render() {
        let links = this.data.site.siteMetadata.links;
        return (React.createElement("div", null,
            React.createElement(react_helmet_1.default, { title: this.data.site.siteMetadata.title, meta: [
                    { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
                    { name: 'og:title', content: 'Machinomy – micropayments on Ethereum' },
                    { name: 'og:type', content: 'website' },
                    { name: 'og:url', content: 'https://machinomy.com' },
                    { name: 'og:image', content: 'https://machinomy.com/images/robot_on_pink.png' },
                    { name: 'og:description', content: 'Micropayments on Ethereum' },
                    { name: '', content: '' },
                    { name: 'description', content: 'Micropayments on Ethereum' },
                    { name: 'keywords', content: 'micropayments, state channels, ethereum, blockchain' },
                ] }),
            React.createElement(styled_components_1.ThemeProvider, { theme: Theme_1.default },
                React.createElement("div", null,
                    React.createElement(Header_1.default, { twitter: links.twitter, gitter: links.gitter, github: links.github, medium: links.medium }),
                    this.children(),
                    React.createElement(Footer_1.default, { twitter: links.twitter, gitter: links.gitter, github: links.github, medium: links.medium })))));
    }
}
exports.default = Index;
exports.query = graphql `
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
`;
//# sourceMappingURL=index.js.map