import React from 'react'
import { NavLink } from 'react-router-dom'
import { IMenuItem } from '.'

function MenuItem({ item }: { item: IMenuItem }) {
    const Icon = item.icon
    return (
        <li className='flex'>
            <NavLink
                to={item.path}
                className={({ isActive }) => (isActive ? 'menu-item menu-item--active' : 'menu-item ')}
            >
                <Icon />
                <span className='ml-6 font-semibold text-base'>{item.label}</span>
            </NavLink>
        </li>
    )
}

export default MenuItem
