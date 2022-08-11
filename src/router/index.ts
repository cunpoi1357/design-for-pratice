import React, { Children } from 'react'
import config from '../config'

import AuthLayout from '../layouts/AuthLayout'

import Home from '../pages/Home'
import Login from '../pages/Login'
import Dashboard from '../pages/Dashboard'
import Store from '../pages/Store'
import Product from '../pages/Product'
import StoreList from '../pages/Store/List'
import StoreImport from '../pages/Store/Import'
import StoreExport from '../pages/Store/Export'
import StoreCheck from '../pages/Store/Check'
import Staff from '../pages/Staff'
import Settings from '../pages/Settings'
import BusinessCustomer from '../pages/Business/Customer'
import BusinessSell from '../pages/Business/Sell'
import BusinessOrder from '../pages/Business/Order'
import BusinessPrice from '../pages/Business/Price'
import AccountancyImport from '../pages/Accountancy/Import'
import AccountancyExport from '../pages/Accountancy/Export'
import ReportSell from '../pages/Report/Sell'
import ReportOrder from '../pages/Report/Order'
import ReportOrderDebt from '../pages/Report/OrderDebt'
import ReportCustomerDebt from '../pages/Report/CustomerDebt'

interface Route {
    path: string
    component: React.FC
    layout?: React.FC<{
        children: JSX.Element
    }>
}

const publicRoutes: Route[] = [
    {
        path: config.routes.home,
        component: Home
    },
    {
        path: config.routes.login,
        component: Login,
        layout: AuthLayout
    },
    {
        path: config.routes.dashboard,
        component: Dashboard
    },
    {
        path: config.routes.store,
        component: Store
    },
    {
        path: config.routes.storeList,
        component: StoreList
    },
    {
        path: config.routes.storeImport,
        component: StoreImport
    },
    {
        path: config.routes.storeExport,
        component: StoreExport
    },
    {
        path: config.routes.storeCheck,
        component: StoreCheck
    },
    {
        path: config.routes.product,
        component: Product
    },
    {
        path: config.routes.businessCustomer,
        component: BusinessCustomer
    },
    {
        path: config.routes.businessPrice,
        component: BusinessPrice
    },
    {
        path: config.routes.businessOrder,
        component: BusinessOrder
    },
    {
        path: config.routes.businessSell,
        component: BusinessSell
    },
    {
        path: config.routes.staff,
        component: Staff
    },
    {
        path: config.routes.accountancyImport,
        component: AccountancyImport
    },
    {
        path: config.routes.accountancyExport,
        component: AccountancyExport
    },
    {
        path: config.routes.reportSell,
        component: ReportSell
    },
    {
        path: config.routes.reportOrder,
        component: ReportOrder
    },
    {
        path: config.routes.reportOrderDebt,
        component: ReportOrderDebt
    },
    {
        path: config.routes.reportCustomerDebt,
        component: ReportCustomerDebt
    },
    {
        path: config.routes.settings,
        component: Settings
    }
]

export { publicRoutes }
