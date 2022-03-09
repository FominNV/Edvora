import { FC, ReactNode } from 'react'
import Head from 'next/head'
import Header from '../components/Header'
import NavBar from '../components/NavBar'

interface IMainLayoutProps {
  children: ReactNode
  title: string
}

const MainLayout: FC<IMainLayoutProps> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <Header />
      <NavBar />
      {children}
    </>
  )
}

export default MainLayout
