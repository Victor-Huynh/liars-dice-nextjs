'use client'
import React from 'react';
import { Button } from "@material-tailwind/react";

function addAmount(amount: number) {
    console.log(`hello! ${amount}`);
}

const QtyModBtn = (props: { amount: number }) => {
    return (
        <>
            {/* need styling and stuff */}
            <div>
                <Button className="h-12" variant="outlined" color="green" onClick={() => addAmount(props.amount)}>
                    {props.amount > 0 ? "+" + props.amount : "-" + props.amount}
                </Button>
            </div>
        </>
    );
}

export default QtyModBtn;
