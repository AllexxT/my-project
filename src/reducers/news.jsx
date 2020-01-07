import { ADD_NEWS } from "../constants";
import uuid from 'uuid/v4'



const NEWS = [
    {
        id: uuid(),
        card_id: 'Card_id',
        news_text: 'OOOrem ipsum dolor sit amet.',
        date: 'Today',
    },
    {
        id: uuid(),
        card_id: 'Card_id',
        news_text: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
        date: 'Tomorrow',
    },
    {
        id: uuid(),
        card_id: 'Card_id',
        news_text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero, sit?',
        date: 'Yesterday',
    },
]


const news = (state = NEWS, {type, id, news_text, date, card_id }) => {
    switch (type) {
        case ADD_NEWS:
            return [
                ...state, {
                    id,
                    news_text,
                    date,
                    card_id,
                }
            ];
        default:
            return state;
    }
}

export default news;