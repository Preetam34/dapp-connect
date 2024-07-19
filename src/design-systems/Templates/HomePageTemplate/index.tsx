'use client';

import React, { useEffect, useState } from 'react';
import Web3 from 'web3';

// Ensure the TelegramWebApp type is defined
interface TelegramWebApp {
  ready: () => void;
}

// Ensure the window object includes Telegram
declare global {
  interface Window {
    Telegram: {
      WebApp: TelegramWebApp;
    };
    ethereum?: any; // Add this to handle the Ethereum provider
  }
}

const HomePageTemplate: React.FC = () => {
  const [address, setAddress] = useState<string>('');
  const [isConnected, setIsConnected] = useState<boolean>(false);

  useEffect(() => {
    if (window.Telegram && window.Telegram.WebApp) {
      window.Telegram.WebApp.ready();
    }
  }, []);

  // Function to connect the wallet
  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        // console.log('Requesting accounts...');
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        // console.log('Accounts:', accounts);
        if (accounts.length > 0) {
          setAddress(accounts[0]);
          setIsConnected(true);
          // console.log('Connected:', accounts[0]);
        } else {
          console.error('No accounts found');
        }
      } catch (error) {
        console.error('Failed to connect wallet:', error);
      }
    } else {
      console.error('Non-Ethereum browser detected. Consider using MetaMask!');
      alert('Please install MetaMask! If you are on mobile, open MetaMask app and connect manually.');
      // Provide manual connection instructions for mobile users
      alert('To connect MetaMask on mobile:\n1. Open the MetaMask app.\n2. Navigate to the browser within MetaMask.\n3. Enter the URL of this app and connect your wallet.');
    }
  };

  // Function to disconnect the wallet
  const disconnectWallet = () => {
    setAddress('');
    setIsConnected(false);
  };

  return (
    <div className="layout">

      <main>
        <h1>Homepage</h1>
        <div className="mt-6 flex justify-center">
          {!isConnected ? (
            <button onClick={connectWallet} className="connect-button">Connect Wallet</button>
          ) : (
            <div className="mt-4 flex flex-col items-center">
              <p>Connected Address: {address}</p>
              <button onClick={disconnectWallet} className="disconnect-button">Disconnect Wallet</button>
            </div>
          )}
        </div>
      </main>
 
      <style jsx>{`
        .connect-button, .disconnect-button {
          padding: 10px 20px;
          font-size: 16px;
          cursor: pointer;
          background-color: #007bff;
          color: white;
          border: none;
          border-radius: 5px;
        }
        .connect-button:hover, .disconnect-button:hover {
          background-color: #0056b3;
        }
      `}</style>
    </div>
  );
};

export default HomePageTemplate;
