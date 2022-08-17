import { ADD_PRODUCT, EDIT_PRODUCT, REMOVE_PRODUCT } from './ProductConstants'

export const addProduct = (payload: any) => ({
    type: ADD_PRODUCT,
    payload
})

export const removeProduct = (payload: any) => ({
    type: REMOVE_PRODUCT,
    payload
})

export const editProduct = (payload: any) => ({
    type: EDIT_PRODUCT,
    payload
})
