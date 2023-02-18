import QtyModBtn from '@/components/qty-mod-btn';
import Slider from '@/components/slider';
import React from 'react';

const QuantityPanel = () => {
    return (
        <>
            <div className='grid justify-items-center'>
                <div className="grid">
                    {/* Consider using Range from tailwindcss instead? Also consider just not using a range component LOL*/}
                    {/* <Slider panelHeight={100} panelWidth={100} maxBet={20} /> */}
                    <span>Quantity</span>
                    <QtyModBtn increment={1} />
                    <QtyModBtn increment={-1} />
                </div>
            </div>
        </>
    );
}

export default QuantityPanel;