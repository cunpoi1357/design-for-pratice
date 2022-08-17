import { v4 as uuidv4 } from 'uuid'

import { ADD_PRODUCT, IProduct, REMOVE_PRODUCT } from './ProductConstants'

interface IAction {
    type: string
    payload: any
}

export const initialState: IProduct[] = [
    {
        id: uuidv4(),
        orderId: 'T001',
        name: 'Thép Việt Pháp hình chữ U',
        unit: 'Cây',
        madeIn: 'Việt Nam',
        dateCreate: '27/06/2022 22:15:30'
    },
    {
        id: uuidv4(),
        orderId: 'T001',
        name: 'Thép Việt Pháp hình chữ T',
        unit: 'Cây',
        madeIn: 'Việt Nam',
        dateCreate: '27/06/2022 22:15:30'
    },
    {
        id: uuidv4(),
        orderId: 'T001',
        name: 'Thép Việt Pháp hình chữ V',
        unit: 'Cây',
        madeIn: 'Việt Nam',
        dateCreate: '27/06/2022 22:15:30'
    },
    {
        id: uuidv4(),
        orderId: 'T002',
        name: 'Thép Việt Pháp hình chữ V',
        unit: 'Cây',
        madeIn: 'Việt Nam',
        dateCreate: '27/06/2022 22:15:30'
    },
    {
        id: uuidv4(),
        orderId: 'T003',
        name: 'Thép Việt Pháp hình chữ U',
        unit: 'Cây',
        madeIn: 'Việt Nam',
        dateCreate: '27/06/2022 22:15:30'
    }
]

const productReducer = (state: IProduct[], action: IAction) => {
    switch (action.type) {
        case ADD_PRODUCT:
            return [
                ...state,
                {
                    id: uuidv4(),
                    orderId: action.payload.orderId,
                    name: action.payload.name,
                    unit: action.payload.unit,
                    madeIn: action.payload.madeIn,
                    dateCreate: action.payload.dateCreate
                }
            ]
        case REMOVE_PRODUCT:
            return state.filter(item => item.id !== action.payload)
        default:
            throw new Error('Invalid action type: ' + action.type)
            return state
    }
}

export default productReducer
