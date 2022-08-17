import { Chart as ChartJS, ArcElement } from 'chart.js'
import { Doughnut } from 'react-chartjs-2'

import { DotIcon } from '../../components/Icon'

ChartJS.register(ArcElement)

function DoughnutChart() {
    const dataList = [
        {
            label: 'Kho hàng 01 - Hà Đông Hà Nội',
            color: '#683c73', // purple
            value: 15
        },
        {
            label: 'Kho hàng 01 - Hà Đông Hà Nội',
            color: '#0072f8', // blue
            value: 24
        },
        {
            label: 'Kho hàng 01 - Hà Đông Hà Nội',
            color: '#ffb600', // yellow
            value: 15
        },
        {
            label: 'Kho hàng 01 - Hà Đông Hà Nội',
            color: '#09b530', // green
            value: 10
        },
        {
            label: 'Kho hàng 01 - Hà Đông Hà Nội',
            color: '#f80000', // red
            value: 18
        }
    ]

    const options = {
        responsive: true,
        plugins: {
            title: {
                display: false
            },
            legend: {
                display: false
            },
            datalabels: {
                display: false
            },
            tooltip: {
                enabled: false
            }
        }
    }

    const data = {
        datasets: [
            {
                data: dataList.map(item => item.value),
                backgroundColor: dataList.map(item => item.color)
            }
        ]
    }

    return (
        <div className='flex flex-col justify-between p-6 rounded shadow  bg-neutrals-01'>
            <div className='pb-6'>
                <span className='text-xl font-bold'>Sản phẩm mỗi kho</span>
            </div>
            <div className='flex'>
                <div className='w-[170px] h-[170px] mr-16 relative'>
                    <Doughnut options={options} data={data} />
                    <span className='absolute text-2xl font-bold transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'>
                        Kho
                    </span>
                </div>
                <div className='flex-1 col-span-2'>
                    <ul>
                        {dataList.map(item => (
                            <li key={item.color} className='flex justify-between mb-2'>
                                <span className='flex'>
                                    <span
                                        style={{
                                            color: item.color
                                        }}
                                    >
                                        <DotIcon />
                                    </span>
                                    {item.label}
                                </span>
                                <span className='font-semibold'>{item.value}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default DoughnutChart
