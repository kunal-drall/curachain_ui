'use client'

import './globals.css'
import Header from '@/components/Header'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'
import { ReactQueryProvider } from './react-query-provider'
import AppWalletProvider from '@/components/AppWalletProvider'
import { Provider } from 'react-redux'
import { store } from '@/store'

const metadata = {
  title: 'fundus',
  description: 'Generated by create-solana-dapp',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-white">
        <ReactQueryProvider>
          <Provider store={store}>
            <AppWalletProvider>
              <Header />
              <main className="max-w-6xl mx-auto min-h-screen bg-white">
                <div className=" h-24" />
                {children}
                <div className=" h-24" />
              </main>

              <ToastContainer
                position="bottom-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
              />
            </AppWalletProvider>
          </Provider>
        </ReactQueryProvider>
      </body>
    </html>
  )
}
