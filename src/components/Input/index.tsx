import React from 'react'

interface IInput {
    className?: string
    placeholder: string
    onChange?: (value: any) => void
    id?: string
    type: string
}

function Input({ className, placeholder, onChange, id, type }: IInput) {
    return (
        <input
            type={type}
            className={`${className} p-4 outline-none placeholder-neutrals-04 border border-neutrals-03 rounded`}
            placeholder={placeholder}
            onChange={onChange}
            id={id}
        />
    )
}

export default Input
