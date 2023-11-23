/**
 * list of 100 question objects
 * { question, subject, topic, difficulty, marks }
 */

const mock_data = [
    {
        question: "What is the capital of India?",
        subject: "Social Studies",
        topic: "Geography",
        difficulty: "Easy",
        marks: 1
    }, {
        question: "What is the capital of Australia?",
        subject: "Social Studies",
        topic: "Geography",
        difficulty: "Easy",
        marks: 1
    }, {
        question: "What is the capital of United States of America?",
        subject: "Social Studies",
        topic: "Geography",
        difficulty: "Easy",
        marks: 1
    }, {
        question: "What is the capital of China?",
        subject: "Social Studies",
        topic: "Geography",
        difficulty: "Easy",
        marks: 2
    }, {
        question: "What is the capital of Japan?",
        subject: "Social Studies",
        topic: "Geography",
        difficulty: "Easy",
        marks: 2
    }, {
        question: "What is the capital of South Korea?",
        subject: "Social Studies",
        topic: "Geography",
        difficulty: "Easy",
        marks: 2
    }, {
        question: "What is the capital of North Korea?",
        subject: "Social Studies",
        topic: "Geography",
        difficulty: "Easy",
        marks: 2
    }, {
        question: "What is the capital of Russia?",
        subject: "Social Studies",
        topic: "Geography",
        difficulty: "Easy",
        marks: 2
    }, {
        question: "What is the capital of Germany?",
        subject: "Social Studies",
        topic: "Geography",
        difficulty: "Easy",
        marks: 2
    }, {
        question: "Which is the largest continent in the world?",
        subject: "Social Studies",
        topic: "Geography",
        difficulty: "Easy",
        marks: 3
    }, {
        question: "Which is the smallest continent in the world?",
        subject: "Social Studies",
        topic: "Geography",
        difficulty: "Easy",
        marks: 3
    }, {
        question: "Which is the largest country in the world?",
        subject: "Social Studies",
        topic: "Geography",
        difficulty: "Easy",
        marks: 3
    }, {
        question: "Which is the smallest country in the world?",
        subject: "Social Studies",
        topic: "Geography",
        difficulty: "Easy",
        marks: 3
    }, {
        question: "Which is the largest ocean in the world?",
        subject: "Social Studies",
        topic: "Geography",
        difficulty: "Easy",
        marks: 3
    }, {
        question: "Which is the smallest ocean in the world?",
        subject: "Social Studies",
        topic: "Geography",
        difficulty: "Easy",
        marks: 3
    }, {
        question: "Which is the largest river in the world?",
        subject: "Social Studies",
        topic: "Geography",
        difficulty: "Easy",
        marks: 3
    }, {
        question: "Which is the smallest river in the world?",
        subject: "Social Studies",
        topic: "Geography",
        difficulty: "Easy",
        marks: 3
    }, {
        question: "Which is the largest desert in the world?",
        subject: "Social Studies",
        topic: "Geography",
        difficulty: "Easy",
        marks: 3
    }, {
        question: "Which is the smallest desert in the world?",
        subject: "Social Studies",
        topic: "Geography",
        difficulty: "Easy",
        marks: 3
    }, {
        question: "Which is the largest mountain in the world?",
        subject: "Social Studies",
        topic: "Geography",
        difficulty: "Easy",
        marks: 4
    }, {
        question: "Which is the smallest mountain in the world?",
        subject: "Social Studies",
        topic: "Geography",
        difficulty: "Easy",
        marks: 4
    }, {
        question: "Which is the largest country in the world?",
        subject: "Social Studies",
        topic: "Geography",
        difficulty: "Easy",
        marks: 4
    }, {
        question: "Which is the smallest country in the world?",
        subject: "Social Studies",
        topic: "Geography",
        difficulty: "Easy",
        marks: 4
    }, {
        question: "Which is the largest ocean in the world?",
        subject: "Social Studies",
        topic: "Geography",
        difficulty: "Easy",
        marks: 4
    }, {
        question: "Which is the smallest ocean in the world?",
        subject: "Social Studies",
        topic: "Geography",
        difficulty: "Easy",
        marks: 4
    }, {
        question: "Which is the largest river in the world?",
        subject: "Social Studies",
        topic: "Geography",
        difficulty: "Easy",
        marks: 4
    }, {
        question: "Which is the smallest river in the world?",
        subject: "Social Studies",
        topic: "Geography",
        difficulty: "Easy",
        marks: 4
    }, {
        question: "Which is the largest desert in the world?",
        subject: "Social Studies",
        topic: "Geography",
        difficulty: "Easy",
        marks: 4
    }, {
        question: "Which is the smallest desert in the world?",
        subject: "Social Studies",
        topic: "Geography",
        difficulty: "Easy",
        marks: 4
    }, {
        question: "Which is the largest animal in the world?",
        subject: "Social Studies",
        topic: "Biology",
        difficulty: "Easy",
        marks: 4
    }, {
        question: "Which is the smallest animal in the world?",
        subject: "Social Studies",
        topic: "Biology",
        difficulty: "Easy",
        marks: 4
    }, {
        question: "Which is the largest bird in the world?",
        subject: "Social Studies",
        topic: "Biology",
        difficulty: "Easy",
        marks: 4
    }, {
        question: "Which is the smallest bird in the world?",
        subject: "Social Studies",
        topic: "Biology",
        difficulty: "Easy",
        marks: 4
    }, {
        question: "Which is the largest fish in the world?",
        subject: "Social Studies",
        topic: "Biology",
        difficulty: "Easy",
        marks: 4
    }, {
        question: "Which is the smallest fish in the world?",
        subject: "Social Studies",
        topic: "Biology",
        difficulty: "Easy",
        marks: 4
    }, {
        question: "Which is the largest tree in the world?",
        subject: "Social Studies",
        topic: "Biology",
        difficulty: "Easy",
        marks: 4
    }, {
        question: "Which is the smallest tree in the world?",
        subject: "Social Studies",
        topic: "Biology",
        difficulty: "Easy",
        marks: 4
    }, {
        question: "Which is the largest planet in the solar system?",
        subject: "Social Studies",
        topic: "Astronomy",
        difficulty: "Easy",
        marks: 4
    }, {
        question: "Which is the smallest planet in the solar system?",
        subject: "Social Studies",
        topic: "Astronomy",
        difficulty: "Easy",
        marks: 4
    }, {
        question: "What is the square root of someone only we know?",
        subject: "Mathematics",
        topic: "Algebra",
        difficulty: "Medium",
        marks: 5
    }, {
        question: "What is the integral of the world where we live in?",
        subject: "Mathematics",
        topic: "Calculus",
        difficulty: "Medium",
        marks: 8
    },
    {
        question: "Solve the equation 2x + 5 = 13.",
        subject: "Mathematics",
        topic: "Algebra",
        difficulty: "Medium",
        marks: 8
    },
    {
        question: "Evaluate the limit lim(x->2) (x^2 - 4) / (x - 2).",
        subject: "Mathematics",
        topic: "Calculus",
        difficulty: "Medium",
        marks: 8
    },
    {
        question: "Factorize the quadratic expression x^2 + 6x + 9.",
        subject: "Mathematics",
        topic: "Algebra",
        difficulty: "Medium",
        marks: 10
    },
    {
        question: "Find the derivative of f(x) = 3x^2 + 2x - 5.",
        subject: "Mathematics",
        topic: "Calculus",
        difficulty: "Medium",
        marks: 8
    },
    {
        question: "Simplify the expression (3/5) * (10/7) / (2/3).",
        subject: "Mathematics",
        topic: "Algebra",
        difficulty: "Medium",
        marks: 8
    },
    {
        question: "Calculate the area of a circle with radius 4 units.",
        subject: "Mathematics",
        topic: "Geometry",
        difficulty: "Medium",
        marks: 8
    },
    {
        question: "Solve the inequality 2x - 7 > 5.",
        subject: "Mathematics",
        topic: "Algebra",
        difficulty: "Medium",
        marks: 8
    },
    {
        question: "Find the integral of sin(x) with respect to x.",
        subject: "Mathematics",
        topic: "Calculus",
        difficulty: "Medium",
        marks: 8
    },
    {
        question: "Determine the value of log(base 2) 8.",
        subject: "Mathematics",
        topic: "Algebra",
        difficulty: "Medium",
        marks: 8
    },
    {
        question: "Calculate the perimeter of a rectangle with length 10 units and width 6 units.",
        subject: "Mathematics",
        topic: "Geometry",
        difficulty: "Medium",
        marks: 8
    },
    {
        question: "Simplify the expression sqrt(27) / sqrt(3).",
        subject: "Mathematics",
        topic: "Algebra",
        difficulty: "Medium",
        marks: 8
    },
    {
        question: "Find the critical points of the function f(x) = x^3 - 6x^2 + 9x.",
        subject: "Mathematics",
        topic: "Calculus",
        difficulty: "Medium",
        marks: 8
    },
    {
        question: "Solve the system of equations: 2x + y = 5, 3x - 2y = 4.",
        subject: "Mathematics",
        topic: "Algebra",
        difficulty: "Medium",
        marks: 8
    },
    {
        question: "Calculate the volume of a cylinder with radius 3 units and height 8 units.",
        subject: "Mathematics",
        topic: "Geometry",
        difficulty: "Medium",
        marks: 8
    },
    {
        question: "Find the derivative of ln(x) with respect to x.",
        subject: "Mathematics",
        topic: "Calculus",
        difficulty: "Medium",
        marks: 8
    },
    {
        question: "Determine the value of cos(pi/3).",
        subject: "Mathematics",
        topic: "Trigonometry",
        difficulty: "Medium",
        marks: 8
    },
    {
        question: "Simplify the expression (4^3) / (2^2).",
        subject: "Mathematics",
        topic: "Algebra",
        difficulty: "Medium",
        marks: 8
    },
    {
        question: "Calculate the area of a triangle with base 5 units and height 8 units.",
        subject: "Mathematics",
        topic: "Geometry",
        difficulty: "Medium",
        marks: 8
    },
    {
        question: "Evaluate the definite integral ∫(0 to π) sin(x) dx.",
        subject: "Mathematics",
        topic: "Calculus",
        difficulty: "Medium",
        marks: 8
    },
    {
        question: "Solve the equation log(base 3) (x - 1) = 2.",
        subject: "Mathematics",
        topic: "Algebra",
        difficulty: "Medium",
        marks: 8
    },
    {
        question: "What is the most abundant gas in the Earth's atmosphere and what machine learning model can be used to discover dark matter in the atmosphere provided the person trying to discover it is has watched the German series - Dark?",
        subject: "Science",
        topic: "Physics",
        difficulty: "Hard",
        marks: 10
    },
    {
        question: "If a tree falls in a forest and no one is around to hear it, how many pancakes does it take to cover the roof of the White House?",
        subject: "Randomology",
        topic: "Pancake Physics",
        difficulty: "Hard",
        marks: 15
    },
    {
        question: "Explain the correlation between the lifespan of a light bulb and the number of times a chicken crosses the road in a day.",
        subject: "Poultry Studies",
        topic: "Electro-Avian Dynamics",
        difficulty: "Hard",
        marks: 12
    },
    {
        question: "What is the gravitational pull of a black hole made entirely of marshmallows on a scale of marshmallow to marshmallow?",
        subject: "Cosmic Confectionery",
        topic: "Marshmallow Physics",
        difficulty: "Hard",
        marks: 12
    },
    {
        question: "If Schrödinger's cat started a rock band, what would be the name of their first album, and how many quantum guitars would they need?",
        subject: "Quantum Musicology",
        topic: "Cat Rock",
        difficulty: "Hard",
        marks: 18
    },
    {
        question: "Describe the chemical composition of unicorn tears and its potential application in intergalactic diplomacy.",
        subject: "Mythical Chemistry",
        topic: "Unicornology",
        difficulty: "Hard",
        marks: 20
    },
    {
        question: "In a parallel universe where gravity repels instead of attracts, calculate the trajectory of a helium-filled lead balloon.",
        subject: "Alternate Reality Physics",
        topic: "Antigravity Aerodynamics",
        difficulty: "Hard",
        marks: 10
    },
    {
        question: "If time travel were possible, explain how it might impact the global market for antique toaster ovens.",
        subject: "Temporal Economics",
        topic: "Vintage Appliance Futures",
        difficulty: "Hard",
        marks: 12
    },
    {
        question: "Analyse the psychological effects of naming a pet rock and determine if it improves its self-esteem.",
        subject: "Rock Psychology",
        topic: "Pet Rock Therapy",
        difficulty: "Hard",
        marks: 12
    },
    {
        question: "What is the airspeed velocity of an unladen swallow carrying a coconut through a wormhole?",
        subject: "Avian Wormhole Dynamics",
        topic: "Swallow Relativity",
        difficulty: "Hard",
        marks: 12
    },
    {
        question: "If a tree can clap its branches and no one is around to witness it, does it still win the forest talent show?",
        subject: "Arboreal Performing Arts",
        topic: "Tree Talent Dynamics",
        difficulty: "Hard",
        marks: 12
    },
]

module.exports = mock_data;