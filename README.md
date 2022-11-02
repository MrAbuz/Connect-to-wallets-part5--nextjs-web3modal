5th way to connect our smart contracts to Metamask: Using next.js + Web3Modal

Following from "https://www.youtube.com/watch?v=pdsYCkUWrgQ"

The package that we're gonna add is Web3Modal.
This is a package that when we hit connect it will automatically prompt us with the fancy wallet icons/buttons to choose, instead of having to code this buttons by ourselves.
Provides that way to connect and to know the provider, but the rest is pretty much the same as we did with just next.js and ethers"connect-to-wallets-part2--nextjs-ethers".
The "Web3react" and "Moralis" way are really similar (Moralis being the simplest), while this one (Web3Modal) offers that easy integration with multiple wallets by having that ui to choose the wallets integrated, but the majority of the implementation is next.js. Web3React is also close to nextjs and ethers to be honest.

https://github.com/scaffold-eth/scaffold-eth/tree/master/packages/react-app/src/components
This repo is insane to reverse engineer react code to learn and aply into our projects. Patrick recommends a lot.
Its created by Austin Griffith and applies this web3modal.
https://github.com/ethereum-boilerplate/ethereum-boilerplate (another insane repo to reverse engineer to learn react into web3, but applies Moralis, not web3modal)
Both of this are insane projects to look up if I need to learn more about react in web3.

To try this repo:

```
git clone https://github.com/MrAbuz/connect-to-wallets-part5--Nextjs-Web3modal
yarn
```

To open the project on a browser tab:

```
yarn dev
then click the url it provides (it opens a tab)
```

Then open a new terminal (a 2nd terminal), and:

```
cd ..
git clone https://github.com/MrAbuz/connect-to-wallets-part0--just-to-get-hardhat-sol-code
yarn
yarn hardhat node
```

Copy the rpc url provided in the hardhat node that you created, then go to your metamask, add a new network, and create a new network with that copied rpc url and chainid: 31337.
Then pick one private key from the ones provided in hardhat node and import it to your metamask.

With all of this you will be able to test this repo! have fun :)
