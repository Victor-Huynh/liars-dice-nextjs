import React from 'react';
import Player from './player';

const ExamplePlayer = {
    PlayerID: 1,
    DisplayName: "Deputy",
    CurrentBid: [],
    Dice: [],
    RemainingDice: []
}

export default function Seat() {
    return (
        <>
            <Player player={ExamplePlayer} />
        </>
    );
};
