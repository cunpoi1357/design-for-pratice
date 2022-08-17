import Sidebar from '../component/Sidebar'

function DefaultLayout({ children }: { children: JSX.Element }) {
    return (
        <div className='flex bg-[#f4f5f6]'>
            <Sidebar />
            <div className='flex-1'>{children}</div>
        </div>
    )
}

export default DefaultLayout
