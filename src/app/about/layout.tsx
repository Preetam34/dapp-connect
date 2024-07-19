import { Metadata } from 'next'
import { Suspense } from 'react'

export const metadata: Metadata = {
  title: 'About page',
  description: 'About Data',
}

export interface AboutProps {
  children: React.ReactNode
}

const AboutLayout: React.FC<AboutProps> = ({ children }) => {
  return <Suspense fallback="Loading...">{children}</Suspense>
}

export default AboutLayout
