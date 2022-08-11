import React, { useState } from 'react'

import {
    CustomerIcon,
    DashboardIcon,
    DotIcon,
    IIcon,
    OrdersIcon,
    ProductIcon,
    ReportIcon,
    SettingsIcon,
    StoreIcon,
    TrendingUpIcon
} from '../../../components/Icon'
import config from '../../../config'
import MenuItem from './MenuItem'
import SubMenu from './SubMenu'

export interface IMenuItem {
    label: string
    icon: React.FC<IIcon>
    path: string
    children?: {
        label: string
        icon: React.FC<IIcon>
        path: string
    }[]
}

const MENU_ITEMS: IMenuItem[] = [
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
        path: config.routes.business,
        children: [
            {
                label: 'Khách hàng',
                icon: DotIcon,
                path: config.routes.businessCustomer
            },
            {
                label: 'Đơn giá',
                icon: DotIcon,
                path: config.routes.businessPrice
            },
            {
                label: 'Đơn đặt hàng',
                icon: DotIcon,
                path: config.routes.businessOrder
            },
            {
                label: 'Đơn bán hàng',
                icon: DotIcon,
                path: config.routes.businessSell
            }
        ]
    },
    {
        label: 'Kế toán',
        icon: OrdersIcon,
        path: config.routes.accountancy,
        children: [
            {
                label: 'Phiếu thu',
                icon: DotIcon,
                path: config.routes.accountancyImport
            },
            {
                label: 'Phiếu chi',
                icon: DotIcon,
                path: config.routes.accountancyExport
            }
        ]
    },
    {
        label: 'Báo cáo',
        icon: ReportIcon,
        path: config.routes.report,
        children: [
            {
                label: 'Đơn bán hàng',
                icon: DotIcon,
                path: config.routes.reportSell
            },
            {
                label: 'Đơn đặt hàng',
                icon: DotIcon,
                path: config.routes.reportOrder
            },
            {
                label: 'Công nợ đơn hàng',
                icon: DotIcon,
                path: config.routes.reportOrderDebt
            },
            {
                label: 'Công nợ khách hàng',
                icon: DotIcon,
                path: config.routes.reportCustomerDebt
            }
        ]
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
    const [showSubMenu, setShowSubMenu] = useState<String | null>(null)

    const handleShowSubMenu = (path: String | null) => {
        if (path === showSubMenu) {
            setShowSubMenu(null)
        } else {
            setShowSubMenu(path)
        }
    }

    return (
        <aside className='col-span-1 w-[350px] h-screen bg-secondary pt-6'>
            <h2 className='text-center font-semibold text-white pb-8 mb-8 border-b border-neutrals-05'>Việt Hoàng</h2>
            <ul>
                {MENU_ITEMS.map(item => {
                    if (item.children) {
                        return (
                            <SubMenu
                                key={item.path}
                                item={item}
                                isShowSubMenu={showSubMenu === item.path}
                                setShowSubMenu={() => handleShowSubMenu(item.path)}
                            />
                        )
                    } else {
                        return <MenuItem key={item.path} item={item} />
                    }
                })}
            </ul>
        </aside>
    )
}

export default Sidebar
