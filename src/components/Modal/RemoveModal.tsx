import { useEffect } from 'react'
import { toast } from 'react-toastify'

import Button from '../Button'
import { CheckCircleIcon, XIcon } from '../Icon'

interface IRemoveModal {
    title: string
    content: React.ReactNode
    className?: string
    onRemove: () => void
    onClose: () => void
}

function RemoveModal({ title, content, className, onRemove, onClose }: IRemoveModal) {
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            switch (e.key) {
                case 'Enter':
                    onRemove()
                    break
                case 'Escape':
                    onClose()
                    break
                default:
                    break
            }
        }
        document.addEventListener('keydown', handleKeyDown)
        return () => {
            document.removeEventListener('keydown', handleKeyDown)
        }
    }, [])
    return (
        <div className={`${className} flex flex-col items-center p-2`}>
            <p className='text-lg font-bold mb-4'>{title}</p>
            <p className='text-center text-neutrals-05 text-sm mb-8'>{content}</p>
            <div className='flex gap-6'>
                <Button
                    className='border-secondary-blue border h-10 w-28 text-secondary-blue transition-colors ease-linear hover:text-neutrals-01 hover:bg-secondary-blue'
                    onClick={onClose}
                >
                    Hủy
                </Button>
                <Button
                    className='bg-secondary-red h-10 w-28 text-neutrals-01 transition-opacity hover:opacity-80'
                    onClick={() => {
                        onRemove()
                        toast.success(`${title} thành công`, {
                            className: 'w-[325px] bg-secondary-green text-white p-[25px]',
                            icon: <CheckCircleIcon />,
                            closeButton: <XIcon className='w-5 h-5 absolute top-1/2 -translate-y-1/2 right-[25px]' />,
                            position: 'top-right',
                            autoClose: 3000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined
                        })
                    }}
                >
                    Xóa
                </Button>
            </div>
        </div>
    )
}

export default RemoveModal
