import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import { useState, useEffect } from "react";
import { ethers } from "ethers";
import { abi } from "../constants/abi";
import WalletConnectProvider from "@walletconnect/web3-provider"; //to add the Wallet Connect option
import Web3Modal from "web3modal";
//yarn add most of this
//This is a package that when we hit connect it will automatically prompt us with this buttons (buttons/icons of different wallets to choose) instead
//of having to code this buttons by ourselves.

let web3Modal;

//this web3modal needs a list of the providers that we wanna give (the different wallets for the user to connect), and by default it brings Metamask.
//we can follow the web3modal documentation for this
//WalletConnect is easily one of the most popular wallets, we can add more now
const providerOptions = {
  walletconnect: {
    package: WalletConnectProvider,
    options: {
      rpc: { 5: process.env.NEXT_PUBLIC_RPC_URL }, //patrick doesnt think local chain works very well. chainid is 5 for goerli. Got this url from alchemy. We should import .env I'm pretty sure
    },
  },
};

if (typeof window !== "undefined") {
  web3Modal = new Web3Modal({
    cacheProvider: false, //"dont set this to true, otherwise you'll be really confused as to why it stops showing up. if we wanna cache the provider we can make that true"
    providerOptions, //required. the object we created above
  });
}

export default function Home() {
  const [isConnected, setIsConnected] = useState(false); //we use this useStates like we used in the nextJs only repo. web3react and moralis had their own alternatives for this
  const [hasMetamask, setHasMetamask] = useState(false);
  const [signer, setSigner] = useState(undefined);

  useEffect(() => {
    //pretty sure this is the same as function useEffect() {}
    if (typeof window.ethereum !== "undefined") {
      setHasMetamask(true);
    }
  });

  async function connect() {
    if (typeof window.ethereum !== "undefined") {
      try {
        const web3ModalProvider = await web3Modal.connect();
        setIsConnected(true);
        const provider = new ethers.providers.Web3Provider(web3ModalProvider);
        setSigner(provider.getSigner());
      } catch (e) {
        console.log(e);
      }
    } else {
      setIsConnected(false);
    }
  }

  async function execute() {
    if (typeof window.ethereum !== "undefined") {
      const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
      const contract = new ethers.Contract(contractAddress, abi, signer);
      try {
        await contract.store(42);
      } catch (error) {
        console.log(error);
      }
    } else {
      console.log("Please install a wallet");
    }
  }

  return (
    <div>
      {hasMetamask ? (
        isConnected ? (
          "Connected! "
        ) : (
          <button onClick={() => connect()}>Connect</button>
        )
      ) : (
        "Please install a wallet"
      )}

      {isConnected ? <button onClick={() => execute()}>Execute</button> : ""}
    </div>
  );
}

//if we run into some issues: 1:07:00 https://www.youtube.com/watch?v=pdsYCkUWrgQ
