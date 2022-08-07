export interface ICard {
    code: string;
    image: string;
    images: Images;
    value: string;
    suit: string;
}

export interface Images {
    svg: string;
    png: string;
}
export interface ICardResponse {
    success: boolean;
    deck_id: string;
    cards: ICard[];
    remaining: number;
}

export interface IData {
    data: ICardResponse
}
export interface IContext {
    playerName: string,
    setPlayerName: React.Dispatch<React.SetStateAction<string>>,
    cards: ICard[],
    addNextCard: number,
    countCards: number,
    setAddNextCard: React.Dispatch<React.SetStateAction<number>>,
    setDataCards: React.Dispatch<React.SetStateAction<ICard[]>>

}
export interface ICardsData extends IContext {
    shuffleCards: () => void,
    remnantCards?: number,
    buyCard: () => void,
    logout: () => void,
}