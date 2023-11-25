import React from 'react';

const RangeInputs = ({ distribution, setDistribution, totalRange = 100 }) => {
    const { easy, medium, hard } = distribution;

    const handleSlider1Change = (value) => {
        let remainingValue = totalRange - value;
        let newEasy = value;
        let newMedium = Math.floor(remainingValue / 2)
        let newHard = remainingValue - newMedium;

        setDistribution({
            easy: newEasy,
            medium: newMedium,
            hard: newHard
        })
    };

    const handleSlider2Change = (value) => {
        const remainingHard = totalRange - value - easy;
        if (remainingHard >= 0) {
            setDistribution({
                easy: easy,
                medium: value,
                hard: remainingHard
            })
        } else {
            setDistribution({
                easy: easy + remainingHard,
                medium: value,
                hard: hard
            })
        }
    }

    const handleSlider3Change = (value) => {
        let remainingValue = totalRange - value - medium;
        if (remainingValue >= 0) {
            setDistribution({
                easy: remainingValue,
                medium: medium,
                hard: value
            })
        } else {
            setDistribution({
                easy: easy,
                medium: medium + remainingValue,
                hard: value
            })
        }
    }

    return (
        <div>
            <label>Easy {easy} %</label>
            <input
                type="range"
                value={easy}
                step={1}
                max={totalRange}
                onChange={(e) => handleSlider1Change(Number(e.target.value))}
            />

            <label>Medium {medium} % </label>
            <input
                type="range"
                name='easy'
                step={1}
                value={medium}
                max={totalRange}
                onChange={(e) => handleSlider2Change(Number(e.target.value))}
            />

            <label>Hard  {hard} %</label>
            <input
                type="range"
                step={1}
                value={hard}
                max={totalRange}
                onChange={(e) => handleSlider3Change(Number(e.target.value))}
            />
        </div>
    )
}

export default RangeInputs;
