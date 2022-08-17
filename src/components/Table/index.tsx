import { Link } from 'react-router-dom'

export interface ITableColumns {
    key: string
    label: React.ReactNode
    slot: Number
}

interface ITable {
    title?: string
    to?: string
    className?: string
    columns: ITableColumns[]
    data: any[]
    Footer?: React.ReactElement
    hasIndex?: boolean
}

function Table({ title, to, className, columns, data, Footer, hasIndex }: ITable) {
    const girdColumnTotal = columns.reduce((total, item) => Number(total) + Number(item.slot), hasIndex ? 1 : 0)

    return (
        <div className={`${className} pb-1 rounded`}>
            {title && to && (
                <header className='flex justify-between w-full p-6'>
                    <h3 className='inline-block font-bold'>{title}</h3>
                    <Link to={to} className='inline-block text-base font-semibold text-secondary-blue'>
                        Xem tất cả
                    </Link>
                </header>
            )}

            <table className='w-full'>
                <thead>
                    <tr
                        className='grid bg-neutrals-03'
                        style={{
                            gridTemplateColumns: `repeat(${girdColumnTotal},minmax(0,1fr))`
                        }}
                    >
                        {hasIndex && (
                            <td key='index' className='col-span-1 p-4 text-base font-semibold'>
                                STT
                            </td>
                        )}
                        {columns.map(column => (
                            <td
                                key={column.key}
                                style={{
                                    gridColumn: `span ${column.slot} / span ${column.slot}`
                                }}
                                className='p-4 text-base font-semibold'
                            >
                                {column.label}
                            </td>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <tr
                            key={item.id}
                            style={{
                                gridTemplateColumns: `repeat(${girdColumnTotal},minmax(0,1fr))`
                            }}
                            className='grid'
                        >
                            {hasIndex && (
                                <td
                                    key={item.id}
                                    className='flex items-center col-span-1 p-4 text-base border-t border-bg-neutrals-03'
                                >
                                    {index + 1}
                                </td>
                            )}
                            {columns.map(column => (
                                <td
                                    key={`${item.id}-${column.key}`}
                                    style={{
                                        gridColumn: `span ${column.slot} / span ${column.slot}`
                                    }}
                                    className='flex items-center p-4 text-base border-t border-bg-neutrals-03'
                                >
                                    {item[column.key]}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
            {Footer && Footer}
        </div>
    )
}

export default Table
