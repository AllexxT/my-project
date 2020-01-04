import { ADD_NEWS } from "../constants";


export const addNews = (id, news_text, date, card_id) => ({
    type: ADD_NEWS,
    id,
    news_text,
    date,
    card_id,
});