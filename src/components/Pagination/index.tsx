import React, { useId } from 'react'
import { ChevronLeftIcon, ChevronRightIcon, MoreHorizontalIcon } from '../Icon'

interface IPagination {
    className?: string
    totalPage: number
    initialPage: number
    title?: React.ReactElement
}

interface IPage {
    id: string
    node: React.ReactNode
}

function Pagination({ className, initialPage, totalPage, title }: IPagination) {
    const pages: IPage[] = [...Array(totalPage).keys()].map(item => ({
        id: useId(),
        node: item + 1
    }))
    pages.unshift({
        id: useId(),
        node: <MoreHorizontalIcon />
    })

    let pagesRender = [1, 2, 0, totalPage]

    return (
        <div className={`p-6 shadow-inner text-sm font-semibold flex justify-between items-center ${className}`}>
            {title}
            <ul className='flex items-center'>
                <li className='flex items-center justify-center mx-1 transition rounded cursor-pointer h-9 w-9 hover:bg-primary-blue hover:text-white'>
                    <ChevronLeftIcon className='w-4 h-4' />
                </li>
                {pagesRender.map(item => (
                    <li
                        key={pages[item].id}
                        className={`mx-1 h-9 w-9 flex justify-center items-center ${
                            item === initialPage
                                ? 'bg-primary-blue text-white hover:opacity-75'
                                : item !== 0 && 'text-neutrals-07 hover:bg-primary-blue hover:text-white'
                        } rounded cursor-pointer transition-opacity`}
                    >
                        {pages[item].node}
                    </li>
                ))}
                <li className='flex items-center justify-center mx-1 transition rounded cursor-pointer h-9 w-9 hover:bg-primary-blue hover:text-white'>
                    <ChevronRightIcon className='w-4 h-4' />
                </li>
            </ul>
        </div>
    )
}

export default Pagination
