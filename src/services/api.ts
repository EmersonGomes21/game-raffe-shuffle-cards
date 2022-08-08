
// import axios from 'axios';
import { IData } from 'types';

// const api = axios.create({
//     baseURL: 'http://deckofcardsapi.com/api/deck'
// })
export const apiCards = {
    getCards: async (count = 8) => {
        try {
            const resp: IData = await (await fetch(`http://deckofcardsapi.com/api/deck/new/draw/?count=${count}`)).json()
            return resp

        } catch (error) {
            console.error('Error in getCards', error)
        }
    }

} 