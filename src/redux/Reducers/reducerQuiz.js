const initialState = {
  qBank: [
    {
      question: "Are you experiencing any of the following symptoms?",
      answers: [
        "Cough",
        "Fever",
        "Difficulty in Breathing",
        "Loss of senses of smell and taste",
        "None of the Above",
      ],
      correct: "None of the Above",
      questionId: "1",
    },
    {
      question: "Have you ever had any of the following:",
      answers: [
        "Diabetes",
        "Hypertension",
        "Lung disease",
        "Heart Disease",
        "Kidney Disorder",
        "None of the Above",
      ],
      correct: "None of the Above",
      questionId: "2",
    },
    {
      question:
        "Have you traveled anywhere internationally in the last 28-45 days?",
      answers: ["yes", "no"],
      correct: "no",
      questionId: "3",
    },
    {
      question: "Which of the following apply to you?",
      answers: [
        "I have recently interacted or lived with someone who has tested positive for COVID-19",
        "I am a healthcare worker and I examined a COVID-19 confirmed case without protective gear",
        "None of the Above",
      ],
      correct: "None of the Above",
      questionId: "4",
    },
  ],
  score: 0,

  response: 0,
};

const Reducer2 = (state = initialState, action) => {
  const { type, payload, payload2, payload3, payload4 } = action;
  switch (type) {
    case "SET_ANSWER":
      const stateCopy = { ...state };
      let setfind = stateCopy.qBank.find((find) => find.questionId === payload);
      setfind.answers = [payload2];
      let temp5 = stateCopy.qBank;
      temp5.splice();
      stateCopy.qBank = [...temp5];
      return stateCopy;
    case "SET_SCORE":
      state = { ...state, score: payload3 + 1 };
      return state;
    case "SET_RETAKE":
      const stateCopy1 = {
        ...state,
        qBank: [
          {
            question: "Are you experiencing any of the following symptoms?",
            answers: [
              "Cough",
              "Fever",
              "Difficulty in Breathing",
              "Loss of senses of smell and taste",
              "None of the Above",
            ],
            correct: "None of the Above",
            questionId: "1",
          },
          {
            question: "Have you ever had any of the following:",
            answers: [
              "Diabetes",
              "Hypertension",
              "Lung disease",
              "Heart Disease",
              "Kidney Disorder",
              "None of the Above",
            ],
            correct: "None of the Above",
            questionId: "2",
          },
          {
            question:
              "Have you traveled anywhere internationally in the last 28-45 days?",
            answers: ["yes", "no"],
            correct: "no",
            questionId: "3",
          },
          {
            question: "Which of the following apply to you?",
            answers: [
              "I have recently interacted or lived with someone who has tested positive for COVID-19",
              "I am a healthcare worker and I examined a COVID-19 confirmed case without protective gear",
              "None of the Above",
            ],
            correct: "None of the Above",
            questionId: "4",
          },
        ],
        score: 0,
        response: 0,
      };
      return stateCopy1;
    case "SET_RESPONSE":
      const stateCopy2 = { ...state, response: payload4 };
      return stateCopy2;

    default:
      return state;
  }
};

export default Reducer2;
