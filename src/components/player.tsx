import React from 'react';
import { IPlayer } from './definitions/player';

// const getPlayers = async () => {
//     const res = await fetch("");
//     const Players: string[] = await res.json();
// }

const Player = (props: { player: IPlayer }) => {
    const { playerID, displayName, currentBid, dice, exposedDice, remainingDice } = props.player;
    return (
        <>
            <div>
                <strong>PlayerComponent</strong>
                <br />
                DisplayName: {displayName}
                <br />
                PlayerID: {playerID}
                <br />
                CurrentBid Face: {currentBid.face}, Quantity: {currentBid.quantity}
                <br />
                PlayerComponent: {dice}
                <br />
                ExposedDice: {exposedDice}
                <br />
                RemainingDice: {remainingDice}
                <br />
                <strong>End of PlayerComponent</strong>
            </div>
        </>
    );
};

export default Player; 