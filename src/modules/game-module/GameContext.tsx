'use client'
import { createContext, useState } from "react";

type GameContextProps = {
    children: JSX.Element | JSX.Element[];
}

export interface IGameContext {
    previousBid: IBid;
    setPreviousBid: Function;
    communityPile: IBid[];
    setCommunityPile: Function;
    totalPile: IBid[];
    setTotalPile: Function;
    isClockwise: boolean;
    changeDirection: Function;
    currentPlayer: number;
    setCurrentPlayer: Function;
    roundResult: IBid | String;
    setRoundResult: Function;
}

const initialCommunityPile = [{ quantity: 1, face: 1 }, { quantity: 0, face: 2 }, { quantity: 0, face: 3 }, { quantity: 0, face: 4 }, { quantity: 0, face: 5 }, { quantity: 0, face: 6 }];


const initialTotalPile = [{ quantity: 5, face: 1 }, { quantity: 0, face: 2 }, { quantity: 0, face: 3 }, { quantity: 0, face: 4 }, { quantity: 0, face: 5 }, { quantity: 0, face: 6 }];


const defaultGameValue = () => {
    const [previousBid, setPreviousBid] = useState<IBid>({ quantity: 6, face: 1 });
    const [communityPile, setCommunityPile] = useState<IBid[]>(initialCommunityPile);
    const [totalPile, setTotalPile] = useState<IBid[]>(initialTotalPile);
    const [isClockwise, changeDirection] = useState<boolean>(true);
    const [currentPlayer, setCurrentPlayer] = useState<number>(1);
    const [roundResult, setRoundResult] = useState("");


    return {
        previousBid,
        setPreviousBid,
        communityPile,
        setCommunityPile,
        totalPile,
        setTotalPile,
        isClockwise,
        changeDirection,
        currentPlayer,
        setCurrentPlayer,
        roundResult,
        setRoundResult
    }
}

export const GameContext = createContext<IGameContext>({} as IGameContext);

export const GameContextProvider = ({ children }: GameContextProps) => {
    return (<GameContext.Provider value={defaultGameValue()}>
        {children}
    </GameContext.Provider>);
}