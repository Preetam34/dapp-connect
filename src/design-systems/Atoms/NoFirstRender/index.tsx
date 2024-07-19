import React from 'react'
import { PropsWithChildren, useState, useEffect } from 'react'

import Spinner from '../Spinner'

const NoFirstRender: React.FC<PropsWithChildren> = ({ children }) => {
  const [hydrated, setHydrated] = useState<boolean>(false)

  useEffect(() => {
    setHydrated(true)
  }, [])

  return (
    <>
      {hydrated ? (
        children
      ) : (
        <div className="fixed left-0 top-0 flex h-screen w-screen items-center justify-center">
          <Spinner className="h-10 w-10" />
        </div>
      )}
    </>
  )
}

export default NoFirstRender
