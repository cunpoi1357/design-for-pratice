import React from 'react'

function AuthLayout({ children }: { children: JSX.Element }) {
    return (
        <div className='w-screen h-screen flex justify-center items-center'>
            <div className='w-[700px] px-[100px] py-[50px] flex flex-col items-center bg-[#FCFCFD] form-shadow'>
                {children}
            </div>
        </div>
    )
}

export default AuthLayout
