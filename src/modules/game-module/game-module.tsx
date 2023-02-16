import * as React from 'react';
import Lobby from './lobby';
import UserPanel from '../user-panel/user-panel';

export default function GameModule() {
    // This should have all the global state I think... 
    return (
        <>
            <Lobby />
            <UserPanel />
        </>
    );
}
