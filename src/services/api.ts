
import axios from 'axios';
import { IData } from 'types';

const api = axios.create({
    baseURL: 'http://deckofcardsapi.com/api/deck'
})
export const apiCards = {
    getCards: async (count = 8) => {
        try {
            const { data }: IData = await api.get(`/new/draw/?count=${count}`, {
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