const questions = [
    {
        question: "Berapa usia alam semesta",
        options: ["13.7 miliar tahun", "11.5 miliar tahun", "9.7 miliar tahun", "19.3 miliar tahun"],
        correctOption: 0
    },   
    {
        question: "Apakah Syifa jelek",
        options: ["ENGGA", "IYA", "IYA", "IYA"],
        correctOption: 0
    },
    {
        question: "Syifa Pacar siapa",
        options: ["Anak Paskib", "Putra yang paling ganteng", "Bebek", "Ayam"],
        correctOption: 1
    },
    {
        question: "Hewan apa yang paling banyak menyebabkan kematian di seluruh dunia setiap tahunnya",
        options: ["Serigala", "Anjing", "Nyamuk", "Ular"],
        correctOption: 2
    },   
    {
        question: "Apa rumah adat Provinsi Jawa Tengah",
        options: ["Bolon", "Gadang", "Limas", "Joglo"],
        correctOption: 3
    },
    {
        question: "Julukan Bogor adalah",
        options: ["Kota Batik", "Kota Pahlawan","Kota Pempek","Kota Hujan"],
        correctOption: 3
    },
    {
        question: "Sungai terpanjang di dunia",
        options: ["Mahakam", "Amazon", "Nil", "Ciliwung"],
        correctOption: 2
    },
    {
        question: "Pizza berasal dari",
        options: ["Australia", "Italia", "India", "Myanmar"],
        correctOption: 1
    },
    {
        question: "Apa bulan terbesar saturnus",
        options: ["Titan", "Pandora", "Atlas", "Enceladus"],
        correctOption: 0
    },
    {
        question: "Apa organ terbesar di tubuh manusia",
        options: ["Usus", "Lambung", "Paru-Paru", "Kulit"],
        correctOption: 3
    },
    {
        question: "Negara yang berbatasan dengan Indonesia di bagian selatan adalah",
        options: ["Timor leste", "Malaysia", "Australia", "China"],
        correctOption: 2
    },
    {
        question: "Kapan Hari Kebangkitan Nasional diperingati",
        options: ["20 Mei", "22 Mei", "17 Mei", "21 Mei"],
        correctOption: 0
    }    
    // Tambahkan pertanyaan baru di sini
];

let currentQuestionIndex = 0;
let score = 0;
let chances = 3;

function resetGame() {
    const chancesMessage = document.getElementById('chances-message');
    chancesMessage.classList.add('hidden');

    const startContainer = document.querySelector('.container');
    startContainer.classList.remove('hidden');

    const quizContainer = document.getElementById('quiz-container');
    quizContainer.classList.add('hidden');

    score = 0;
    chances = 3;

    // Reset UI hati
    const heartsElement = document.getElementById('hearts');
    heartsElement.innerHTML = '&#x2764;&#x2764;&#x2764;';
}

function startQuiz() {
    const startContainer = document.querySelector('.container');
    startContainer.classList.add('hidden');

    const quizContainer = document.getElementById('quiz-container');
    quizContainer.classList.remove('hidden');

    // Mengacak array pertanyaan
    shuffleQuestions();

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
        button.disabled = true;

        if (index === correctOption) {
            if (!button.classList.contains('selected')) {
                button.classList.add('correct', 'zoom');
            }
        }

        if (index === selectedOption && index !== correctOption) {
            if (!button.classList.contains('selected')) {
                button.classList.add('wrong', 'zoom');
            }
        }
    });

    if (selectedOption === correctOption) {
        score += 5;  // Menambahkan 5 skor jika jawaban benar
    }

    if (selectedOption !== correctOption) {
        chances--;

        // Update UI hati
        const heartsElement = document.getElementById('hearts');
        heartsElement.innerHTML = '&#x2764;'.repeat(chances);

        if (chances === 0) {
            const chancesMessage = document.getElementById('chances-message');
            chancesMessage.classList.remove('hidden');

            setTimeout(function () {
                resetGame();
            }, 2000);

            return;
        }
    }

    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        setTimeout(displayQuestion, 1000);
    } else {
        setTimeout(showScore, 1000);
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

function shuffleQuestions() {
    for (let i = questions.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [questions[i], questions[j]] = [questions[j], questions[i]];
    }
}
function showAbout() {
    const blurBackground = document.querySelector('.blur-background');
    blurBackground.style.display = 'flex';

    // Tambahkan konten tentang aplikasi
    const aboutContainer = document.getElementById('about-container');
    aboutContainer.innerHTML = `
        <h2>About</h2>
        <p>motivasi ngebuat kek gini apa si? gatau gabut aja bro gw jg 
        bingung ngpain ngebuat hal kek gini, tapi gapapa ngasah skill gausah nanya wae</p>
        <p>Follow instagram @raaaheadless</p>
    `;

    // Tambahkan event listener untuk menyembunyikan saat di-klik
    const blurBackgroundElement = document.getElementById('blur-background');
    blurBackgroundElement.addEventListener('click', hideAbout);
}

function hideAbout() {
    const blurBackground = document.querySelector('.blur-background');
    blurBackground.style.display = 'none';
}

