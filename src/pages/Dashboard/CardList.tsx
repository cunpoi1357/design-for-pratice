import React from 'react'
import { DocumentIcon, MoneyIcon, ThreeUsersIcon } from '../../components/Icon'
import CardItem from './CardItem'

function CardList() {
    return (
        <div className='grid grid-cols-4 gap-8 mb-6'>
            <CardItem
                icon={
                    <div className='w-[60px] h-[60px] flex items-center justify-center rounded-lg bg-secondary-blue/[0.08]'>
                        <MoneyIcon className='w-9 h-9 text-secondary-blue' />
                    </div>
                }
                title='Doanh thu'
                value='150.000.000'
                percent={-3.5}
            />
            <CardItem
                icon={
                    <div className='w-[60px] h-[60px] flex items-center justify-center rounded-lg bg-[#FFB600]/[0.08]'>
                        <ThreeUsersIcon className='w-9 h-9 text-[#FFB600]' />
                    </div>
                }
                title='Khách hàng'
                value='3.333'
                percent={3.5}
            />
            <CardItem
                icon={
                    <div className='w-[60px] h-[60px] flex items-center justify-center rounded-lg bg-secondary-violet/[0.08]'>
                        <DocumentIcon className='w-9 h-9 text-secondary-violet' />
                    </div>
                }
                title='Đơn hàng'
                value='15.000'
                percent={-3.5}
            />
            <CardItem
                icon={
                    <div className='w-[60px] h-[60px] flex items-center justify-center rounded-lg bg-secondary-green/[0.08]'>
                        <DocumentIcon className='w-9 h-9 text-secondary-green' />
                    </div>
                }
                title='Sản phẩm'
                value='250'
                percent={3.5}
            />
        </div>
    )
}

export default CardList
