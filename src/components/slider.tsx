'use client'
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

function handleChange() {
    console.log("slider was moved");
}

function generateMarks(num: number) {
    const marks = {};
    for (let i = 0; i <= num; i += 2) {
        Object.assign(marks, { [i.toString()]: i });
    }
    return marks;
}

const slider = (props: { panelHeight: number, panelWidth: number, maxBet: number }) => {
    const marks = generateMarks(props.maxBet);
    return (
        <>
            {/* need to make the styles responsive, should also probably use className as well */}
            <div style={{ height: props.panelHeight, width: props.panelWidth }}>
                <Slider
                    vertical
                    marks={marks}
                    min={0}
                    max={20}
                    startPoint={0}
                    onChange={handleChange}
                />
            </div>
        </>
    );
};

export default slider;