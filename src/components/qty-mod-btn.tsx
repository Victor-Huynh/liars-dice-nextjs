'use client'
import React, { useEffect } from 'react';
import { Button } from "@material-tailwind/react";

function addAmount(amount: number) {
    console.log(`hello! ${amount}`);
}

const QtyModBtn = (props: { increment: number }) => {
    const [quantity, setQuantity] = React.useState(0);

    // setQuantity(increment: number) => {
    //     quantity += increment;
    // }

    useEffect(() => {
        console.log(`quantity: ${quantity}`);
    }, [quantity]);

    return (
        <>
            {/* need styling and stuff */}
            <Button className="large" variant="outlined" color="green" onClick={() => setQuantity(quantity + props.increment)}>
                {props.increment > 0 ? "+" + props.increment : props.increment}
            </Button>
        </>
    );
}

export default QtyModBtn;
