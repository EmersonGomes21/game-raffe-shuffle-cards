
import axios from 'axios';
import { IData } from 'types';

export const apiCards = {
    getCards: async (count = 8) => {
        try {
            const { data }: IData = await axios.get(`http://deckofcardsapi.com/api/deck/new/draw/?count=${count}`, {
                headers: {'X-Requested-With': 'XMLHttpRequest'},
                withCredentials: false,
                responseType: 'json',
                xsrfCookieName: 'XSRF-TOKEN',
                xsrfHeaderName: 'X-XSRF-TOKEN',
            })
            return data

        } catch (error) {
            console.error('Error in getCards', error)
        }
    }

} 