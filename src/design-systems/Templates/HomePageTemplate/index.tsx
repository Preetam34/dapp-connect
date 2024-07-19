'use client'
import { useAccount } from 'wagmi'

import Typography from 'design-systems/Atoms/Typography'
import Layout from 'design-systems/Organisms/Layout'

const HomePageTemplate: React.FC = () => {
  const { address, isConnected } = useAccount()

  return (
    <Layout>
      <Typography size="h1">Homepage</Typography>
      <div className="mt-6 flex justify-center">
        <w3m-button />
      </div>

      {isConnected && <Typography size="paragraph">Connected Address: {address}</Typography>}
    </Layout>
  )
}

export default HomePageTemplate
