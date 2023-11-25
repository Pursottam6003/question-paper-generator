import React, { useState } from 'react'
import { useEffect } from 'react'
import QuestionComponent from './questionCompoenent'
import { useLocation } from 'react-router-dom'

const fetchQuestions = async (querry) => {
  const q = Object.keys(querry).map(key => key + '=' + querry[key]).join('&');
  const response = await fetch('https://server-question-paper.onrender.com/questions?' + q);
  const data = await response.json();
  console.log(data);
  return data;
}

const Questions = () => {

  const location = useLocation();
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState('all');

  async function getQuestions() {

    const params = new URLSearchParams(location.search);
    let totalMarks = params.get("totalMarks")
    let easy = params.get("easy")
    let medium = params.get("medium")
    let hard = params.get("hard")

    try {
      let fetchedData = await fetchQuestions({ totalMarks, easy, medium, hard });
      setData(fetchedData);
      console.log('mydata', data);
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