
const questions = [
    {
      question: "1. What is the name of the RHCP's first album?",
      options: ["The Red Hot Chili Peppers", "Blood Sugar Sex Magik", "Californication", "Stadium Arcadium"],
      images: ["Images/RHCPalbum.jpeg", "Images/RHCPalbum3.jpeg", "Images/RHCPalbum2.jpeg", "Images/RHCPalbum4.jpeg"],
      answer: "The Red Hot Chili Peppers"
    },
    {
      question: "2. What is the name of the RHCP's lead singer?",
      options: ["Flea", "Chad Smith","Anthony Kiedis", "John Frusciante"],
      images: ["Images/Flea-RHCP.jpeg", "Images/Chad-Smith.jpeg", "Images/Kiedis-RHCP.jpeg", "Images/John-Rhcp.jpeg"],
      answer: "Anthony Kiedis"
    },
    {
        question: "3. What year did the RHCP form?",
        options: ["1980", "1982", "1984", "1983"],
        images: ["Images/1980.jpeg", "Images/1982.jpeg", "Images/1984.jpeg", "Images/1983.jpeg"],
        answer: "1982"
    },
    {
        question: "4. Who is the first person seen at the start of the Red Hot Chili Peppers `Under the Bridge` video?",
        options: ["Flea", "Chad Smith","Anthony Kiedis", "John Frusciante"],
        images: ["Images/Flea-RHCP.jpeg", "Images/Chad-Smith.jpeg", "Images/Kiedis-RHCP.jpeg", "Images/John-Rhcp.jpeg"],
        answer: "John Frusciante"
      },
      {
        question: "5. In their hit song `Californication` which Star Wars planet do the Red Hot Chili Peppers mention?",
        options: ["Tatooine", "Alderaan","Naboo", "Coruscant"],
        images: ["Images/Tatooine.jpeg", "Images/Naboo.jpeg", "Images/Coruscant.jpeg", "Images/Alderaan.jpeg"],
        answer: "Alderaan"
      },
      {
        question: "6. How many singles were released off the Red Hot Chili Peppers album `Blood Sugar Sex Magik`?",
        images: false,
        options: ["5", "1", "6", "2"],
        answer: "5"
      },
      {
        question: "7. When was RHCP inducted into the rock Hall of Fame?",
        options: ["2006", "2010", "2014", "2012"],
        images: false,
        answer: "2012"
      },
      {
        question: "8. What is the most incoherent RHCP song?",
        options: ["Under the Bridge", "Me and My Friends", "Give it Away", "All of Them"],
        images: false,
        answer: "All of Them"
      },
      {
        question: "What was the original name of the band?",
        options: ["Red Hot Chili Peppers", "Tony Flow and the Majestic Masters of Mayhem", "Strip Our Mind", "Tony Flow and the Miraculously Majestic Masters of Mayhem"],
        images: false,
        answer: "Tony Flow and the Majestic Masters of Mayhem"
      },
      {
        question: "Which Red Hot Chili Peppers' song was written about Aborigines?",
        options: ["Righteous And The Wicked", "Parallel Universe", "Right On Time", "Walkabout"],
        answer: "Walkabout"
      },
      {
        question: "What instrument besides the bass does Flea play on the video Psychedelic Sexfunk `Live From Heaven`?",
        options: ["Saxophone", "Keyboard", "Trumpet", "Harmonica"],
        answer: "Trumpet"
      },
      {
        question: "In the Red Hot Chili Peppers' song `Coffee Shop`, the lyrics say they can dance like who?",
        options: ["Simon Black", "Iggy Pop", "Usher", "Michael Jackson"],
        answer: "Iggy Pop"
      },
      {
        question: "What was ex/current Red Hot Chili Peppers guitarist John Frusciante's first solo album called?",
        options: ["Niandra Lades And Usually Just A T-Shirt", "Grest Beggins", "Three Walk Four Bare", "Question For Freedomships Spinning In The Sky"],
        answer: "Niandra Lades And Usually Just A T-Shirt"
      }
    // Add more questions here
  ];
  
  let currentQuestion = 0;
  let score = 0;
  
  const questionEl = document.getElementById("question");
  const option1El = document.getElementById("option1");
  const option2El = document.getElementById("option2");
  const option3El = document.getElementById("option3");
  const option4El = document.getElementById("option4");
  const nextEl = document.getElementById("next");
  const showAnswersEl = document.getElementById("show-answers");
  const scoreEl = document.getElementById("score");
  const image1El = document.querySelectorAll(".option img")[0];
  const image2El = document.querySelectorAll(".option img")[1];
  const image3El = document.querySelectorAll(".option img")[2];
  const image4El = document.querySelectorAll(".option img")[3];
  
  function showQuestion() {
    const question = questions[currentQuestion];
    questionEl.innerText = question.question;
    option1El.innerText = question.options[0];
    option2El.innerText = question.options[1];
    option3El.innerText = question.options[2];
    option4El.innerText = question.options[3];
    image1El.src = question.images[0];
    image2El.src = question.images[1];
    image3El.src = question.images[2];
    image4El.src = question.images[3];
  }
  
  function checkAnswer(answer) {
    if (answer === questions[currentQuestion].answer) {
      score++;
      currentScore()
    }
    currentQuestion++;
    if (currentQuestion < questions.length) {
      showQuestion();
    } else {
      showScore();
    }
  }
  
  function currentScore() {
    scoreEl.innerText = `Your score is ${score}/${questions.length}`;
  }

  function showScore() {
    scoreEl.innerText = `Your final score is ${score}/${questions.length}`;
  }
  
  nextEl.addEventListener("click", () => {
    const selectedOption = document.querySelector("button.selected");
    if (selectedOption) {
      checkAnswer(selectedOption.innerText);
      selectedOption.classList.remove("selected");
    }
  });
  
  showAnswersEl.addEventListener("click", () => {
    questions.forEach((question, index) => {
      const answer = document.createElement("p");
      answer.innerText = `${index + 1}. ${question.answer}`;
      scoreEl.appendChild(answer);
    });
    showAnswersEl.disabled = true;
  });
  
  document.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => {
      document.querySelectorAll("button").forEach((button) => {
        button.classList.remove("selected");
      });
      button.classList.add("selected");
    });
  });
  

  
  showQuestion();