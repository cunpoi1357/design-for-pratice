import React from 'react'
import Sidebar from '../component/Sidebar'

function DefaultLayout({ children }: { children: JSX.Element }) {
    return (
        <div className='flex'>
            <Sidebar />
            <div>
                <div>{children}</div>
            </div>
        </div>
    )
}

export default DefaultLayout
