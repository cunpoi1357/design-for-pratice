import React from 'react'

interface IContent {
    children: React.ReactNode
    className?: string
}

function Content({ children, className }: IContent) {
    return <div className={`${className} py-[30px] px-10 overflow-scroll h-[calc(100vh-90px)]`}>{children}</div>
}

export default Content
