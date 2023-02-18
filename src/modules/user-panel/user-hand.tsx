import Die from '@/components/die';
import React from 'react';

const UserHand = (props: { dice: number[] }) => {
    const generatedHand: JSX.Element[] = [];

    const generateHand = (dice: number[]) => {
        // console.log("generating hand...");
        dice.map((die) => {
            // console.log("die: " + die);
            generatedHand.push(<Die face={die} />);
        });
    };

    generateHand(props.dice);

    return (
        <div className='flex'>
            UserHand
            {generatedHand}
        </div>
    );
}

export default UserHand;