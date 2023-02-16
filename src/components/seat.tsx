import React from 'react';
import { IPlayer } from './definitions/player';
import Player from './player';

const Seat = (props: { player: IPlayer, seatNumber: number }) => {
    return (
        <>
            <div>SeatNumber is {props.seatNumber}</div>
            <Player player={props.player} />
        </>
    );
};

export default Seat;