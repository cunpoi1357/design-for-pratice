import { useMatch } from 'react-router-dom'
import { IMenuItem } from '.'
import { ChevronDownIcon, ChevronUpIcon } from '../../../components/Icon'
import MenuItem from './MenuItem'

interface IProps {
    item: IMenuItem
    isShowSubMenu: Boolean
    setShowSubMenu: () => void
}

function SubMenu({ item, isShowSubMenu, setShowSubMenu }: IProps) {
    const Icon = item.icon
    const match = useMatch(`${item.path}/*`)
    return (
        <li className='flex flex-col'>
            <button className={`menu-item ${match && 'text-[#FCFCFD] font-bold'}`} onClick={setShowSubMenu}>
                <Icon />
                <span className='ml-6 font-semibold text-base'>{item.label}</span>
                {isShowSubMenu ? (
                    <ChevronUpIcon className='w-6 h-6 bg-transparent ml-auto' />
                ) : (
                    <ChevronDownIcon className='w-6 h-6 bg-transparent ml-auto' />
                )}
            </button>
            {item.children && (
                <ul
                    // make animation for sub menu
                    className={`${
                        isShowSubMenu ? (item.children.length === 2 ? 'h-[124px]' : 'h-[248px]') : 'h-0'
                    }  overflow-hidden transition-all duration-200`}
                >
                    {item.children.map(item => (
                        <MenuItem key={item.path} item={item} />
                    ))}
                </ul>
            )}
        </li>
    )
}

export default SubMenu
