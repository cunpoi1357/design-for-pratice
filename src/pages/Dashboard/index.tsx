import { useId } from 'react'
import BarChart from './BarChart'
import CardList from './CardList'
import Table, { ITableColumns } from '../../components/Table'
import DoughnutChart from './DoughnutChart'
import { ChevronLeftIcon, ChevronRightIcon, MoreHorizontalIcon } from '../../components/Icon'

const orderColumns: ITableColumns[] = [
    {
        key: 'id',
        label: 'STT',
        slot: 1
    },
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
        id: 1,
        orderId: 'DH2112',
        customer: 'Công ty Hồng thái',
        staff: 'Admin',
        total: '45.560.000',
        status: 'Đã thanh toán'
    },
    {
        id: 2,
        orderId: 'DH2112',
        customer: 'Công ty Hồng thái',
        staff: 'Admin',
        total: '45.560.000',
        status: 'Chưa thanh toán'
    },
    {
        id: 3,
        orderId: 'DH2112',
        customer: 'Công ty Hồng thái',
        staff: 'Admin',
        total: '45.560.000',
        status: 'Đã thanh toán'
    },
    {
        id: 4,
        orderId: 'DH2112',
        customer: 'Công ty Hồng thái',
        staff: 'Admin',
        total: '45.560.000',
        status: 'Chưa thanh toán'
    },
    {
        id: 5,
        orderId: 'DH2112',
        customer: 'Công ty Hồng thái',
        staff: 'Admin',
        total: '45.560.000',
        status: 'Đã thanh toán'
    }
]

const staffColumns: ITableColumns[] = [
    {
        key: 'id',
        label: 'STT',
        slot: 1
    },
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
        id: 1,
        staff: 'Nguyễn Việt Hoàng',
        phoneNumber: '0123456789',
        turnover: '19.000.000'
    },
    {
        id: 2,
        staff: 'Nguyễn Việt Hoàng',
        phoneNumber: '0123456789',
        turnover: '19.000.000'
    },
    {
        id: 3,
        staff: 'Nguyễn Việt Hoàng',
        phoneNumber: '0123456789',
        turnover: '19.000.000'
    },
    {
        id: 4,
        staff: 'Nguyễn Việt Hoàng',
        phoneNumber: '0123456789',
        turnover: '19.000.000'
    },
    {
        id: 5,
        staff: 'Nguyễn Việt Hoàng',
        phoneNumber: '0123456789',
        turnover: '19.000.000'
    },

    {
        id: 6,
        staff: 'Nguyễn Việt Hoàng',
        phoneNumber: '0123456789',
        turnover: '19.000.000'
    },
    {
        id: 7,
        staff: 'Nguyễn Việt Hoàng',
        phoneNumber: '0123456789',
        turnover: '19.000.000'
    },
    {
        id: 8,
        staff: 'Nguyễn Việt Hoàng',
        phoneNumber: '0123456789',
        turnover: '19.000.000'
    },
    {
        id: 9,
        staff: 'Nguyễn Việt Hoàng',
        phoneNumber: '0123456789',
        turnover: '19.000.000'
    },
    {
        id: 10,
        staff: 'Nguyễn Việt Hoàng',
        phoneNumber: '0123456789',
        turnover: '19.000.000'
    }
]

function Dashboard() {
    const orderListRender = orderList.map(item => ({
        ...item,
        orderId: <span className='text-[#3282FA]'>{item.orderId}</span>,
        status:
            item.status === 'Đã thanh toán' ? (
                <span className='bg-secondary-green/5 py-1 px-2 rounded text-secondary-green border border-secondary-green'>
                    {item.status}
                </span>
            ) : (
                <span className='bg-primary-red/5 py-1 px-2 rounded text-primary-red border border-primary-red'>
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
                    className='w-8 h-8 rounded-full mr-4'
                />
                <span>{item.staff}</span>
            </div>
        )
    }))

    return (
        <div>
            <CardList />
            <div className='grid grid-cols-7 gap-8'>
                <div className='col-span-4 flex flex-col gap-6'>
                    <BarChart />
                    <Table
                        className='bg-neutrals-01'
                        title='Đơn bán hàng'
                        to='/report/sell'
                        columns={orderColumns}
                        data={orderListRender}
                    />
                    <Table
                        className='bg-neutrals-01'
                        title='Đơn đặt hàng'
                        to='/report/order'
                        columns={orderColumns}
                        data={orderListRender}
                    />
                </div>
                <div className='col-span-3 flex flex-col gap-6'>
                    <Table
                        className='bg-neutrals-01'
                        title='Nhân viên'
                        to='/staff'
                        columns={staffColumns}
                        data={staffListRender}
                        Footer={() => (
                            <footer className='p-6 shadow-inner text-sm font-semibold flex justify-between items-center'>
                                <span>
                                    Có <span className='text-secondary-blue'>50</span> nhân viên
                                </span>
                                <ul className='flex items-center'>
                                    {[
                                        {
                                            id: useId(),
                                            node: <ChevronLeftIcon className='w-4 h-4' />,
                                            active: false
                                        },
                                        {
                                            id: useId(),
                                            node: 1,
                                            active: true
                                        },
                                        {
                                            id: useId(),
                                            node: 2,
                                            active: false
                                        },
                                        {
                                            id: useId(),
                                            node: <MoreHorizontalIcon className='w-4 h-4' />,
                                            active: false
                                        },
                                        {
                                            id: useId(),
                                            node: 5,
                                            active: false
                                        },
                                        {
                                            id: useId(),
                                            node: <ChevronRightIcon className='w-4 h-4' />,
                                            active: false
                                        }
                                    ].map(item => (
                                        <li
                                            key={item.id}
                                            className={`mx-1 h-9 w-9 flex justify-center items-center ${
                                                item.active ? 'bg-primary-blue text-white' : 'text-neutrals-07'
                                            } rounded cursor-pointer hover:opacity-75 transition-opacity`}
                                        >
                                            {item.node}
                                        </li>
                                    ))}
                                </ul>
                            </footer>
                        )}
                    />
                    <div>
                        <DoughnutChart />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard
