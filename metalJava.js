
const questions = [
    {
      question: "Paul Di'Anno was the lead singer of which band?",
      options: ["Metallica","Iron Maiden","Radiohead","Mushroomhead"],
      images: ["Images/Metallica.jpeg", "Images/IronMaiden.jpeg", "Images/RadioHead.jpeg", "Images/MushroomHead.jpeg"],
      answer: "Iron Maiden"
    },
    {
      question: "After leaving Metallica, Dave Mustaine became lead vocalist for which band?",
      options: ["He never left Metallica","AC/DC","Megadeath","Foo Fighters"],
      images: ["Images/Yay.jpeg", "Images/ACDC.jpeg", "Images/MegaDeath.jpeg", "Images/FooFighters.jpeg"],
      answer: "Megadeath"
    },
    {
        question:"Which one of these is/was the longest-serving band?",
        options: ["The Rolling Stones","Metallica","Guns `n` Roses","Avenged Sevenfold"],
        images: ["Images/RollingStones.jpeg", "Images/Metallica.jpeg", "Images/GNR.jpeg", "Images/Avenged.jpeg"],
        answer: "The Rolling Stones"
    },
    {
        question: "Which Metallica album sold the most copies",
        options: ["Ride the Lightning","...And Justice For All","The Black Album(Metallica)","Reload"],
        images: ["Images/RTL.jpeg", "Images/AJFA.jpeg", "Images/Black.jpeg", "Images/Reload.jpeg"],
        answer: "The Black Album(Metallica)"
      },
      {
        question:"Which one of these bands performs wearing masks?",
        options: ["Korn","Dope","Lamb of God","Slipknot"],
        images: ["Images/Korn.jpeg", "Images/Dope.jpeg", "Images/LOG.jpeg", "Images/SK.jpeg"],
        answer: "Slipknot"
      },
      {
        question: "Who is the singer of 'System of a Down'?",
        options: ["Serj Tankian","Bob Dylan","James Taylor","Lars Ulrich"],
        images: ["Images/Serj.jpeg", "Images/Bob.jpeg", "Images/James.jpeg", "Images/Lars.jpeg"],
        answer: "Serj Tankian"
      },
      {
        question: "Who is the current lead singer in Judas Preist",
        options: ["Rob Halford", "Tim Owens", "Al Atkins", "James Hetfield"],
        images: ["Images/Rob.jpeg", "Images/Tim.jpeg", "Images/Al.jpeg", "Images/Hetfield.jpeg"],
        answer: "Rob Halford"
      },
      {
        question: "Who is Layne Staley?",
        options: ["Guitarist in Soundgarden", "Drummer for Avenged Sevenfold", "Lead Singer for Alice in Chains", "Singer for Blue Oyster Cult"],
        images: ["Images/Kim.jpeg", "Images/Chad.jpeg", "Images/Layne.jpeg", "Images/Buck.jpeg"],
        answer: "Lead Singer for Alice in Chains"
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
    }
    currentQuestion++;
    if (currentQuestion < questions.length) {
      showQuestion();
    } else {
      showScore();
    }
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