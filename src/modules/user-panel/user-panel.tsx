import React from 'react';
import ActionPanel from './action-panel';
import FacePanel from './face-panel';
import QuantityPanel from './quantity-panel';
import UserHand from './user-hand';

const UserPanel = () => {
    return (
        <>
            <QuantityPanel />
            <FacePanel />
            <ActionPanel />
            <UserHand />
        </>
    );
}

export default UserPanel;