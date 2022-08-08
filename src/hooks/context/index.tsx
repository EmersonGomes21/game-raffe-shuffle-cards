import React, { createContext, useCallback, useEffect, useState } from "react";
import { apiCards,  } from "services/api";
import { ICard, IContext } from "types";
import { randomValue } from "utils";

export const UserContext = createContext({} as IContext);

export const ProviderDataPlayer: React.FC = ({ children }) => {
    const [playerName, setPlayerName] = useState('');
    const [cards, setDataCards] = useState<ICard[]>([]);
    const [addNextCard, setAddNextCard] = useState(5);
    const [countCards] = useState(8);

    useEffect(() => {
        if (cards?.length > 0) return
        apiCards.getCards(countCards).then((result) => {
            const cardsWithPoint = result?.cards?.map((card) => {
                return {
                    ...card,
                    point: randomValue()
                }
            })  || []
            setDataCards(cardsWithPoint)
        }).catch((Error) => {
            console.error('Error', Error)

        })
    }, [])

    return (
        <UserContext.Provider value={{
            playerName,
            setPlayerName,
            cards,
            addNextCard,
            setAddNextCard,
            setDataCards,
            countCards
        }}>
            {children}
        </UserContext.Provider>
    );
}

