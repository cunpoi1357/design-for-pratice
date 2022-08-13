import { Link } from 'react-router-dom'

export interface ITableColumns {
    key: string
    label: string
    slot: Number
}

interface ITable {
    title: string
    to: string
    className: string
    columns: ITableColumns[]
    data: any[]
    Footer?: React.FC
}

function Table({ title, to, className, columns, data, Footer }: ITable) {
    const girdColumnTotal = columns.reduce((total, item) => Number(total) + Number(item.slot), 0)

    return (
        <div className={`${className} pb-1 rounded`}>
            <header className='w-full flex justify-between p-6'>
                <h3 className='inline-block font-bold'>{title}</h3>
                <Link to={to} className='text-base text-secondary-blue font-semibold inline-block'>
                    Xem tất cả
                </Link>
            </header>
            <table className='w-full'>
                <thead>
                    <tr
                        className='grid bg-neutrals-03'
                        style={{
                            gridTemplateColumns: `repeat(${girdColumnTotal},minmax(0,1fr))`
                        }}
                    >
                        {columns.map(column => (
                            <td
                                key={column.key}
                                style={{
                                    gridColumn: `span ${column.slot} / span ${column.slot}`
                                }}
                                className='p-4 font-semibold text-base'
                            >
                                {column.label}
                            </td>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.map(item => (
                        <tr
                            key={item.id}
                            style={{
                                gridTemplateColumns: `repeat(${girdColumnTotal},minmax(0,1fr))`
                            }}
                            className='grid'
                        >
                            {columns.map(column => (
                                <td
                                    key={`${item.id}-${column.key}`}
                                    style={{
                                        gridColumn: `span ${column.slot} / span ${column.slot}`
                                    }}
                                    className='p-4 flex items-center text-base border-t border-bg-neutrals-03'
                                >
                                    {item[column.key]}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
            {Footer && <Footer />}
        </div>
    )
}

export default Table
