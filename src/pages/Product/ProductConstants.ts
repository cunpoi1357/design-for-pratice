export interface IProduct {
    id: string
    orderId: string
    name: string
    unit: string
    madeIn: string
    dateCreate: string
}

export interface IAddProduct {
    oderId: string
    name: string
    unit: string
    madeIn: string
    dateCreate: string
}

export const ADD_PRODUCT = 'addProduct'
export const REMOVE_PRODUCT = 'removeProduct'
export const EDIT_PRODUCT = 'editProduct'
