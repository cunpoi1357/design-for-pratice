import Header from '../component/Header'
import Sidebar from '../component/Sidebar'

function DefaultLayout({ children }: { children: JSX.Element }) {
    return (
        <div className='flex bg-[#f4f5f6]'>
            <Sidebar />
            <div className='flex-1'>
                <Header />
                <div className='py-8 px-10 h-[calc(100vh-90px)] overflow-y-auto'>{children}</div>
            </div>
        </div>
    )
}

export default DefaultLayout
