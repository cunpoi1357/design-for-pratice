import React, { useReducer, useState } from 'react'

import Button from '../../components/Button'
import Content from '../../components/Content'
import Header from '../../components/Header'
import { EditIcon, EyeIcon, PlusIcon, SearchIcon, TrashIcon } from '../../components/Icon'
import Input from '../../components/Input'
import Modal from '../../components/Modal'
import RemoveModal from '../../components/Modal/RemoveModal'
import Pagination from '../../components/Pagination'
import Table, { ITableColumns } from '../../components/Table'

import { addProduct, removeProduct } from './ProductActions'
import { IProduct } from './ProductConstants'
import productReducer, { initialState } from './ProductReducer'

const productColumns: ITableColumns[] = [
    {
        key: 'orderId',
        label: 'Mã hàng',
        slot: 2
    },
    {
        key: 'name',
        label: 'Tên hàng',
        slot: 6
    },
    {
        key: 'unit',
        label: 'Đơn vị',
        slot: 2
    },
    {
        key: 'dateCreate',
        label: 'Ngày tạo',
        slot: 2
    },
    {
        key: 'action',
        label: <span className='float-right pr-[30px]'>Thao tác</span>,
        slot: 3
    }
]

function Product() {
    const [state, dispatch] = useReducer(productReducer, initialState)
    const [isOpenModal, setIsOpenModal] = useState<boolean>(false)
    const [modalRender, setModalRender] = useState<React.ReactNode | null>(null)

    const productListRender = state.map(product => ({
        ...product,
        dateCreate: (
            <div className='flex flex-col'>
                <span>{product.dateCreate.split(' ')[0]}</span>
                <span>{product.dateCreate.split(' ')[1]}</span>
            </div>
        ),
        action: (
            <ul className='flex items-center justify-center w-full gap-4'>
                <li
                    className='w-10 h-10 rounded-full bg-[#FF8D0E] flex items-center justify-center text-white cursor-pointer'
                    onClick={() => handleViewProduct(product.id)}
                >
                    <EyeIcon />
                </li>
                <li
                    className='flex items-center justify-center w-10 h-10 text-white rounded-full cursor-pointer bg-secondary-green'
                    onClick={() => handleEditProduct(product.id)}
                >
                    <EditIcon />
                </li>
                <li
                    className='flex items-center justify-center w-10 h-10 text-white rounded-full cursor-pointer bg-secondary-red'
                    onClick={() => handleRemoveProduct(product)}
                >
                    <TrashIcon />
                </li>
            </ul>
        )
    }))

    const handleAddProduct = () =>
        dispatch(
            addProduct({
                orderId: 'T001',
                name: 'Thép Việt Pháp hình chữ B',
                unit: 'Cây',
                madeIn: 'Việt Nam',
                dateCreate: '15/08/2022 22:15:30'
            })
        )

    const handleViewProduct = (index: string) => {
        alert(`View Product ${index}`)
    }

    const handleEditProduct = (index: string) => {
        alert(`Edit Product ${index}`)
    }

    const handleRemoveProduct = (product: IProduct) => {
        setModalRender(
            <RemoveModal
                className='w-[380px]'
                title='Xóa sản phẩm'
                content={
                    <>
                        Bạn có chắc muốn xóa sản phẩm <span className='font-bold text-neutrals-06'>{product.name}</span>{' '}
                        này?
                    </>
                }
                onRemove={() => {
                    dispatch(removeProduct(product.id))
                    setIsOpenModal(false)
                }}
                onClose={() => setIsOpenModal(false)}
            />
        )
        setIsOpenModal(true)
    }

    return (
        <div className='relative'>
            <Header title='Danh sách sản phẩm' />
            <Content className='pb-14'>
                <div className='pb-[30px] flex gap-8'>
                    <Input type='text' className='w-[350px]' placeholder='Mã hàng' />
                    <Input type='text' className='w-[600px]' placeholder='Tên hàng' />
                    <Button className='w-56 bg-secondary-dark-blue' icon={<SearchIcon />}>
                        <span>Tìm kiếm</span>
                    </Button>
                    <Button className='bg-primary-blue w-52' icon={<PlusIcon />} onClick={handleAddProduct}>
                        <span>Tạo sản phẩm</span>
                    </Button>
                </div>
                <Table columns={productColumns} data={productListRender} hasIndex />
            </Content>
            <Pagination
                className={'absolute bottom-0 left-0 right-0 bg-neutrals-01'}
                totalPage={10}
                initialPage={1}
                title={
                    <span>
                        Có <span className='text-secondary-blue'>{state.length}</span> sản phẩm
                    </span>
                }
            />
            <Modal isOpen={isOpenModal}>{modalRender}</Modal>
        </div>
    )
}

export default Product
