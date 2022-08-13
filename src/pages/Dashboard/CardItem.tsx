import React from 'react'
import { ArrowLeftDownOutlineIcon, ArrowRightUpOutlineIcon } from '../../components/Icon'

interface ICardItem {
    icon: JSX.Element
    title: string
    value: string
    percent: Number
}

function CardItem({ icon, title, value, percent }: ICardItem) {
    return (
        <div className='flex col-span-1 bg-neutrals-01 shadow h-28 p-6 cursor-pointer'>
            {icon}
            <div className='ml-4 flex flex-col flex-1'>
                <span className='text-base text-neutrals-05 font-semibold mb-[6px]'>{title}</span>
                <div className='flex justify-between'>
                    <span className='font-bold text-2xl'>{value}</span>
                    <span
                        className={`${
                            percent < 0 ? 'text-primary-red' : 'text-secondary-green'
                        } font-semibold text-base flex items-center`}
                    >
                        {percent < 0 ? (
                            <ArrowLeftDownOutlineIcon className='w-4 h-4 mr-2' />
                        ) : (
                            <ArrowRightUpOutlineIcon className='w-4 h-4 mr-2' />
                        )}
                        {`${percent > 0 ? '+' : ''}` + String(percent)}%
                    </span>
                </div>
            </div>
        </div>
    )
}

export default CardItem
