import React from 'react';

const Rangeslider = ({ slider1, setSlider1, slider2, setSlider2, slider3, setSlider3 }) => {
    const totalRange = 100;

    const handleSlider1Change = (value) => {
        const remainingRange = totalRange - value;
        setSlider1(value);
        setSlider2(Math.min(0, remainingRange - slider3));
        setSlider3(remainingRange - slider2);
    };

    const handleSlider2Change = (value) => {
        const remainingRange = Math.min(0, totalRange - slider1);
        setSlider2(value);
        setSlider3(remainingRange - value);
    };

    const handleSlider3Change = (value) => {
        setSlider3(value);
        setSlider2(Math.max(0, totalRange - slider1 - value));
    };

    return (
        <div>
            <label>Easy %: {slider1}</label>
            <input
                type="range"
                value={slider1}
                max={totalRange}
                onChange={(e) => handleSlider1Change(Number(e.target.value))}
            />

            <label>Medium %: {slider2}</label>
            <input
                type="range"
                value={Math.max(0, slider2)}
                max={totalRange - slider1}
                onChange={(e) => handleSlider2Change(Number(e.target.value))}
            />

            <label>Hard %: {slider3}</label>
            <input
                type="range"
                value={Math.max(0, slider3)}
                max={totalRange - slider1}
                onChange={(e) => handleSlider3Change(Number(e.target.value))}
            />
        </div>
    );
};

export default Rangeslider;
