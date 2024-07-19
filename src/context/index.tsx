import React, { ReactNode } from 'react'

import Providers from './wagmiContext'

// Modify ContextProvider to receive props of type AppPropsWithChildren
export function ContextProvider({ children }: { children: ReactNode }) {
  return <Providers>{children}</Providers>
}
