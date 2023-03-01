'use client'
import React, { useContext } from 'react';
import { Button } from "@material-tailwind/react";
import { UserContext } from './UserContext';
import Die from '@/components/die';

const ActionPanel = () => {
    const currentQuantity = useContext(UserContext).currentQuantity;
    const currentFace = useContext(UserContext).currentFace;

    return (
        <>
            <div className='grid justify-items-center'>
                <span>Actions</span>
                <Button><h1>{currentQuantity}</h1><Die face={currentFace} ></Die></Button>
                <Button>Liar!</Button>
            </div>
        </>
    );
}

export default ActionPanel;