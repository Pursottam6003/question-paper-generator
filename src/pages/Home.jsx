import React, { useState } from 'react';
import Rangeslider from './RangeInputs'
import { useNavigate } from 'react-router-dom';


const Home = () => {
    const [difficultyDist, setDifficultyDist] = useState({ easy: 100, medium: 0, hard: 0 });
    const [totalMarks, setTotalMarks] = useState(100);

    const navigation = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const { easy, medium, hard } = difficultyDist;
        if (e.target.name === 'random') {
            let randEasy = Math.floor((totalMarks * Math.random()));
            let remainingMarks = totalMarks - randEasy;
            let randMedium = Math.floor((remainingMarks * Math.random()));
            let randHard = remainingMarks - randMedium;

            // setDifficultyDist({
            //     easy: randEasy,
            //     medium: randMedium,
            //     hard: randHard
            // })
            navigation(`/questions?totalMarks=${totalMarks}&easy=${randEasy}&medium=${randMedium}&hard=${randHard}`)
        } else {
            navigation(`/questions?totalMarks=${totalMarks}&easy=${easy}&medium=${medium}&hard=${hard}`)
        }
    }

    return (
        <div className="container sm">
            <form>
                <h1>Question Paper Generator</h1>
                <label>Total Marks</label>
                <input type="number" onChange={(e) => setTotalMarks(e.target.value)} value={totalMarks} placeholder={"Example: 40"} />
                <p>Select the difficulty level for the questions</p>
                <Rangeslider distribution={difficultyDist} setDistribution={setDifficultyDist} />
                <div className='flex form-actions'>
                    <button name='generate' className='btn primary' onClick={handleSubmit} type='button'>Generate</button>
                    <button name='random' className='btn' onClick={handleSubmit} type='button' >Random</button>
                </div>
            </form>
        </div>
    )
};

export default Home;