5th way to connect our smart contracts to Metamask: Using next.js + Web3Modal

Following from "https://www.youtube.com/watch?v=pdsYCkUWrgQ"

The package that we're gonna add is Web3Modal.
This is a package that when we hit connect it will automatically prompt us with the fancy wallet icons/buttons to choose, instead of having to code this buttons by ourselves.
Provides that way to connect and to know the provider, but the rest is pretty much the same as we did with just next.js and ethers"connect-to-wallets-part2--nextjs-ethers".

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
