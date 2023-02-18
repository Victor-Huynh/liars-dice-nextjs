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
            <ActionPanel quantity={2} face={5} />
            <UserHand dice={[1, 2, 2, 3, 5]} />
        </>
    );
}

export default UserPanel;