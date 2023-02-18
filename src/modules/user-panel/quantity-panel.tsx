import QtyModBtn from '@/components/qty-mod-btn';
import Slider from '@/components/slider';
import React from 'react';

const QuantityPanel = () => {
    return (
        <>
            <div className="relative grid">
                QuantityPanel
                {/* Consider using Range from tailwindcss instead? */}
                <Slider panelHeight={100} panelWidth={100} maxBet={20} />
                <QtyModBtn amount={1} />
                <QtyModBtn amount={-1} />
            </div>
        </>
    );
}

export default QuantityPanel;