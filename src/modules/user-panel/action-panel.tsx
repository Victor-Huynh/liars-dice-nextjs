'use client'
import React from 'react';
import { Button } from "@material-tailwind/react";

const ActionPanel = (props: { quantity: number, face: number }) => {
    return (
        <>
            <Button>{props.quantity} {props.face}'s</Button>
            <Button>Liar!</Button>
        </>
    );
}

export default ActionPanel;