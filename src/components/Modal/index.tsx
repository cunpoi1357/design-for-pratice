import ReactModal from 'react-modal'

interface IModal {
    children: React.ReactNode
    isOpen: boolean
    className?: string
}

function Modal({ children, isOpen, className }: IModal) {
    return (
        <ReactModal
            isOpen={isOpen}
            style={{
                overlay: {
                    backgroundColor: 'transparent'
                }
            }}
            className='fixed top-0 bottom-0 left-0 right-0 flex items-center justify-center bg-secondary-dark-blue/30'
        >
            <div className={`${className} bg-neutrals-01 p-6 min-h-[200px] min-w-[300px] rounded`}>{children}</div>
        </ReactModal>
    )
}

export default Modal
