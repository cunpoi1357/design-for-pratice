import React from 'react'
import { v4 as uuidv4 } from 'uuid'

import BarChart from './BarChart'
import CardList from './CardList'
import Table, { ITableColumns } from '../../components/Table'
import DoughnutChart from './DoughnutChart'
import { ChevronLeftIcon, ChevronRightIcon, MoreHorizontalIcon } from '../../components/Icon'
import Pagination from '../../components/Pagination'
import Header from '../../components/Header'
import Content from '../../components/Content'

const orderColumns: ITableColumns[] = [
    {
        key: 'orderId',
        label: 'Đơn hàng',
        slot: 2
    },
    {
        key: 'customer',
        label: 'Khách hàng',
        slot: 3
    },
    {
        key: 'staff',
        label: 'Phụ trách',
        slot: 2
    },
    {
        key: 'total',
        label: 'Tổng tiền',
        slot: 2
    },
    {
        key: 'status',
        label: 'Trạng thái',
        slot: 3
    }
]

const orderList = [
    {
        id: uuidv4(),
        orderId: 'DH2112',
        customer: 'Công ty Hồng thái',
        staff: 'Admin',
        total: '45.560.000',
        status: 'Đã thanh toán'
    },
    {
        id: uuidv4(),
        orderId: 'DH2112',
        customer: 'Công ty Hồng thái',
        staff: 'Admin',
        total: '45.560.000',
        status: 'Chưa thanh toán'
    },
    {
        id: uuidv4(),
        orderId: 'DH2112',
        customer: 'Công ty Hồng thái',
        staff: 'Admin',
        total: '45.560.000',
        status: 'Đã thanh toán'
    },
    {
        id: uuidv4(),
        orderId: 'DH2112',
        customer: 'Công ty Hồng thái',
        staff: 'Admin',
        total: '45.560.000',
        status: 'Chưa thanh toán'
    },
    {
        id: uuidv4(),
        orderId: 'DH2112',
        customer: 'Công ty Hồng thái',
        staff: 'Admin',
        total: '45.560.000',
        status: 'Đã thanh toán'
    }
]

const staffColumns: ITableColumns[] = [
    {
        key: 'staff',
        label: 'Nhân viên',
        slot: 4
    },
    {
        key: 'phoneNumber',
        label: 'Số điện thoại',
        slot: 3
    },
    {
        key: 'turnover',
        label: 'Doanh số',
        slot: 2
    }
]

const staffList = [
    {
        id: uuidv4(),
        staff: 'Nguyễn Việt Hoàng',
        phoneNumber: '0123456789',
        turnover: '19.000.000'
    },
    {
        id: uuidv4(),
        staff: 'Nguyễn Việt Hoàng',
        phoneNumber: '0123456789',
        turnover: '19.000.000'
    },
    {
        id: uuidv4(),
        staff: 'Nguyễn Việt Hoàng',
        phoneNumber: '0123456789',
        turnover: '19.000.000'
    },
    {
        id: uuidv4(),
        staff: 'Nguyễn Việt Hoàng',
        phoneNumber: '0123456789',
        turnover: '19.000.000'
    },
    {
        id: uuidv4(),
        staff: 'Nguyễn Việt Hoàng',
        phoneNumber: '0123456789',
        turnover: '19.000.000'
    },

    {
        id: uuidv4(),
        staff: 'Nguyễn Việt Hoàng',
        phoneNumber: '0123456789',
        turnover: '19.000.000'
    },
    {
        id: uuidv4(),
        staff: 'Nguyễn Việt Hoàng',
        phoneNumber: '0123456789',
        turnover: '19.000.000'
    },
    {
        id: uuidv4(),
        staff: 'Nguyễn Việt Hoàng',
        phoneNumber: '0123456789',
        turnover: '19.000.000'
    },
    {
        id: uuidv4(),
        staff: 'Nguyễn Việt Hoàng',
        phoneNumber: '0123456789',
        turnover: '19.000.000'
    },
    {
        id: uuidv4(),
        staff: 'Nguyễn Việt Hoàng',
        phoneNumber: '0123456789',
        turnover: '19.000.000'
    }
]

function Dashboard() {
    const orderListRender = orderList.map(item => ({
        ...item,
        orderId: <span className='text-[#3282FA] hover:underline cursor-pointer'>{item.orderId}</span>,
        status:
            item.status === 'Đã thanh toán' ? (
                <span className='px-2 py-1 border rounded bg-secondary-green/5 text-secondary-green border-secondary-green'>
                    {item.status}
                </span>
            ) : (
                <span className='px-2 py-1 border rounded bg-primary-red/5 text-primary-red border-primary-red'>
                    {item.status}
                </span>
            )
    }))

    const staffListRender = staffList.map(item => ({
        ...item,
        staff: (
            <div className='flex items-center'>
                <img
                    src='http://yt3.ggpht.com/wgneNTiW753q5G6XMnjyNLAzReR4TVFJryTKTpIqJefrKMyhABPwfnyNWIoT5NNGstFlva1tgw=s176-c-k-c0x00ffffff-no-rj-mo'
                    alt='avatar'
                    className='w-8 h-8 mr-4 rounded-full'
                />
                <span>{item.staff}</span>
            </div>
        )
    }))

    return (
        <>
            <Header title='Tổng quan' />
            <Content>
                <CardList />
                <div className='grid grid-cols-7 gap-8'>
                    <div className='flex flex-col col-span-4 gap-6'>
                        <BarChart />
                        <Table
                            className='bg-neutrals-01'
                            title='Đơn bán hàng'
                            to='/report/sell'
                            columns={orderColumns}
                            data={orderListRender}
                            hasIndex
                        />
                        <Table
                            className='bg-neutrals-01'
                            title='Đơn đặt hàng'
                            to='/report/order'
                            columns={orderColumns}
                            data={orderListRender}
                            hasIndex
                        />
                    </div>
                    <div className='flex flex-col col-span-3 gap-6'>
                        <Table
                            hasIndex
                            className='bg-neutrals-01'
                            title='Nhân viên'
                            to='/staff'
                            columns={staffColumns}
                            data={staffListRender}
                            Footer={
                                <Pagination
                                    initialPage={1}
                                    totalPage={5}
                                    title={
                                        <span>
                                            Có <span className='text-secondary-blue'>{15}</span> nhân viên
                                        </span>
                                    }
                                />
                            }
                        />
                        <DoughnutChart />
                    </div>
                </div>
            </Content>
        </>
    )
}

export default Dashboard
