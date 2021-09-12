import React from 'react'
import { Divider } from '@material-ui/core'
import { Footer } from './Footer'
import { Header } from './Header'

export const Layout = ({ children }) => {
    return (
        <>
            <Header />
            <Divider />
            {children}
            <Divider />
            <Footer />
        </>
    )
}
