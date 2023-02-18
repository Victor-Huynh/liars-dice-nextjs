'use client'
import React from 'react';
import { Button } from "@material-tailwind/react";

const ActionPanel = (props: { quantity: number, face: number }) => {
    return (
        <>
            <div className='grid justify-items-center'>
                <span>Actions</span>
                <Button>{props.quantity} {props.face}'s</Button>
                <Button>Liar!</Button>
            </div>
        </>
    );
}

export default ActionPanel;