import React, { useState } from 'react'
import { useEffect } from 'react'
import QuestionComponent from './questionCompoenent'
import { useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

const fetchQuestions = async (querry) => {
  const q = Object.keys(querry).map(key => key + '=' + querry[key]).join('&');
  const response = await fetch('http://localhost:5000/questions?' + q);
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
      <div className='MainComponent'>

        <div className='questionBox'>

          <div className='filter'>
            <div className='filterBox'>
              <h1>Filters</h1>
              <input type="radio" id="all" name="difficulty" value="all" onChange={() => setFilter('all')} />
              <label htmlFor="difficulty">All</label><br />
              <input type="radio" id="easy" name="difficulty" value="easy"
                onChange={() => setFilter('easy')} />
              <label htmlFor="subject">Easy</label><br />
              <input type="radio" id="medium" name="difficulty" value="medium" onChange={() => { setFilter('medium') }} />
              <label htmlFor="topic">Medium</label><br />
              <input type="radio" id="hard" name="difficulty" value="hard" onChange={() => { setFilter('hard') }} />
              <label htmlFor="marks">Hard</label><br />

            </div>
          </div>

          {data.length === 3 ? {
            'easy': data[0],
            'medium': data[1],
            'hard': data[2],
            'all': data[0].concat(data[1], data[2])
          }[filter].map((q, i) => {
            return <QuestionComponent
              key={i}
              question={q.question}
              difficulty={q.difficulty}
              subject={q.subject}
              topic={q.topic}
              marks={q.marks}
            />
          }) : <h1>loading</h1>}
        </div>
      </div>
    </>
  )
}

export default Questions