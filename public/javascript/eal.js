const quizData = [
    {
        question: "he __________ (dance) at the party last night.",
        instructions: "Fill in the blank with the correct tense",
        a: "danced",
        b: "dances",
        c: "is dancing",
        d: "will dance",
        correct: "a"
    },
    {
        question: "They __________ (play) football in the park.",
        instructions: "Fill in the blank with the correct tense",
        a: "played",
        b: "play",
        c: "are playing",
        d: "will play",
        correct: "c"
    },
    {
        question: "He __________ (visit) his grandparents next weekend.",
        instructions: "Fill in the blank with the correct tense",
        a: "visited",
        b: "visits",
        c: "is visiting",
        d: "will visit",
        correct: "d"
    },
    {
        question: "We__________ (finish) our homework already.",
        instructions: "Fill in the blank with the correct tense",
        a: "finished",
        b: "finish",
        c: "are finishing",
        d: "have finished",
        correct: "d"
    },
    {
        question: "She __________ (sing) beautifully.",
        instructions: "Fill in the blank with the correct tense",
        a: "sang",
        b: "sings",
        c: "is singing",
        d: "will sing",
        correct: "b"
    },
    {
        question: "They __________ (go) to the movies every Friday night.",
        instructions: "Fill in the blank with the correct tense",
        a: "went",
        b: "go",
        c: "are going",
        d: "will go",
        correct: "b"
    },
    {
        question: "I __________ (read) an interesting book yesterday.",
        instructions: "Fill in the blank with the correct tense",
        a: "read",
        b: "reads",
        c: "am reading",
        d: "will read",
        correct: "a"
    },
    {
        question: "She__________ (graduate) from college next year.",
        instructions: "Fill in the blank with the correct tense",
        a: "graduated",
        b: "graduates",
        c: "is graduating",
        d: "will graduate",
        correct: "d"
    },
    {
        question: "They __________ (have) dinner at their favorite restaurant.",
        instructions: "Fill in the blank with the correct tense",
        a: "had",
        b: "have",
        c: "are having",
        d: "will have",
        correct: "b"
    },
    {
        question: "The sun __________ (rise) in the east.",
        instructions: "Fill in the blank with the correct tense",
        a: "rose",
        b: "rises",
        c: "is rising",
        d: "will rise",
        correct: "b"
    },
    {
        question: "The cat _____ sleeping on the bed.",
        instructions: "Select the correct form of the verb 'to be' in the present tense",
        a: "Is",
        b: "Are",
        c: "Am",
        d: "Was",
        correct: "a"
    },
    {
        question: "I _____ going to the store.",
        instructions: "Choose the appropriate form of the verb 'to be' in the present tense",
        a: "Is",
        b: "Are",
        c: "Am",
        d: "Was",
        correct: "c"
    },
    {
        question: "They _____ playing in the park.",
        instructions: "Identify the correct form of the verb 'to be' in the present tense:",
        a: "Is",
        b: "Are",
        c: "Am",
        d: "Was",
        correct: "b"
    },
    {
        question: "The book _____ on the table yesterday.",
        instructions: "Select the correct form of the verb 'to be' in the past tense",
        a: "Is",
        b: "Are",
        c: "Am",
        d: "Was",
        correct: "d"
    },
    {
        question: "He _____ very tired after the long journey.",
        instructions: "Choose the appropriate form of the verb 'to be' in the past tense",
        a: "Is",
        b: "Are",
        c: "Am",
        d: "Was",
        correct: "d"
    },
    {
        question: "We _____ at the party last night.",
        instructions: "Identify the correct form of the verb 'to be' in the past tense",
        a: "Is",
        b: "Are",
        c: "Am",
        d: "Were",
        correct: "d"
    },
    {
        question: "The flowers _____ beautiful.",
        instructions: "Select the correct form of the verb 'to be' in the present tense",
        a: "Is",
        b: "Are",
        c: "Am",
        d: "Was",
        correct: "b"
    },
    {
        question: "You _____ my best friend.",
        instructions: "Choose the appropriate form of the verb 'to be' in the present tense",
        a: "Is",
        b: "Are",
        c: "Am",
        d: "Was",
        correct: "b"
    },
    {
        question: "I _____ happy with my new job.",
        instructions: "Identify the correct form of the verb 'to be' in the present tense",
        a: "Is",
        b: "Are",
        c: "Am",
        d: "Was",
        correct: "c"
    },
    {
        question: "The sky _____ blue yesterday.",
        instructions: "Select the correct form of the verb 'to be' in the past tense",
        a: "Is",
        b: "Are",
        c: "Am",
        d: "Was",
        correct: "d"
    },
    {
        question: "She _____ soccer yesterday.",
        instructions: "Identify the correct past tense form of the verb 'to play'",
        a: "Plays",
        b: "Play",
        c: "Played",
        d: "Playing",
        correct: "c"
    },
    {
        question: "We _____ dinner at the restaurant last night.",
        instructions: "Choose the correct past tense form of the verb 'to eat'",
        a: "Eat",
        b: "Eating",
        c: "Eaten",
        d: "Ate",
        correct: "d"
    },
    {
        question: "He _____ to school every day last week.",
        instructions: "Select the appropriate past tense form of the verb 'to walk'",
        a: "Walks",
        b: "Walking",
        c: "Walked",
        d: "Walk",
        correct: "c"
    },
    {
        question: "They _____ over the fence.",
        instructions: "Identify the correct past tense form of the verb 'to jump'",
        a: "Jump",
        b: "Jumping",
        c: "Jumps",
        d: "Jumped",
        correct: "d"
    },
    {
        question: "She _____ in the marathon last month.",
        instructions: "Choose the correct past tense form of the verb 'to run'",
        a: "Run",
        b: "Running",
        c: "Ran",
        d: "Runs",
        correct: "c"
    },
    {
        question: "He _____ a letter to his friend yesterday.",
        instructions: "Select the appropriate past tense form of the verb 'to write'",
        a: "Write",
        b: "Writing",
        c: "Wrote",
        d: "Writes",
        correct: "c"
    },
    {
        question: "We _____ in the pool last summer.",
        instructions: "Identify the correct past tense form of the verb 'to swim'",
        a: "Swims",
        b: "Swam",
        c: "Swimming",
        d: "Swim",
        correct: "b"
    },
    {
        question: "She _____ a glass of water after her workout.",
        instructions: "Choose the correct past tense form of the verb 'to drink'",
        a: "Drinks",
        b: "Drank",
        c: "Drinking",
        d: "Drink",
        correct: "b"
    },
    {
        question: "They _____ a song at the talent show.",
        instructions: "Select the appropriate past tense form of the verb 'to sing'",
        a: "Sing",
        b: "Sang",
        c: "Singing",
        d: "Sung",
        correct: "b"
    },
    {
        question: "I _____ well last night.",
        instructions: "Identify the correct past tense form of the verb 'to sleep'",
        a: "Sleeps",
        b: "Slept",
        c: "Sleeping",
        d: "Sleep",
        correct: "b"
    },
    {
        question: "She _____ already eaten lunch.",
        instructions: "Identify the correct usage of 'has' or 'have' in the present perfect tense",
        a: "Has",
        b: "Have",
        c: "Had",
        d: "Having",
        correct: "a"
    },
    {
        question: "They _____ finished their homework.",
        instructions: "Choose the appropriate form of 'has' or 'have' in the present perfect tense",
        a: "Has",
        b: "Have",
        c: "Had",
        d: "Having",
        correct: "b"
    },
    {
        question: "He _____ never been to Europe.",
        instructions: "Select the correct usage of 'has' or 'have' in the present perfect tense",
        a: "Has",
        b: "Have",
        c: "Had",
        d: "Having",
        correct: "a"
    },
    {
        question: "We _____ just arrived at the airport.",
        instructions: "Identify the correct form of 'has' or 'have' in the present perfect tense",
        a: "Has",
        b: "Have",
        c: "Had",
        d: "Having",
        correct: "b"
    },
    {
        question: "The team _____ won the championship.",
        instructions: "Choose the appropriate usage of 'has' or 'have' in the present perfect tense",
        a: "Has",
        b: "Have",
        c: "Had",
        d: "Having",
        correct: "b"
    },
    {
        question: "_____ dog is very friendly.",
        instructions: "Identify the correct usage of 'their', 'there', or 'they're' in the sentence",
        a: "Their",
        b: "There",
        c: "They're",
        d: "Theirs",
        correct: "a"
    },
    {
        question: "_____ going to the park to play.",
        instructions: "Choose the appropriate form of 'their', 'there', or 'they're' in the sentence",
        a: "Their",
        b: "There",
        c: "They're",
        d: "Theirs",
        correct: "c"
    },
    {
        question: "They left _____ coats at home.",
        instructions: "Select the correct usage of 'their', 'there', or 'they're' in the sentence",
        a: "Their",
        b: "There",
        c: "They're",
        d: "Theirs",
        correct: "a"
    },
    {
        question: "_____ a lot of birds in the sky.",
        instructions: "Identify the correct form of 'their', 'there', or 'they're' in the sentence",
        a: "Their",
        b: "There",
        c: "They're",
        d: "Theirs",
        correct: "b"
    },
    {
        question: "_____ excited to see the new movie.",
        instructions: "Choose the appropriate usage of 'their', 'there', or 'they're' in the sentence",
        a: "Their",
        b: "There",
        c: "They're",
        d: "Theirs",
        correct: "c"
    },
    {
        question: " _____ you like ice cream?",
        instructions: "Identify the correct usage of 'do', 'does', or 'did' in the sentence",
        a: "Do",
        b: "Does",
        c: "Did",
        d: "Done",
        correct: "a"
    },
    {
        question: "He _____ his homework every day.",
        instructions: "Choose the appropriate form of 'do', 'does', or 'did' in the sentence",
        a: "Do",
        b: "Does",
        c: "Did",
        d: "Done",
        correct: "b"
    },
    {
        question: "_____ she play tennis yesterday?",
        instructions: "Select the correct usage of 'do', 'does', or 'did' in the sentence",
        a: "Do",
        b: "Does",
        c: "Did",
        d: "Done",
        correct: "c"
    },
    {
        question: "We _____ our best to finish on time.",
        instructions: "Identify the correct form of 'do', 'does', or 'did' in the sentence",
        a: "Do",
        b: "Does",
        c: "Did",
        d: "Done",
        correct: "a"
    },
    {
        question: "_____ the movie start yet?",
        instructions: "Choose the appropriate usage of 'do', 'does', or 'did' in the sentence",
        a: "Do",
        b: "Does",
        c: "Did",
        d: "Done",
        correct: "c"
    },
    {
        question: "The _____ are flying in the sky.",
        instructions: "Identify the correct form of the plural noun",
        a: "Cat",
        b: "Birds",
        c: "Dog",
        d: "Parrot",
        correct: "b"
    },
    {
        question: "There is a _____ in the garden.",
        instructions: "Choose the appropriate form of the singular noun",
        a: "Book",
        b: "Books",
        c: "Tree",
        d: "Trees",
        correct: "c"
    },
    {
        question: "She has two _____.",
        instructions: "Select the correct form of the plural noun",
        a: "Horse",
        b: "Horses",
        c: "Sheep",
        d: "Cow",
        correct: "b"
    },
    {
        question: "The _____ is barking loudly.",
        instructions: "Identify the correct form of the singular noun",
        a: "Child",
        b: "Children",
        c: "Dog",
        d: "Dogs",
        correct: "c"
    },
    {
        question: "I saw three _____ in the garden.",
        instructions: "Choose the appropriate form of the plural noun",
        a: "flower",
        b: "Flowers",
        c: "Car",
        d: "Cars",
        correct: "b"
    }
];

const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerHTML = `<p class:"text-muted font-weight-bold" style="font-size: 17px; color:black;">${currentQuizData.instructions}</p><h5 class="badge bg-primary rounded-pill me-2">${currentQuiz + 1}</h5>${currentQuizData.question}`;
    a_text.innerText = `a) ${currentQuizData.a}`;
    b_text.innerText = `b) ${currentQuizData.b}`;
    c_text.innerText = `c) ${currentQuizData.c}`;
    d_text.innerText = `d) ${currentQuizData.d}`;
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false);
}

function getSelected() {
    let answer;
    answerEls.forEach(answerEl => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });
    return answer;
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected();
    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;

        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            const percentage = ((score / quizData.length) * 100).toFixed(2);

            // Determine qualification
            let qualification;
            if (percentage >= 1 && percentage <= 15) {
                qualification = 'EAL-1';
            } else if (percentage > 16 && percentage <= 30) {
                qualification = 'EAL-2';
            } else if (percentage > 31 && percentage <= 45) {
                qualification = 'EAL-3';
            } else if (percentage > 46 && percentage <= 60) {
                qualification = 'EAL-4';
            } else if (percentage > 61 && percentage <= 75) {
                qualification = 'EAL-5';
            } else if (percentage > 76 && percentage <= 90) {
                qualification = 'EAL-6';
            } else if (percentage > 91 && percentage <= 100) {
                qualification = 'EAL-7';
            } else {
                qualification = 'Not Qualified';
            }

            // Send score, percentage, and qualification to the backend
            submitScore(score, percentage, qualification);
        }
    }
});


function submitScore(score, percentage, qualification) {
    const xhr = new XMLHttpRequest();
    xhr.open('POST', '/examinationeal');
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onload = function () {
        window.location.href = '/thankyou';
    };
    xhr.send(JSON.stringify({ userId: userId, score: score, percentage: percentage, qualification: qualification }));
}