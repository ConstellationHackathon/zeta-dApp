<a name="readme-top"></a>

<div align="center">

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
<!-- [![MIT License][license-shield]][license-url] -->

</div>

<!-- PROJECT INTRO -->

<br />
<div align="center">
  <a href="https://github.com/ConstellationHackathon">
    <img src="thumbnail-zeta.jpeg" alt="Logo" width="2000" height=300">
  </a>

 <h3 align="center"> Jump in, jump safe, swap crypto 📍</h3>
  <p align="center">

  [Chainlink Constellation Hackathon](https://chain.link/hackathon)

 <br />
    <a href="https://github.com/ConstellationHackathon"><strong>Explore the docs »</strong></a>
    <br />
    <a href="https://github.com/ConstellationHackathon">View Demo</a>
    ·
    <a href="https://github.com/ConstellationHackathon">Report Bug</a>
    ·
    <a href="https://github.com/ConstellationHackathon">Request Feature</a>
  </p>
</div>

<br />


<!-- TABLE OF CONTENTS -->

# Table of Contents 

1. [About de Project](#about-the-project)
    - [Built With](#built-with)
2. [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
3. [Usage](#usage)
4. [Roadmap](#roadmap)
5. [Contributing](#contributing)
6. [Licence](#license)
7. [Contact](#contact)
8. [Acknowledgments](#acknowledgments)

<br />


<!-- ABOUT THE PROJECT -->

# About The Project

<br />

[![Product Name Screen Shot][product-screenshot]](https://github.com/ConstellationHackathon)

<br /> 


<!-- ACÁ DEBE IR EL LINK QUE CORRE EL PRODUCTO -->

Zeta is a cryptocurrency exchange that allows you to jump between different blockchain networks easily and securely. With Zeta, you don't need KYC or intermediaries. You only need to indicate which wallet you want to receive your money in, without connecting your wallet and exposing yourself to security risks. Zeta is the ideal platform for users who want to take advantage of the opportunities of cryptocurrencies, regardless of their level of experience or knowledge. Zeta is the easiest jump.


The entire process is outlined in the following diagram: 

<br /> 

<a href="https://github.com/ConstellationHackathon">
    <img src="zeta-workflow.jpg" alt="Logo" width="1080" height=550">
  </a>

<br />

## Process Explanation:


**1. User Initiation:**

Users seamlessly transfer their funds between different blockchain networks (e.g., Avax to Ethereum), ensuring a secure and private experience. By avoiding the need to connect their wallets, users benefit from increased security and privacy. Additionally, they receive the most competitive rate available through our fedge pricing system.

**2. User Transaction:**

To initiate a transaction, users send funds to the provided wallet address and subsequently inform us of the sending wallet address. This allows Zeta to connect the user's action with the relevant on-chain smart contract, ensuring a smooth and efficient transaction process.

**3. On-chain Smart Contract (Price Feed + CCIP):**

Upon receiving the designated amount of token A, the smart contract leverages Chainlink Price Feed from the oracle to determine the equivalent amount of token B to be delivered. This information is then relayed to Chain II through Cross-Chain Interoperability Protocol (CCIP) messaging.

**4. On-chain Smart Contract II (Price Feed + CCIP):**

The smart contract on Chain II processes the received message, extracts the intended recipient and token amount, and initiates the token B sending function. This ensures the seamless and accurate execution of the cross-chain transaction.

**5. Transaction**

The Graph platform records all transaction events, including user funds received, providing an endpoint for displaying liquidity and execution details. While this information is readily available, user access is optional and does not impact the transaction flow.

**Note:** During the MVP phase of this project, Zeta acts as the sole liquidity provider. All transactions will be executed upon user initiation and confirmation.


<!--  AQUÍ VA EL DEMOOOO -->


<p align="right">(<a href="#readme-top">back to top</a>)</p>


# Built With

<!--


FastSwaps is proudly supported by the following sponsors:

**Frontend Deployment:**

[![NEAR][NEAR.org]][NEAR-url]

Deployed using Near BOS, our frontend interfaces with three endpoints critical for watcher functionality and validating liquidity pools to execute transactions securely.

<!-- Comment de Uso de NEAR BOS 

**Protocol and Networks:**


[![Uniswap][Uniswap.org]][Uniswap-url]

<!-- 
[![Push][Push.org]][Push-url] Cow
[![Push][Push.org]][Push-url] 


Cow Protocol and Uniswap V4 are employed for swaps, demonstrating versatility on Gorli, Polygon, and CELO networks during the hackathon.

You can check web3 and protocol integratiosn in this repo and partners detail explanation:

https://github.com/jonthdiaz/fastSwaps


Comment de Uso de Cow Swap e info de repo

**User Experience and Design:**

[![NFT.STORAGE][NFT.Storage]][NFT-url]

The project prioritizes an enhanced user experience and design through Nouns style and vibes.

This is just an example of how we implement Nouns Vibes using Lil Noun Asset Library on Figma to build the design prototype ⚡️ 

 <a href="https://github.com/sheva323/IstanbulHackathon">
    <img src="images/nouns.jpeg" alt="Logo" width="2000" height="500">
  </a>


 Comment de presentación y rcueros usadodsS

By implementing this decentralized cross-chain exchange with expanded protocol support, including Uniswap V4 and CELO, we revolutionize the way users transfer funds across networks. Our approach ensures security, efficiency, and accessibility across diverse platforms, while the CELO integration provides an attractive annual incentive for users engaging with our ecosystem.

In the development of the FastSwaps, we used the following technologies:


* [![Next][Next.js]][Next-url] | React
* [![Chakra][chakra-ui]][chakra-url] | BOS Near
* [![Node][Node.js]][Node-url]

Node.js 
Mongo BD
CELO


These powerful tools and frameworks have helped us create a seamless user experience and ensure the scalability and reliability of our platform.

<p align="right">(<a href="#readme-top">back to top</a>)</p>
-->


<!-- GETTING STARTED   -->

# Getting Started

<!--
To get started with FastSwaps, follow these steps:

1. Explore the possible swaps and select your prefered one.

2. Once your agree with the swap, write down the wallet where you're want to rececive and you're going to receive the funds.

3. A few minutes later, you're going to receive a Push Notification it's done, check your wallet.

That's it!. The best way to get into crypto.


## Installation 

To get started with FastSwaps installation, follow these steps:

1. Clone the repo
   ```sh
   git clone https://github.com/jonthdiaz/fastSwaps
   ```
2. Navigate to the project directory:
   ```sh
   cd fastSwaps
   ```
3. Install the necessary dependencies:
   ```js
   docker compose up
   ```
4.  Configure the environment variables:
  * Rename the .env.example file to .env.
  * Open the .env file and fill in the required configuration values.
5. Open your web browser and visit http://localhost:3000 to access the Join application.

Please note that the above steps assume you have Docker and Docker Compose installed on your machine.

Enjoy using FastSwaps and stay connected with the exciting world of tech and web3 events!


<p align="right">(<a href="#readme-top">back to top</a>)</p>

-->

<!-- CONTACT -->

# Zeta Team

Angela Ocando - [@ocandocrypto](https://twitter.com/ocandocrypto) - ocandocrypto@proton.me - PM 
<br />
Sebastian Guaqueta - [@scguaquetam](https://twitter.com/scguaquetam) - sheva3232@gmail.com - Frontend
<br />
Jonathan Diaz - [@jontdiaz](https://twitter.com/jonthdiaz) - JonthDiaz@gmail.com - Backend 
<br />
Miguel Angel - [@MAB015](https://twitter.com/MAB015) - miguellangellbol@gmail.com  - UI/UX 
<br />


<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- ACKNOWLEDGMENTS 

# Acknowledgments

We would like to express our gratitude to the following resources that have been invaluable in the development of FastSwaps:

BOS Docs
CELO Docs
Base Docs
Nouns Designer Dos
1inch Docs
Cow Swaps Docs
Gnosis Chain Docs 

* [Push Protocol Docs](https://docs.push.org/hub/)
* [Polybase Docs](https://polybase.xyz/docs/introduction)
* [Spheron Docs](https://docs.spheron.network/)
* [ENS Docs](https://docs.ens.domains/)
* [NFT.Storage Docs](https://nft.storage/docs/)
* [Filecoin Docs](https://docs.filecoin.io/)

These resources have provided valuable insights, tools, and inspiration throughout the development process. We appreciate their contributions to the web development community.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

-->

<!-- ROADMAP -->
# Roadmap

<!--

Today through FastSwaps we to send tokens effortlessly from one network to another, without the need to connect your wallet direct and without no KYC.

As working Plan

- [] Telegram integration
- [] More rollups aggregators and token support
- [] More rollups aggregators and token support
- [] Push notification and chat integration to connect with team
- [ ] Off-chain ramps

See the [open issues](https://github.com/sheva323/IstanbulHackaton/issues) for a full list of proposed features (and known issues).

And with the vision to  make crypto more accessible and inclusive, simplifying the complexities associated with cross-chain transactions.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

-->

<!-- ACKNOWLEDGMENTS -->

# Acknowledgments

<!--
We would like to express our gratitude to the following resources that have been invaluable in the development of Stake Garden:

* [1inch Docs](https://portal.1inch.dev/documentation/authentication)
* [Metamask SDK](https://docs.metamask.io/wallet/how-to/use-sdk/)
* [The Graph Docs](https://thegraph.com/docs)
* [Nouns Artwork](https://nouns.center/assets)


<!-- * [Filecoin Docs](https://docs.filecoin.io/) 

These resources have provided valuable insights, tools, and inspiration throughout the development process. We appreciate their contributions to the web development community.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

-->



<!-- MARKDOWN LINKS  -->

[contributors-shield]: https://img.shields.io/github/contributors/sheva323/IstanbulHackathon.svg?style=for-the-badge&color=red

[contributors-url]: https://github.com/sheva323/IstanbulHackathon/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/sheva323/IstanbulHackathon.svg?style=for-the-badge&color=white
[forks-url]: https://github.com/sheva323/IstanbulHackathon/network/members
[stars-shield]: https://img.shields.io/github/stars/sheva323/IstanbulHackathon.svg?style=for-the-badge&color=red
[stars-url]: https://github.com/sheva323/IstanbulHackathon/stargazers
[issues-shield]: https://img.shields.io/github/issues/sheva323/IstanbulHackathon.svg?style=for-the-badge&color=white
[issues-url]: https://github.com/sheva323/IstanbulHackathon/issues

<!-- 
[license-shield]: https://img.shields.io/github/license/sheva323/JOIN.svg?style=for-the-badge
[license-url]: https://github.com/sheva323/JOIN/blob/main/LICENSE.txt -->

<!-- IMAGES -->

[product-screenshot]: product.png

<!-- SPONSORS -->

[NEAR.org]:https://img.shields.io/badge/Near-FFFFFF?style=for-the-badge&logo=near&logoColor=black
[NEAR-url]:https://near.org/
[Uniswap.org]:https://img.shields.io/badge/Uniswap-e03dc1?style=for-the-badge&logo=push&logoColor=white
[Uniswap-url]:https://docs.uniswap.org/
[Push.org]:https://img.shields.io/badge/push-e03dc1?style=for-the-badge&logo=push&logoColor=white
[Push-url]:https://push.org
[Push.org]:https://img.shields.io/badge/push-e03dc1?style=for-the-badge&logo=push&logoColor=white
[Push-url]:https://push.org
[NFT.Storage]:https://img.shields.io/badge/nft.storage-EE4116?style=for-the-badge&logo=nftdotstorage&logoColor=white
[NFT-url]:https://nft.storage
[Spheron.network]:https://img.shields.io/badge/spheron-0000ff?style=for-the-badge&logo=spheron&logoColor=blue
[Spheron-url]:https://spheron.network/
[Ens.domains]:https://img.shields.io/badge/ens-4f81fe?style=for-the-badge&logo=ens&logoColor=blue
[Ens-url]:https://ens.domains/
[Filecoin.io]:https://img.shields.io/badge/filecoin-40bec8?style=for-the-badge&logo=filecoin&logoColor=blue
[Filecoin-url]:https://filecoin.io/

<!-- TOOLS AND FRAMEWORKS  -->


[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[chakra-ui]:https://img.shields.io/badge/chakra-2ABFB3?style=for-the-badge&logo=chakraui&logoColor=white
[chakra-url]:https://chakra-ui.com
[Node.js]:https://img.shields.io/badge/node.js-333333?style=for-the-badge&logo=nodedotjs&logoColor=689F63
[Node-url]:https://nodejs.org/en

<!-- We're back, booom> -->
