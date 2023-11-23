const express = require('express');

var mock_data = require('./questionaire/questions')

const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());


app.listen(port, () => {
  console.log(`Server is running on port ${port}...`);
});

const totalMarks = 100;
const questionStore = mock_data;

const getquestions = (questionStore, totalMarks, difficultyPercentageDistribution) => {
  // shuffle questions in questionStore
  const shuffledQuestions = questionStore.sort(() => Math.random() - 0.3);

  const selectedQuestions = [];

  for (const [difficulty, percentage] of Object.entries(difficultyPercentageDistribution)) {
    const difficultyQuestions = shuffledQuestions.filter(q => q.difficulty.toLowerCase() === difficulty.toLowerCase())
    let difficultyLevelMarks = Math.floor((totalMarks * percentage) / 100);

    selectedQuestions.push(generateQuestions(difficultyQuestions, difficultyLevelMarks, difficultyPercentageDistribution))
  }
  return selectedQuestions;
}

const generateQuestions = (questionStore, totalMarks, difficultyPercentageDistribution) => {
  const dp = Array.from({ length: totalMarks + 1 }, () => Array(questionStore.length + 1).fill(0));

  for (let i = 1; i <= questionStore.length; i++) {
    const question = questionStore[i - 1];
    for (let j = 1; j <= totalMarks; j++) {
      if (question.marks <= j) {
        dp[j][i] = Math.max(
          question.marks + dp[j - question.marks][i - 1],
          dp[j][i - 1]
        );
      } else {
        dp[j][i] = dp[j][i - 1];
      }
    }
  }

  const selectedQuestions = [];
  let i = questionStore.length;
  let j = totalMarks;

  while (i > 0 && j > 0) {
    if (dp[j][i] !== dp[j][i - 1]) {
      selectedQuestions.push(questionStore[i - 1]);
      j -= questionStore[i - 1].marks;
    }
    i--;
  }

  return selectedQuestions.reverse();
};

// const mydifficultyLevelquestions = generateQuestions(questionStore, 100, difficultyPercentageDistribution);
const difficultyPercentageDistribution = {
  "Easy": 50,
  "Medium": 25,
  "Hard": 25
}
const selectedQuestions = getquestions(questionStore, totalMarks, difficultyPercentageDistribution);


let res_data = selectedQuestions;

app.get('/questions', (req, res) => {
  const { totalMarks, easy, medium, hard } = req.query;
  if (!totalMarks || !easy || !medium || !hard) res.send("Please provide all query params");
  res_data = getquestions(questionStore, totalMarks, { easy, medium, hard })
  if (res_data.length > 0) {
    res.send(res_data);
  }
  else {
    res.send("No data found");
  }
});
