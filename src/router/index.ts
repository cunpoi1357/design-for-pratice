import React, { Children } from 'react'
import config from '../config'

import AuthLayout from '../layouts/AuthLayout'

import Home from '../pages/Home'
import Login from '../pages/Login'
import Dashboard from '../pages/Dashboard'
import Store from '../pages/Store'
import Product from '../pages/Product'
import StoreList from '../pages/StoreList'
import StoreImport from '../pages/StoreImport'
import StoreExport from '../pages/StoreExport'
import StoreCheck from '../pages/StoreCheck'

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
    }
]

export { publicRoutes }
