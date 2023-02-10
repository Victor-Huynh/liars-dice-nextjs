import CommunityPile from '@/components/community-pile';
import Seat from '@/components/seat';
import TotalPile from '@/components/total-pile';
import React, { useState } from 'react';

interface GameDirection {
    isClockwise: boolean;
}

interface CurrentPlayer {
    playerID: number; // is it number?
}

export default function Lobby() {
    // useState[isClockwise, updateDirection] = useState<GameDirection>([]);
    // useState[currentPlayer, updateCurrentPlayer] = useState()
    return (
        <>
            <Seat />
            <CommunityPile />
            <TotalPile />
        </>
    );
};
