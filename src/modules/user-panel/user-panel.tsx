'use client'
import React from 'react';
import ActionPanel from './action-panel';
import FacePanel from './face-panel';
import QuantityPanel from './quantity-panel';
import UserHand from './user-hand';
import { UserContextProvider } from './UserContext';

function UserPanel() {
    return (
        <>
            <UserContextProvider>
                <div className='absolute inset-0 top-3/4'>
                    <span><UserHand dice={[1, 2, 2, 3, 5]} /></span>
                    <div className='grid grid-cols-3'>
                        <QuantityPanel />
                        <FacePanel />
                        <ActionPanel />
                    </div>
                </div>
            </UserContextProvider>
        </>
    );
}

export default UserPanel;