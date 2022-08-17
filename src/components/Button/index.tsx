import React from 'react'

interface IButton {
    className?: String
    icon?: React.ReactNode
    children: React.ReactNode
    onClick?: () => void
}

function Button({ className, icon, children, onClick }: IButton) {
    return (
        <button
            className={`${className} text-white flex gap-3 justify-center items-center p-4 hover:opacity-95 rounded transition-opacity`}
            onClick={onClick}
        >
            {icon}
            <span className='text-base font-bold'>{children}</span>
        </button>
    )
}

export default Button
