"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const styled_components_1 = require("styled-components");
const clocks = require('./indexPage/clocks.svg');
const moneybag = require('./indexPage/moneybag.svg');
const heart = require('./indexPage/heart.svg');
const lamp = require('./indexPage/lamp.svg');
const spankChain = require('./indexPage/spankchain.svg');
const popchest = require('./indexPage/popchest.jpg');
const onder = require('./indexPage/onder.jpg');
const Title = styled_components_1.default.h1 `
  font-family: 'Roboto Slab', 'PT Serif', serif;
  font-weight: bolder;
  font-size: 350%;
  margin: 2rem 0;
`;
const Subtitle = styled_components_1.default.p `
  font-size: larger;
`;
const Header = styled_components_1.default.h2 `
  font-family: 'Roboto Slab', 'PT Serif', serif;
  font-weight: bolder;
  font-size: 250%;
`;
const Icon = styled_components_1.default.img `
  width: 120px;
  height: 120px;
`;
const Row = styled_components_1.default.div `
  margin-top: 2rem;
`;
const TrustedLogo = styled_components_1.default.img `
  width: 5rem;
  height: 5rem;
`;
const TrustedLink = styled_components_1.default('a') `
  color: inherit;
`;
const IndexPage = () => (React.createElement("div", null,
    React.createElement("div", { className: "grid-x grid-padding-x" },
        React.createElement("div", { className: "cell large-4" }, "\u00A0"),
        React.createElement("div", { className: "cell large-6" },
            React.createElement(Title, null, "Micropayments on Ethereum blockchain")),
        React.createElement("div", { className: "cell large-2" }, "\u00A0")),
    React.createElement("div", { className: "grid-x grid-padding-x" },
        React.createElement("div", { className: "cell medium-4" }, "\u00A0"),
        React.createElement("div", { className: "cell large-6" },
            React.createElement(Subtitle, null, "Machinomy is a micropayments SDK for Ethereum platform. State channels is a design pattern for instant blockchain transactions. It moves most of the transactions off-chain. As transactions do not touch the blockchain, fees and waiting times are eliminated, in a secure way."),
            React.createElement("p", null, "It brings a possibility of instant transactions and low value payments. Paid media consumption, like unobtrusive micropayments for video streaming is one application. Another one is tipping for live performers. One could also think about blockchain games, and machine-to-machine transactions."))),
    React.createElement(Row, { className: "grid-x grid-padding-x" },
        React.createElement("div", { className: "cell medium-4 text-right" },
            React.createElement(Header, null, "Features")),
        React.createElement("div", { className: "cell medium-6" },
            React.createElement("div", { className: "grid-x align-justify" },
                React.createElement("div", { className: "cell medium-6 text-center" },
                    React.createElement(Icon, { src: clocks }),
                    React.createElement("p", null, "Zero fees")),
                React.createElement("div", { className: "cell medium-6 text-center" },
                    React.createElement(Icon, { src: moneybag }),
                    React.createElement("p", null, "Immediate payments"))),
            React.createElement("div", { className: "grid-x grid-margin-x" },
                React.createElement("div", { className: "cell medium-6 text-center" },
                    React.createElement(Icon, { src: heart }),
                    React.createElement("p", null, "Simple API")),
                React.createElement("div", { className: "cell medium-6 text-center" },
                    React.createElement(Icon, { src: lamp }),
                    React.createElement("p", null, "Works on devices"))))),
    React.createElement(Row, { className: "grid-x grid-padding-x" },
        React.createElement("div", { className: "cell medium-4 text-right" },
            React.createElement(Header, null, "Explore")),
        React.createElement("div", { className: "cell medium-6" },
            React.createElement("ol", null,
                React.createElement("li", null,
                    React.createElement("p", null, "Clone machinomy repository"),
                    React.createElement("p", null,
                        React.createElement("pre", null, "$ git clone https://github.com/machinomy/machinomy"))),
                React.createElement("li", null,
                    React.createElement("p", null, "Build the code"),
                    React.createElement("p", null,
                        React.createElement("pre", null, "$ cd machinomy && yarn install && yarn bootstrap && yarn build"))),
                React.createElement("li", null,
                    React.createElement("p", null, "Run the client"),
                    React.createElement("p", null,
                        React.createElement("pre", null, "$ export PROVIDER_URL=https://rinkeby.infura.io")),
                    React.createElement("p", null,
                        React.createElement("pre", null, "$ export MNEMONIC=repair good hover betray buddy deal night wide mean round great tackle")),
                    React.createElement("p", null,
                        React.createElement("pre", null, "$ DEBUG=* node packages/examples/src/client.js"))),
                React.createElement("li", null,
                    React.createElement("p", null,
                        "Go to ",
                        React.createElement("a", { href: "//playground.machinomy.com/" }, "Playground Dashboard")),
                    React.createElement("p", null,
                        "Use ",
                        React.createElement("code", null, "peanut giggle name tree canoe tube render ketchup survey segment army will"),
                        " mnemonic for Vynos wallet"),
                    React.createElement("p", null, "Go to Channels tab and close one of the channels")),
                React.createElement("li", null,
                    React.createElement("p", null,
                        "Notice transactions on ",
                        React.createElement("a", { href: "https://rinkeby.etherscan.io/address/0x84dcbedf1ac6f69947d5a9ae34d9dcdd6ba1da05" }, "Rinkeby Etherscan"))),
                React.createElement("li", null,
                    React.createElement("p", null,
                        "Follow us on ",
                        React.createElement("a", { href: "//twitter.com/machinomy" }, "Twitter")))))),
    React.createElement(Row, { className: "grid-x grid-padding-x" },
        React.createElement("div", { className: "cell medium-4 text-right" },
            React.createElement(Header, null, "Trusted By")),
        React.createElement("div", { className: "cell medium-2 text-center" },
            React.createElement(TrustedLink, { href: "https://spankchain.com" },
                React.createElement(TrustedLogo, { src: spankChain }),
                React.createElement("p", null, "SpankChain"))),
        React.createElement("div", { className: "cell medium-2 text-center" },
            React.createElement(TrustedLink, { href: "https://popchest.com" },
                React.createElement(TrustedLogo, { src: popchest }),
                React.createElement("p", null, "PopChest"))),
        React.createElement("div", { className: "cell medium-2 text-center" },
            React.createElement(TrustedLink, { href: "https://onder.tech" },
                React.createElement(TrustedLogo, { src: onder }),
                React.createElement("p", null, "\u00D8NDER"))))));
exports.default = IndexPage;
//# sourceMappingURL=index.js.map