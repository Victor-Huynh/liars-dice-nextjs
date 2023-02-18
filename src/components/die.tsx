import React from 'react';
import { faDiceOne, faDiceTwo, faDiceThree, faDiceFour, faDiceFive, faDiceSix } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Die = (props: { face: number }) => {
    const mapToFace = (face: number) => {
        // return <FontAwesomeIcon icon={faDiceOne} className={`h-${size} w-${size}`} />;
        // console.log("mapToFace called with face: " + face);
        switch (face) {
            case 1:
                return <FontAwesomeIcon key={face} icon={faDiceOne} className={`h-12 w-12 flex`} />
            case 2:
                return <FontAwesomeIcon key={face} icon={faDiceTwo} className={`h-12 w-12 flex`} />
            case 3:
                return <FontAwesomeIcon key={face} icon={faDiceThree} className={`h-12 w-12 flex`} />
            case 4:
                return <FontAwesomeIcon key={face} icon={faDiceFour} className={`h-12 w-12 flex`} />
            case 5:
                return <FontAwesomeIcon key={face} icon={faDiceFive} className={`h-12 w-12 flex`} />
            case 6:
                return <FontAwesomeIcon key={face} icon={faDiceSix} className={`h-12 w-12 flex`} />
            default:
                console.log("error in mapToFace, invalid face");
                return;
        }
    }

    return (
        <>
            {mapToFace(props.face)}
        </>
    );
};

export default Die;