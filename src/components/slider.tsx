'use client'
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import Marks from 'rc-slider/lib/Marks';

function handleChange() {
    console.log("slider was moved");
}

// function generateMarks(max: number){
//     let markArray = {};
//     for (let i = 0; i < max; i++){
//         let key = i.toString;
//         markArray[key] = i;
//     }
//     return markArray;
// }

// const marks = generateMarks(20);

export default () => (
    <>
        <Slider
            range
            min={0}
            max={20}
            startPoint={0}
            onChange={handleChange}
            marks={marks}
        />
        {/* <Range /> */}
    </>
);