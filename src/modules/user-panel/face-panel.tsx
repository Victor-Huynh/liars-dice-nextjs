import React from 'react';
import { faDiceOne, faDiceTwo, faDiceThree, faDiceFour, faDiceFive, faDiceSix } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { config, dom } from "@fortawesome/fontawesome-svg-core";

const FacePanel = () => {
    return (
        <>
            <span className="flex">
                <p>FacePanel</p>
                {/* TODO: write a callback function to make selection the one that's clicked */}
                <span className=''>
                    <FontAwesomeIcon icon={faDiceOne} className="h-12 w-12" />
                    <FontAwesomeIcon icon={faDiceTwo} className="h-12 w-12" />
                    <FontAwesomeIcon icon={faDiceThree} className="h-12 w-12" />
                </span>
                <span className=''>
                    <FontAwesomeIcon icon={faDiceFour} className="h-12 w-12" />
                    <FontAwesomeIcon icon={faDiceFive} className="h-12 w-12" />
                    <FontAwesomeIcon icon={faDiceSix} className="h-12 w-12" />
                </span>
            </span>
        </>
    );
}

export default FacePanel;