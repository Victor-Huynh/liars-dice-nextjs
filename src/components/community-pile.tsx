import React from 'react';

const CommunityPile = (props: { dice: number[] }) => {
    return (
        <>
            <div>
                CommunityPile: {props.dice}
            </div>
        </>
    );
};

export default CommunityPile;