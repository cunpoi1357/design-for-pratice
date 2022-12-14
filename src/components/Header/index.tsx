import { ChevronDownIcon, MenuIcon, NotificationEmptyIcon, NotificationNewIcon } from '../Icon'

function Header({ title }: { title: string }) {
    const hasNotification = true
    return (
        <header className='flex justify-between items-center h-[90px] w-full bg-neutrals-01 px-10 shadow'>
            <div className='flex items-center'>
                <MenuIcon className='mr-9' />
                <h2 className='font-bold'>{title || 'Home'}</h2>
            </div>
            <nav className='flex items-center'>
                {hasNotification ? (
                    <NotificationNewIcon className='w-[30px] h-[30px] mr-8 cursor-pointer' />
                ) : (
                    <NotificationEmptyIcon className='w-[30px] h-[30px] mr-8 cursor-pointer' />
                )}
                <div className='flex items-center cursor-pointer'>
                    <img
                        className='w-12 h-12 mr-4 rounded-full'
                        src='http://yt3.ggpht.com/wgneNTiW753q5G6XMnjyNLAzReR4TVFJryTKTpIqJefrKMyhABPwfnyNWIoT5NNGstFlva1tgw=s176-c-k-c0x00ffffff-no-rj-mo'
                        alt='F8'
                    />
                    <div className='mr-4 w-44'>
                        <h4 className='font-semibold'>Nguyễn Việt Hoàng</h4>
                        <span className='text-xs text-neutrals-05'>Quản trị viên</span>
                    </div>
                    <ChevronDownIcon className='w-[18px] h-[18px]' />
                </div>
            </nav>
        </header>
    )
}

export default Header
