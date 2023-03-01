import React, { useContext } from 'react';
import { faDiceOne, faDiceTwo, faDiceThree, faDiceFour, faDiceFive, faDiceSix } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { UserContext } from './UserContext';

const FacePanel = () => {
    const setCurrentFace = useContext(UserContext).setCurrentFace;
    let [oneStatus, setOneStatus] = React.useState("h-12 w-12");
    let [twoStatus, setTwoStatus] = React.useState("h-12 w-12");
    let [threeStatus, setThreeStatus] = React.useState("h-12 w-12");
    let [fourStatus, setFourStatus] = React.useState("h-12 w-12");
    let [fiveStatus, setFiveStatus] = React.useState("h-12 w-12");
    let [sixStatus, setSixStatus] = React.useState("h-12 w-12");

    // TODO: can probably make it such that the h-12/w-12 is using a global parameter sizing, and the h-14/w-14 is a size up 
    function resetOtherState() {
        setOneStatus("h-12 w-12");
        setTwoStatus("h-12 w-12");
        setThreeStatus("h-12 w-12");
        setFourStatus("h-12 w-12");
        setFiveStatus("h-12 w-12");
        setSixStatus("h-12 w-12");
    }

    return (
        <>
            <div className="grid grid-cols-2">
                <div className="grid justify-items-end">
                    <FontAwesomeIcon icon={faDiceOne} className={oneStatus} onClick={() => {
                        setCurrentFace(1);
                        resetOtherState()
                        setOneStatus("h-14 w-14");
                    }} />
                    <FontAwesomeIcon icon={faDiceTwo} className={twoStatus} onClick={() => {
                        setCurrentFace(2)
                        resetOtherState()
                        setTwoStatus("h-14 w-14");
                    }} />
                    <FontAwesomeIcon icon={faDiceThree} className={threeStatus} onClick={() => {
                        setCurrentFace(3);
                        resetOtherState()
                        setThreeStatus("h-14 w-14");
                    }} />
                </div>
                <div className="grid justify-items-start">
                    <FontAwesomeIcon icon={faDiceFour} className={fourStatus} onClick={() => {
                        setCurrentFace(4)
                        resetOtherState();
                        setFourStatus("h-14 w-14");
                    }} />
                    <FontAwesomeIcon icon={faDiceFive} className={fiveStatus} onClick={() => {
                        setCurrentFace(5)
                        resetOtherState();
                        setFiveStatus("h-14 w-14");
                    }} />
                    <FontAwesomeIcon icon={faDiceSix} className={sixStatus} onClick={() => {
                        setCurrentFace(6);
                        resetOtherState();
                        setSixStatus("h-14 w-14");
                    }} />
                </div>
            </div>
        </>
    );
}

export default FacePanel;