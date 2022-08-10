import React from 'react'
import { NavLink, useMatch } from 'react-router-dom'

import {
    CustomerIcon,
    DashboardIcon,
    DotIcon,
    OrdersIcon,
    ProductIcon,
    ReportIcon,
    SettingsIcon,
    StoreIcon,
    TrendingUpIcon
} from '../../../components/Icon'
import config from '../../../config'

interface Menu_item {
    label: string
    icon: JSX.Element
    path: string
    children?: {
        label: string
        icon: JSX.Element
        active: boolean
    }
}

const MENU_ITEMS = [
    {
        label: 'Tổng quan',
        icon: DashboardIcon,
        path: config.routes.dashboard
    },
    {
        label: 'Kho',
        icon: StoreIcon,
        path: config.routes.store,
        children: [
            {
                label: 'Danh mục kho',
                icon: DotIcon,
                path: config.routes.storeList
            },
            {
                label: 'Nhập kho',
                icon: DotIcon,
                path: config.routes.storeImport
            },
            {
                label: 'Xuất kho',
                icon: DotIcon,
                path: config.routes.storeExport
            },
            {
                label: 'Kiểm kê',
                icon: DotIcon,
                path: config.routes.storeCheck
            }
        ]
    },
    {
        label: 'Sản phẩm',
        icon: ProductIcon,
        path: config.routes.product
    },
    {
        label: 'Kinh doanh',
        icon: TrendingUpIcon,
        children: []
    },
    {
        label: 'Kế toán',
        icon: OrdersIcon,
        children: []
    },
    {
        label: 'Báo cáo',
        icon: ReportIcon,
        children: []
    },
    {
        label: 'Nhân viên',
        icon: CustomerIcon,
        path: config.routes.staff
    },
    {
        label: 'Cài đặt',
        icon: SettingsIcon,
        path: config.routes.settings
    }
]

function Sidebar() {
    return (
        <aside className='col-span-1 w-[350px] h-screen bg-secondary pt-6'>
            <h2 className='text-center font-semibold text-white pb-8 mb-8 border-b border-neutrals-05'>Việt Hoàng</h2>
            <ul>
                {MENU_ITEMS.map((item, index) => {
                    const Icon = item.icon
                    const match = useMatch(`${item.path}/*`)

                    if (item.children) {
                        return (
                            <li key={index} className='flex flex-col'>
                                <div className={`menu-item ${match && 'text-[#FCFCFD] font-bold'}`}>
                                    <Icon />
                                    <span className='ml-6 font-semibold text-base'>{item.label}</span>
                                </div>
                                <ul>
                                    {item.children.map((item, index) => {
                                        const Icon = item.icon
                                        return (
                                            <li key={index} className='flex'>
                                                <NavLink
                                                    to={item.path}
                                                    className={({ isActive }) =>
                                                        isActive ? 'menu-item menu-item--active' : 'menu-item '
                                                    }
                                                >
                                                    <Icon />
                                                    <span className='ml-6 font-semibold text-base'>{item.label}</span>
                                                </NavLink>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </li>
                        )
                    } else {
                        return (
                            <li key={index} className='flex'>
                                <NavLink
                                    to={item.path}
                                    className={({ isActive }) =>
                                        isActive ? 'menu-item menu-item--active' : 'menu-item '
                                    }
                                >
                                    <Icon />
                                    <span className='ml-6 font-semibold text-base'>{item.label}</span>
                                </NavLink>
                            </li>
                        )
                    }
                })}
            </ul>
        </aside>
    )
}

export default Sidebar
