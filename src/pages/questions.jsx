import React from 'react'

// import data from "./questinaire/MockData.json"
const questions = () => {
  return (
    <>
      <div className='MainComponent'>
        <div className='questionBox'>
          <div className='questions'>

              <p> Q 1. Who is the full form of RSA algorithm  ? </p>

              <div className='difficulty_level'>
                Easy
              </div>
          </div>
        </div>

        <div className='questionBox'> 
          <div className='questions'>
            <p> Q 2. What was the algorithm to determin the plaintext and cipher text in the algamal algorithm  ? </p>
            <p className='badge difficulty'>Easy</p>
            <p className='badge subject'>Cryptography</p>
            <p className='badge topic'>Assymetric algorithms</p>
          </div>
            <span className='marks_lebel'> 10 marks</span>

        </div> 

      </div>
      </>
      )
}

      export default questions