import CommunityPile from '@/components/community-pile';
import { IPlayer } from '@/components/definitions/player';
import Seat from '@/components/seat';
import TotalPile from '@/components/total-pile';
import React, { useState } from 'react';


interface GameDirection {
    isClockwise: boolean;
}

interface CurrentPlayer {
    playerID: number; // is it number?
}

const Lobby = () => {
    // useState[isClockwise, updateDirection] = useState<GameDirection>([]);
    // useState[previousPlayer, updatePreviousPlayer] = useState();
    // useState[currentPlayer, updateCurrentPlayer] = useState();

    // Mock Data
    // playerID, displayName, currentBid, dice, exposedDice, remainingDice
    const ExampleBid: IBid["Bid"] = {
        face: 2,
        quantity: 4
    }
    const ExamplePlayer: IPlayer = {
        playerID: 1,
        displayName: "Deputy6",
        currentBid: ExampleBid,
        dice: [1, 2, 3],
        exposedDice: 2,
        remainingDice: 3
    };
    const ExampleCommunityPile = [0, 2, 3];
    const ExampleTotalPile = [1, 2, 3, 4, 4];
    // End of Mock Data

    return (
        <>
            <Seat player={ExamplePlayer} seatNumber={1} />
            <CommunityPile dice={ExampleCommunityPile} />
            <TotalPile dice={ExampleTotalPile} />
        </>
    );
};

export default Lobby;