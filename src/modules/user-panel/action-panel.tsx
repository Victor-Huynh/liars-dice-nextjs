'use client'
import React, { useContext } from 'react';
import { Button } from "@material-tailwind/react";
import { UserContext } from './UserContext';
import Die from '@/components/die';
import { GameContext } from '../game-module/GameContext';

const ActionPanel = () => {
    const currentQuantity = useContext(UserContext).currentQuantity;
    const currentFace = useContext(UserContext).currentFace;
    const roundResult = useContext(GameContext).roundResult;
    const setRoundResult = useContext(GameContext).setRoundResult;
    const previousBid = useContext(GameContext).previousBid;
    const setPreviousBid = useContext(GameContext).setPreviousBid;
    const communityPile = useContext(GameContext).communityPile;
    const totalPile = useContext(GameContext).totalPile;

    const determineActionResult = (decision: IBid | String) => {
        if (decision === "liar") {
            const previousFace = previousBid.face;
            console.log(`Calling liar for ${previousBid.quantity} + ${previousBid.face}`);

            const totalPileQuantity = getQuantityFromPile(previousFace, totalPile);
            const totalCommunityQuantity = getQuantityFromPile(previousFace, communityPile);
            const totalFaceQuantity = totalPileQuantity + totalCommunityQuantity;
            console.log(`Total Pile Qty: ${totalPileQuantity} Community Pile Qty: ${totalCommunityQuantity}`);
            console.log(`Comparing ${totalFaceQuantity} with Previous bid: ${previousBid.quantity}...`);
            if (previousBid.quantity > totalFaceQuantity) {
                console.log("User called liar and was RIGHT!");
            } else {
                console.log("User called liar and was WRONG!");
            }
        } else {
            console.log("User bid!");
            setPreviousBid(decision);
        }
    }

    const getQuantityFromPile = (key: number, pile: IBid[]) => {
        let totalQuantity = 0;
        pile.forEach((bid) => {
            if (bid.face === key) {
                totalQuantity += bid.quantity;
            }
        });
        return totalQuantity;
    }

    return (
        <>
            <div className='grid justify-items-center'>
                <span>Actions</span>
                <span>PREVIOUS BID: {JSON.stringify(previousBid)}</span>
                {/* <span>USER DECISION: {JSON.stringify(userDecision)}</span> */}
                <Button onClick={() => determineActionResult({ quantity: currentQuantity, face: currentFace })}><h1>{currentQuantity}</h1><Die face={currentFace} ></Die></Button>
                <Button onClick={() => determineActionResult("liar")}>Liar!</Button>
            </div>
        </>
    );
}

export default ActionPanel;