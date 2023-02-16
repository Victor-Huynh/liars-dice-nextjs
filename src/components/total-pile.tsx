import React from 'react';

const TotalPile = (props: { dice: number[] }) => {
    return (
        <>
            <div>
                TotalPile: {props.dice}
            </div>
        </>
    );
};

export default TotalPile;