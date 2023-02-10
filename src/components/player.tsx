import React from 'react';
import PlayerT from './definitions/player';

export default function Player(player: { PlayerT }) {
    return (
        <>
            DisplayName: {player.DisplayName}
            PlayerComponent
        </>
    );
};
