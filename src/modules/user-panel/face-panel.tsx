import React from 'react';
import { faDiceOne, faDiceTwo, faDiceThree, faDiceFour, faDiceFive, faDiceSix } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const FacePanel = () => {
    return (
        <>
            <div className="grid grid-cols-2">
                {/* TODO: write a callback function to make selection the one that's clicked */}
                <div className="grid justify-items-end">
                    <FontAwesomeIcon icon={faDiceOne} className="h-12 w-12" />
                    <FontAwesomeIcon icon={faDiceTwo} className="h-12 w-12" />
                    <FontAwesomeIcon icon={faDiceThree} className="h-12 w-12" />
                </div>
                <div className="grid justify-items-start">
                    <FontAwesomeIcon icon={faDiceFour} className="h-12 w-12" />
                    <FontAwesomeIcon icon={faDiceFive} className="h-12 w-12" />
                    <FontAwesomeIcon icon={faDiceSix} className="h-12 w-12" />
                </div>
            </div>
        </>
    );
}

export default FacePanel;