import React from 'react';
import { faDiceOne, faDiceTwo, faDiceThree, faDiceFour, faDiceFive, faDiceSix } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const FacePanel = () => {
    return (
        <>
            FacePanel
            <div style={{ height: 50, width: 50 }}>
                <FontAwesomeIcon icon={faDiceOne} />
            </div>
            <div style={{ height: 50, width: 50 }}>
                <FontAwesomeIcon icon={faDiceTwo} />
            </div>
        </>
    );
}

export default FacePanel;