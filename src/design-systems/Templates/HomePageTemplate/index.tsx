'use client';

// import React, { useEffect, useState } from 'react';

// // Ensure the TelegramWebApp type is defined
// interface TelegramWebApp {
//   ready: () => void;
// }

// // Ensure the window object includes Telegram
// declare global {
//   interface Window {
//     Telegram: {
//       WebApp: TelegramWebApp;
//     };
//     ethereum?: any; // Add this to handle the Ethereum provider
//   }
// }

// const HomePageTemplate: React.FC = () => {
//   const [address, setAddress] = useState<string>('');
//   const [isConnected, setIsConnected] = useState<boolean>(false);
//   const [isTelegram, setIsTelegram] = useState<boolean>(false);

//   useEffect(() => {
//     if (window.Telegram && window.Telegram.WebApp) {
//       window.Telegram.WebApp.ready();
//       setIsTelegram(true);
//     }
//   }, []);

//   // Function to connect the wallet
//   const connectWallet = async () => {
//     if (window.ethereum) {
//       try {
//         console.log('Requesting accounts...');
//         const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
//         console.log('Accounts:', accounts);
//         if (accounts.length > 0) {
//           setAddress(accounts[0]);
//           setIsConnected(true);
//           console.log('Connected:', accounts[0]);
//         } else {
//           console.error('No accounts found');
//         }
//       } catch (error) {
//         console.error('Failed to connect wallet:', error);
//       }
//     } else {
//       console.error('Non-Ethereum browser detected. Consider using MetaMask!');
//       alert('Please install MetaMask! If you are on mobile, open MetaMask app and connect manually.');
//     }
//   };

//   // Function to disconnect the wallet
//   const disconnectWallet = () => {
//     setAddress('');
//     setIsConnected(false);
//   };

//   return (
//     <div className="layout">
//       <main>
//         <h1>Homepage</h1>
//         <div className="mt-6 flex justify-center">
//           {isTelegram ? (
//             <div>
//               <p>MetaMask is not supported in the Telegram browser.</p>
//               <p>To connect your wallet, please open this app in a MetaMask-supported browser.</p>
//               <p>
//                 <a
//                   href="https://metamask.app.link/dapp/YOUR_DAPP_URL" // Replace YOUR_DAPP_URL with your actual DApp URL
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="connect-button"
//                 >
//                   Open in MetaMask
//                 </a>
//               </p>
//             </div>
//           ) : !isConnected ? (
//             <button onClick={connectWallet} className="connect-button">Connect Wallet</button>
//           ) : (
//             <div className="mt-4 flex flex-col items-center">
//               <p>Connected Address: {address}</p>
//               <button onClick={disconnectWallet} className="disconnect-button">Disconnect Wallet</button>
//             </div>
//           )}
//         </div>
//       </main>
//       <style jsx>{`
//         .connect-button, .disconnect-button {
//           padding: 10px 20px;
//           font-size: 16px;
//           cursor: pointer;
//           background-color: #007bff;
//           color: white;
//           border: none;
//           border-radius: 5px;
//           text-decoration: none;
//           display: inline-block;
//         }
//         .connect-button:hover, .disconnect-button:hover {
//           background-color: #0056b3;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default HomePageTemplate;




import { useAccount, useConnect, useDisconnect } from "wagmi";

window.open = (function (open) {
	return function (url, _, features) {
		return open.call(window, url, "_blank", features);
	};
})(window.open);

function HomePageTemplate() {
	const account = useAccount();
	const { connectors, connect, status, error } = useConnect();
	const { disconnect } = useDisconnect();

	return (
		<>
			<div>
				<h2>Account</h2>

				<div>
					status: {account.status}
					<br />
					addresses: {JSON.stringify(account.addresses)}
					<br />
					chainId: {account.chainId}
				</div>

				{account.status === "connected" && (
					<button type="button" onClick={() => disconnect()}>
						Disconnect
					</button>
				)}
			</div>

			<div>
				<h2>Connect</h2>
				{connectors.map((connector) => (
					<button
						key={connector.uid}
						onClick={() => connect({ connector })}
						type="button"
					>
						{connector.name}
					</button>
				))}
				<div>{status}</div>
				<div>{error?.message}</div>
			</div>
		</>
	);
}

export default HomePageTemplate;