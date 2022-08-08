import React, { useCallback, useContext, useEffect, useState } from "react";
import { ICardsData, ICard } from "types";

import { UserContext } from "../..";

export const useData = (): ICardsData => {

    const {
        playerName,
        setPlayerName,
        cards,
        addNextCard,
        setAddNextCard,
        setDataCards,
        countCards } = useContext(UserContext)
    const [countPagination, setcountPagination] = useState(5)
    const [paginationData, setPaginationData] = useState<ICard[]>([])
    const limitCards = countCards

    
    useEffect(() => {
        if (addNextCard < limitCards) {
            setcountPagination(addNextCard)
            return
        }
        setcountPagination(limitCards)

    }, [addNextCard])


    useEffect(() => {
        if (cards?.length === 0 || typeof countPagination !== 'number') return
        const paginationFake = cards?.slice(0, countPagination)
        setPaginationData(paginationFake)

    }, [countPagination, cards])

    const shuffleCards = useCallback(() => {
        const restCards = cards?.slice(paginationData?.length, limitCards)
        const reverseCards = paginationData?.reverse()
        setDataCards([...reverseCards, ...restCards])
    }, [paginationData])


    const buyCard = useCallback(() => {
        if (paginationData.length === limitCards) return
        setAddNextCard(prev => prev > (limitCards - 1) ? limitCards : prev + 1)
    }, [])

    const remnantCards = cards?.length - paginationData?.length

    const logout = useCallback(() => {
        setDataCards([])
        setPlayerName('')
        setAddNextCard(5)
    }, [])

    return {
        playerName,
        setPlayerName,
        cards: paginationData,
        addNextCard,
        buyCard,
        shuffleCards,
        remnantCards,
        logout,
        setAddNextCard,
        setDataCards,
        countCards
    }
}

