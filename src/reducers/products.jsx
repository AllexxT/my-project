import uuid from 'uuid/v4'
import defaultImage from '../product.jpg'

const PRODUCT_CARDS = [
    {id:uuid(), name:'Product Name', descriprion: 'Full loaded description', image: defaultImage, price: 69, discount: false},
    {id:uuid(), name:'Product name', descriprion: 'Description of the current product', image: defaultImage, price: 69, discount: true},
]

const products = (state = PRODUCT_CARDS, {type, id, name, descriprion, price}) => {
    switch (type) {
        case 'ADD_PRODUCT':
            return [
                ...state, {
                    id,
                    name,
                    descriprion,
                    price,
                    defaultImage,
                }
            ];
        default:
            return state;
    }
}

export default products;