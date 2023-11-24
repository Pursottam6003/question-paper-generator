import React, { useState } from "react";

const QuestionComponent = ({ sno, question, difficulty, subject, topic, marks }) => (


    <tr className="table_row_data">
        <td>{sno + 1}</td>
        <td>{question}</td>
        <td>{subject}</td>
        <td>{topic}</td>
        <td>
            <span className={`difficulty-tag ${difficulty.toLowerCase()}`}>{difficulty}</span>
        </td>
        <td>{marks}</td>
    </tr>


)



export default QuestionComponent;