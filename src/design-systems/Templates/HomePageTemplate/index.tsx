'use client'

import React, { useEffect, useState } from 'react'

// Ensure the TelegramWebApp type is defined
interface TelegramWebApp {
  ready: () => void
}

// Ensure the window object includes Telegram
declare global {
  interface Window {
    Telegram: {
      WebApp: TelegramWebApp
    }
    ethereum?: any // Add this to handle the Ethereum provider
  }
}

const HomePageTemplate: React.FC = () => {
  const [address, setAddress] = useState<string>('')
  const [isConnected, setIsConnected] = useState<boolean>(false)

  useEffect(() => {
    if (window.Telegram && window.Telegram.WebApp) {
      window.Telegram.WebApp.ready()
    }
  }, [])

  // Function to connect the wallet
  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        console.log('Requesting accounts...')
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' })
        console.log('Accounts:', accounts)
        setAddress(accounts[0])
        setIsConnected(true)
        console.log('Connected:', accounts[0])
      } catch (error) {
        console.error('Failed to connect wallet:', error)
      }
    } else {
      console.error('Non-Ethereum browser detected. Consider using MetaMask!')
      alert('Please install MetaMask!')
    }
  }

  // Function to disconnect the wallet
  const disconnectWallet = () => {
    setAddress('')
    setIsConnected(false)
  }

  return (
    <div className="layout">
      <header>
        <h1>Header</h1>
      </header>
      <main>
        <h1>Homepage</h1>
        <div className="mt-6 flex justify-center">
          {!isConnected ? (
            <button onClick={connectWallet} className="connect-button">
              Connect Wallet
            </button>
          ) : (
            <div className="mt-4 flex flex-col items-center">
              <p>Connected Address: {address}</p>
              <button onClick={disconnectWallet} className="disconnect-button">
                Disconnect Wallet
              </button>
            </div>
          )}
        </div>
      </main>
      <footer>
        <h1>Footer</h1>
      </footer>
      <style jsx>{`
        .connect-button,
        .disconnect-button {
          padding: 10px 20px;
          font-size: 16px;
          cursor: pointer;
          background-color: #007bff;
          color: white;
          border: none;
          border-radius: 5px;
        }
        .connect-button:hover,
        .disconnect-button:hover {
          background-color: #0056b3;
        }
      `}</style>
    </div>
  )
}

export default HomePageTemplate
