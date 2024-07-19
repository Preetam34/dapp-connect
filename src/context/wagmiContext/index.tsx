'use client'

import { isMobile } from 'react-device-detect'
import { WagmiProvider, cookieToInitialState } from 'wagmi'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactNode } from 'react'
import { ThemeProvider, useTheme } from 'next-themes'
import { ToastContainer } from 'react-toastify'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { createWeb3Modal } from '@web3modal/wagmi/react'

import 'react-toastify/dist/ReactToastify.css'
import { config, projectId } from './config'

export default function Providers({ children }: { children: ReactNode }) {
  if (!projectId) throw new Error('Project ID is not defined')
  const initialState = cookieToInitialState(config)
  const queryClient = new QueryClient()
  const { theme } = useTheme()

  const mobileSpecificWalletId = 'c57ca95b47569778a828d19178114f4db188b89b763c899ba0be274e97267d96'
  const otherWalletIds = [
    'e7c4d26541a7fd84dbdfa9922d3ad21e936e13a7a0e44385d44f006139e44d3b',
    'fd20dc426fb37566d803205b19bbc1d4096b248ac04548e3cfb6b3a38bd033aa',
  ]

  // Modify the wallet IDs based on device type
  const includeWalletIds = isMobile ? [...otherWalletIds, mobileSpecificWalletId] : otherWalletIds

  // createWeb3Modal modal
  createWeb3Modal({
    themeMode: theme as ThemeMode,
    themeVariables: {
      '--w3m-font-family': 'Poppins, sans-serif',
      '--w3m-font-size-master': '11px',
    },
    wagmiConfig: config,
    allWallets: 'HIDE',
    projectId: projectId,
    enableAnalytics: true,
    includeWalletIds: includeWalletIds,
  })

  return (
    <ThemeProvider attribute="class" defaultTheme="system" storageKey="next-theme">
      <WagmiProvider config={config} initialState={initialState}>
        <QueryClientProvider client={queryClient}>
          {children}
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </WagmiProvider>
      <ToastContainer />
    </ThemeProvider>
  )
}
