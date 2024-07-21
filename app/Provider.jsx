import React from 'react'
import Header from './_components/Header'

const Provider = ({ children }) => {
    return (
        <div className='mt-26'>
            <Header />
            {children}
        </div>
    )
}

export default Provider