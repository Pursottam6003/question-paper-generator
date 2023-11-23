import React from "react";


const QuestionComponent = ({ question, difficulty, subject, topic, marks }) => (
    <div className='questionBox'>
        <div className='questions'>
            <p className="questionName">{question}</p>
            <p className='badge difficulty'>{difficulty}</p>
            <p className='badge subject'>{subject}</p>
            <p className='badge topic'>{topic}</p>
        </div>
        <span className='marks_lebel'> {marks} Marks</span>
    </div>
);


export default QuestionComponent;