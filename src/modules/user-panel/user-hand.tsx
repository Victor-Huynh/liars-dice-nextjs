import Die from '@/components/die';
import React from 'react';

const UserHand = (props: { dice: number[] }) => {
    const generatedHand: JSX.Element[] = [];

    const generateHand = (dice: number[]) => {
        // console.log("generating hand...");
        var count = 0;
        dice.map((die) => {
            // console.log("die: " + die);
            generatedHand.push(<Die key={"handDie" + count} face={die} />);
            count++;
        });
    };

    generateHand(props.dice);

    return (
        <div className='grid'>
            <h1 className='text-center'>Your Hand</h1>
            <div className='flex justify-center'>
                {generatedHand}
            </div>
        </div>
    );
}

export default UserHand;