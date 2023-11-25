import React, { useState } from 'react'
import { useEffect } from 'react'
import QuestionComponent from './questionCompoenent'
import { NavLink, useLocation } from 'react-router-dom'

const fetchQuestions = async (querry) => {
  const q = Object.keys(querry).map(key => key + '=' + querry[key]).join('&');
  const response = await fetch('https://server-question-paper.onrender.com/questions?' + q);
  const data = await response.json();
  return data;
}

const Questions = () => {

  const location = useLocation();
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState('all');

  const params = new URLSearchParams(location.search);
  let totalMarks = params.get("totalMarks")
  let easy = params.get("easy")
  let medium = params.get("medium")
  let hard = params.get("hard")

  if (totalMarks === null || easy === null || medium === null || hard === null) {
    return <>
      <div className='error container'>
        <div className='icon-wrapper'>
          <svg className='info-icon' focusable="false" aria-hidden="true" viewBox="0 0 24 24">
            <path d="M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z"></path>
          </svg>
        </div>
        <div className='error-message'>
          Please provide total marks and difficulty distribution from the <NavLink to='/'>home page</NavLink>
        </div>
      </div>
    </>
  }

  async function getQuestions() {


    try {
      let fetchedData = await fetchQuestions({ totalMarks, easy, medium, hard });
      setData(fetchedData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  useEffect(() => {
    getQuestions();
  }, []);

  return (
    <>
      <div className='gridContainer'>
        <div className='gridItem1'>

          <div className='additional_info'>
            <div className='additional_info_box ' style={{ display: "flex", gap: "10px", flexDirection: "row" }}>
              <p>Total Marks: {totalMarks}</p>
              <p>Easy: {Math.floor(easy / 100 * totalMarks)} Marks</p>
              <p>Medium: {Math.floor(medium / 100 * totalMarks)} Marks </p>
              <p>Hard: {Math.floor(hard / 100 * totalMarks)}  Marks</p>
            </div>
          </div>
          <table className="table table-hover responsive nowrap">

            <thead>
              <tr>
                <th>Sno</th>
                <th>Question Title</th>
                <th>Subject</th>
                <th>Difficulty</th>
                <th>Topic</th>
                <th>Marks</th>
              </tr>

            </thead>

            {data.length === 3 ? {
              'easy': data[0],
              'medium': data[1],
              'hard': data[2],
              'all': data[0].concat(data[1], data[2])
            }[filter].map((q, i) => {
              return <QuestionComponent
                key={i}
                sno={i}
                question={q.question}
                difficulty={q.difficulty}
                subject={q.subject}
                topic={q.topic}
                marks={q.marks}
              />
            }) : <h4>loading</h4>}



          </table>
        </div>

        <div className='gridItem3'>
          <div className='filter'>
            <p>Filter by difficulty</p>
            <div className='filterBox'>

              <button className='rounded-btn' onClick={() => { setFilter('all') }}>all</button>
              <button className='rounded-btn' id="all" name="difficulty" value="all" onClick={() => setFilter('easy')}  > easy</button>

              <button className='rounded-btn' onClick={() => { setFilter('medium') }}>
                medium
              </button>

              <button className='rounded-btn' onClick={() => { setFilter('hard') }}>hard</button>

            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default Questions