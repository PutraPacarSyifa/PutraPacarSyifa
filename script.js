const questions = [
    {
        question: "Apakah Syifa jelek",
        options: ["ENGGA", "IYA", "IYA", "IYA"],
        correctOption: 0
    },
    {
        question: "Syifa Pacar siapa",
        options: ["Anak Paskib", "Putra yang paling ganteng", "Bebek", "Ayam"],
        correctOption: 1
    }
    // Tambahkan pertanyaan baru di sini
];

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    const startContainer = document.querySelector('.container');
    startContainer.classList.add('hidden');

    const quizContainer = document.getElementById('quiz-container');
    quizContainer.classList.remove('hidden');

    displayQuestion();
}

function displayQuestion() {
    const questionElement = document.getElementById('question');
    questionElement.innerText = questions[currentQuestionIndex].question;

    const optionsElement = document.getElementById('options');
    optionsElement.innerHTML = '';

    const options = questions[currentQuestionIndex].options;
    options.forEach((option, index) => {
        const button = document.createElement('button');
        button.innerText = option;
        button.classList.add('option');
        button.addEventListener('click', () => checkAnswer(index));
        optionsElement.appendChild(button);
    });
}

function checkAnswer(selectedOption) {
    const correctOption = questions[currentQuestionIndex].correctOption;
    const optionButtons = document.querySelectorAll('.option');

    optionButtons.forEach((button, index) => {
        if (index === correctOption) {
            button.classList.add('correct', 'selected', 'zoom');
        }

        if (index === selectedOption && index !== correctOption) {
            button.classList.add('wrong', 'selected', 'zoom');
        }

        button.disabled = true;
    });

    if (selectedOption === correctOption) {
        score += 5;  // Menambahkan 5 skor jika jawaban benar
    }

    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        setTimeout(displayQuestion, 1000);
    } else {
        setTimeout(showScore, 1000); // Menampilkan skor setelah jeda 1 detik
    }
}

function showScore() {
    const quizContainer = document.getElementById('quiz-container');
    quizContainer.innerHTML = '';

    const scoreElement = document.createElement('div');
    scoreElement.classList.add('score');
    scoreElement.innerHTML = `<h2>Skor Akhir</h2><p>Skor Anda: ${score}</p>`;
    quizContainer.appendChild(scoreElement);

    const followButton = document.createElement('button');
    followButton.innerText = 'FOLLOW INSTAGRAM SAYA';
    followButton.classList.add('follow-button');
    followButton.addEventListener('click', () => followInstagram());
    quizContainer.appendChild(followButton);
}

function followInstagram() {
    window.location.href = 'https://www.instagram.com/raaaheadless';
}
