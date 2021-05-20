import React from 'react'
import NavBar from './NavBar'
import Redes from "../components/Redes"

const Layout = (props) => {
    return (
        <>
            <NavBar />
            {props.children}
            <Redes />
        </>
    )
}

export default Layout
