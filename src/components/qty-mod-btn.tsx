'use client'
import React, { useContext, useEffect } from 'react';
import { Button } from "@material-tailwind/react";
import { UserContext } from '@/modules/user-panel/UserContext';

const QtyModBtn = (props: { increment: number }) => {
    // const [quantity, setQuantity] = React.useState(0);
    const currentQuantity = useContext(UserContext).currentQuantity;
    const setCurrentQuantity = useContext(UserContext).setCurrentQuantity;

    // function addAmount(amount: number) {
    //     setQuantity((quantity) => {
    //         return quantity + amount;
    //     })
    // }

    // useEffect(() => {
    //     console.log(`quantity: ${quantity}`);
    // }, [quantity]);

    return (
        <>
            {/* need styling and stuff */}
            <Button className="large" variant="outlined" color="green" onClick={() => setCurrentQuantity(currentQuantity + props.increment)}>
                {props.increment > 0 ? "+" + props.increment : props.increment}
            </Button>
        </>
    );
}

export default QtyModBtn;
