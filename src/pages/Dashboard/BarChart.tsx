import { Bar } from 'react-chartjs-2'
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Tooltip, ChartData, ChartOptions } from 'chart.js'
import ChartDataLabels, { Context } from 'chartjs-plugin-datalabels'

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, ChartDataLabels)

interface IDataList {
    label: string
    color: string
    value: number
}

function BarChart() {
    const dataList: IDataList[] = [
        {
            label: 'Th1',
            color: '#e6e8ec',
            value: 15
        },
        {
            label: 'Th2',
            color: '#e6e8ec',
            value: 18
        },
        {
            label: 'Th3',
            color: '#e6e8ec',
            value: 20
        },
        {
            label: 'Th4',
            color: '#e6e8ec',
            value: 35
        },
        {
            label: 'Th5',
            color: '#2C3A57',
            value: 48
        },
        {
            label: 'Th6',
            color: '#e6e8ec',
            value: 40
        },
        {
            label: 'Th7',
            color: '#e6e8ec',
            value: 38
        },
        {
            label: 'Th8',
            color: '#e6e8ec',
            value: 12
        },
        {
            label: 'Th9',
            color: '#e6e8ec',
            value: 10
        },
        {
            label: 'Th10',
            color: '#e6e8ec',
            value: 24
        },
        {
            label: 'Th11',
            color: '#e6e8ec',
            value: 27
        },
        {
            label: 'Th12',
            color: '#e6e8ec',
            value: 22
        }
    ]
    const maxValue = Math.max(...dataList.map((item: IDataList): number => item.value))
    const indexOfMaxValue = dataList.findIndex(item => (item.value = maxValue))

    const options: ChartOptions<'bar'> = {
        plugins: {
            datalabels: {
                display: function (context: Context) {
                    return context.dataIndex === 4
                },
                anchor: 'end',
                align: 'end',
                clamp: true,
                borderRadius: 8,
                color: 'white',
                backgroundColor: '#2C3A57',
                font: {
                    size: 14,
                    weight: 'lighter'
                },
                padding: {
                    top: 3,
                    bottom: 3,
                    left: 12,
                    right: 12
                },
                textAlign: 'center'
            }
        },
        layout: {
            padding: {
                top: 32
            }
        },
        scales: {
            y: {
                display: false
            },
            x: {
                grid: {
                    display: false
                }
            }
        }
    }

    const data: ChartData<'bar'> = {
        labels: dataList.map(item => item.label),
        datasets: [
            {
                label: 'Doanh thu',
                data: dataList.map(item => item.value),
                backgroundColor: dataList.map(item => item.color),
                borderRadius: 6,
                barThickness: 30
            }
        ]
    }
    return (
        <div className='h-[310px] bg-neutrals-01 p-6 rounded shadow flex flex-col justify-between'>
            <div className='flex justify-between'>
                <span className='text-xl font-bold'>Doanh thu</span>
                <div className='bg-neutrals-02 p-1 rounded h-7 flex items-center'>
                    <button className='w-[60px] h-5 align-middle rounded text-neutrals-05 text-xs font-normal'>
                        Ngày
                    </button>
                    <button className='w-[60px] h-5 align-middle rounded text-neutrals-05 text-xs font-normal'>
                        Tháng
                    </button>
                    <button className='w-[60px] h-5 bg-secondary-dark-blue align-middle rounded text-white text-xs font-normal'>
                        Năm
                    </button>
                </div>
            </div>
            <div className='h-40'>
                <Bar options={options} data={data} height='60' />
            </div>
        </div>
    )
}

export default BarChart
