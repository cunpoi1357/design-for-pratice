import { Bar } from 'react-chartjs-2'
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js'
import ChartDataLabels from 'chartjs-plugin-datalabels'
import { Context } from 'chartjs-plugin-datalabels'

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, ChartDataLabels)

const labels = ['Th1', 'Th2', 'Th3', 'Th4', 'Th5', 'Th6', 'Th7', 'Th8', 'Th9', 'Th10', 'Th11', 'Th12']
const bars = labels.map(() => Math.floor(Math.random() * (50 - 1 + 1)) + 1)
const colors = labels.map(() => '#e6e8ec')
const IndefOfMaxValue = bars.indexOf(Math.max(...bars))
colors[IndefOfMaxValue] = '#2C3A57'

export const options = {
    responsive: true,
    plugins: {
        legend: {
            display: false
        },
        datalabels: {
            display: function (context: Context) {
                return context.dataIndex === IndefOfMaxValue // display labels with an odd index
            },
            anchor: 'end',
            align: 'end',
            clamp: true,
            borderRadius: 8,
            color: 'white',
            backgroundColor: '#2C3A57',
            font: {
                weight: 'semibold',
                size: '14'
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

const data = {
    labels,
    datasets: [
        {
            label: 'Doanh thu',
            data: bars,
            backgroundColor: colors,
            borderRadius: 6,
            barThickness: '30',
            showLine: false
        }
    ]
}

function BarChart() {
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
                    <button className='w-[60px] h-5 bg-BG-Sidebar align-middle rounded text-white text-xs font-normal'>
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
