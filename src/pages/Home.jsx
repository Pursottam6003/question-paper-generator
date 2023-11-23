import { useState } from 'react';
import React from "react";

import Rangeslider from './Rangeslider'
import { useNavigate } from 'react-router-dom';


const Home = () => {
    const [slider1, setSlider1] = useState(0);
    const [slider2, setSlider2] = useState(0);
    const [slider3, setSlider3] = useState(0);
    const navigation = useNavigate();

    const [totalMarks, setTotalMarks] = useState(100);

    const handleSubmit = (e) => {
        e.preventDefault();
        navigation(`/questions?totalMarks=${totalMarks}&easy=${slider1}&medium=${slider2}&hard=${slider3}`)
    }

    return (
        <>
            <div className="container">
                <form onSubmit={handleSubmit}>
                    <h1>Question Paper Generator</h1>
                    <label>Total Marks</label>
                    <input type="number" onChange={(e) => setTotalMarks(e.target.value)} value={totalMarks} placeholder={"Example: 40"} />
                    <h4>Note : You are currently generating the questions for total marks {totalMarks} </h4>
                    <p>Select the difficulty level for the questions</p>
                    <Rangeslider setSlider1={setSlider1} setSlider2={setSlider2} setSlider3={setSlider3} slider1={slider1} slider2={slider2} slider3={slider3} />
                    <button className='btn primary' type='submit'>Generate</button>
                </form>
            </div>
        </>
    )
};

export default Home;