const quizData = [
    {
        question: "Identify the plural form of the noun: 'Cat'",
        a: "Cats",
        b: "Caties",
        c: "Catzes",
        d: "Cat's",
        correct: "a"
    },
    {
        question: "Choose the correct pronoun for 'Sheep':",
        a: "Sheeps",
        b: "Her",
        c: "Its",
        d: "They",
        correct: "d"
    },
    {
        question: "Choose the correct verb to complete the sentence: 'He ___ his bicycle every day.'",
        a: "Do",
        b: "Does",
        c: "Doing",
        d: "Done",
        correct: "b"
    },
    // {
    //     question: "Select the verb in the sentence: 'The flowers ___ in the garden.'",
    //     a: "Flowers",
    //     b: "Is",
    //     c: "In",
    //     d: "Blooming",
    //     correct: "d"
    // },
    // {
    //     question: "Identify the action verb: 'The car ___ down the street.'",
    //     a: "Car",
    //     b: "Is",
    //     c: "Down",
    //     d: "Driving",
    //     correct: "d"
    // },
    // {
    //     question: "Choose the correct verb: 'We ___ to the beach last summer.'",
    //     a: "Go",
    //     b: "Went",
    //     c: "Going",
    //     d: "Goes",
    //     correct: "b"
    // },
    // {
    //     question: "Identify the adjective in the sentence: 'The big elephant has long tusks.'",
    //     a: "Big",
    //     b: "Elephant",
    //     c: "Has",
    //     d: "Long",
    //     correct: "a"
    // },
    // {
    //     question: "Choose the adjective to complete the sentence: 'The mountain is ___.'",
    //     a: "High",
    //     b: "Higher",
    //     c: "Highest",
    //     d: "Highly",
    //     correct: "a"
    // },
    // {
    //     question: "Select the adjective in the sentence: 'The yellow sun shines in the sky.'",
    //     a: "Yellow",
    //     b: "Sun",
    //     c: "Shines",
    //     d: "Sky",
    //     correct: "a"
    // },
    // {
    //     question: "Identify the descriptive adjective: 'The cozy blanket kept her warm.'",
    //     a: "Cozy",
    //     b: "Blanket",
    //     c: "Kept",
    //     d: "Warm",
    //     correct: "a"
    // },
    // {
    //     question: "Choose the adjective: 'The tired children took a nap.'",
    //     a: "Tired",
    //     b: "Children",
    //     c: "Took",
    //     d: "Nap",
    //     correct: "a"
    // },
    // {
    //     question: "Choose the correct possessive pronoun: 'This is ____ book.'",
    //     a: "My",
    //     b: "I",
    //     c: "Me",
    //     d: "Mine",
    //     correct: "a"
    // },
    // {
    //     question: "Identify the adverb in the sentence: 'She speaks softly.'",
    //     a: "She",
    //     b: "Speaks",
    //     c: "Softly",
    //     d: "Speaks softly",
    //     correct: "c"
    // },
    // {
    //     question: "Select the comparative adjective: 'The elephant is ___ than the giraffe.'",
    //     a: "Big",
    //     b: "Bigger",
    //     c: "Biggest",
    //     d: "Bigly",
    //     correct: "b"
    // },
    // {
    //     question: "Choose the correct past tense verb: 'He ____ to the store yesterday.'",
    //     a: "Go",
    //     b: "Goes",
    //     c: "Going",
    //     d: "Went",
    //     correct: "d"
    // },
    // {
    //     question: "Identify the conjunction in the sentence: 'I like ice cream, ___ I prefer chocolate.'",
    //     a: "And",
    //     b: "Or",
    //     c: "But",
    //     d: "Like",
    //     correct: "c"
    // },
    // {
    //     question: "Select the plural form of 'Fox':",
    //     a: "Foxes",
    //     b: "Foxies",
    //     c: "Fox's",
    //     d: "Foxen",
    //     correct: "a"
    // },
    // {
    //     question: "Choose the correct possessive pronoun: 'This toy is ____.'",
    //     a: "Hers",
    //     b: "She's",
    //     c: "Its",
    //     d: "She",
    //     correct: "a"
    // },
    // {
    //     question: "Identify the verb in the sentence: 'The cat ____ on the roof.'",
    //     a: "Cat",
    //     b: "Is",
    //     c: "On",
    //     d: "Roof",
    //     correct: "b"
    // },
    // {
    //     question: "Pick the correct adverb: 'She ran ___ to catch the bus.'",
    //     a: "Fast",
    //     b: "Faster",
    //     c: "Fastest",
    //     d: "Quick",
    //     correct: "a"
    // },
    // {
    //     question: "Choose the correct plural form of 'Tomato':",
    //     a: "Tomatoes",
    //     b: "Tomatos",
    //     c: "Tomato's",
    //     d: "Tomates",
    //     correct: "a"
    // },
    // {
    //     question: "Which sentence contains the correct comparative adjective?",
    //     a: "The car is more faster than the bicycle.",
    //     b: "The car is fastly than the bicycle.",
    //     c: "The car is faster than the bicycle.",
    //     d: "The car is fast than the bicycle.",
    //     correct: "c"
    // },
    // {
    //     question: "Choose the correct comparative adjective to complete the sentence: 'The river is _____ than the stream.'",
    //     a: "wider",
    //     b: "wide",
    //     c: "more wider",
    //     d: "widerer",
    //     correct: "a"
    // },
    // {
    //     question: "Identify the sentence with the correct comparative form: 'Her grades are getting _____ every semester.'",
    //     a: "good",
    //     b: "more good",
    //     c: "better",
    //     d: "gooder",
    //     correct: "c"
    // },
    // {
    //     question: "In the comparison of intelligence, which phrase is grammatically correct?",
    //     a: "The dolphin is smarter than any other sea creature.",
    //     b: "The dolphin is more smart than any other sea creature.",
    //     c: "The dolphin is smartly than any other sea creature.",
    //     d: "The dolphin is smartest than any other sea creature.",
    //     correct: "a"
    // },
    // {
    //     question: "Choose the appropriate comparative form to complete the sentence: 'This task is _____ than the one we did last week.'",
    //     a: "more difficult",
    //     b: "difficulter",
    //     c: "difficulter",
    //     d: "difficult",
    //     correct: "a"
    // },
    // {
    //     question: "______ is coming to the party tonight?",
    //     a: "What",
    //     b: "Who",
    //     c: "Where",
    //     d: "Why",
    //     correct: "b"
    // },
    // {
    //     question: "______ did you go on your last vacation?",
    //     a: "Where",
    //     b: "Why",
    //     c: "What",
    //     d: "Who",
    //     correct: "a"
    // },
    // {
    //     question: "I wonder ______ the keys are?",
    //     a: "Who",
    //     b: "Where",
    //     c: "What",
    //     d: "Why",
    //     correct: "b"
    // },
    // {
    //     question: "______ are you crying?",
    //     a: "Where",
    //     b: "Who",
    //     c: "Why",
    //     d: "What",
    //     correct: "c"
    // },
    // {
    //     question: "I asked him ______ he was leaving so soon.",
    //     a: "Where",
    //     b: "Why",
    //     c: "Who",
    //     d: "What",
    //     correct: "b"
    // },
    // {
    //     question: "I wonder ______ the cat went?",
    //     a: "Who",
    //     b: "Where",
    //     c: "What",
    //     d: "Why",
    //     correct: "b"
    // },
    // {
    //     question: "______ does the sun rise?",
    //     a: "Who",
    //     b: "Where",
    //     c: "What",
    //     d: "Why",
    //     correct: "c"
    // },
    // {
    //     question: "I asked him ______ he was feeling.",
    //     a: "Who",
    //     b: "Where",
    //     c: "What",
    //     d: "Why",
    //     correct: "c"
    // },
    // {
    //     question: "______ will you celebrate your birthday?",
    //     a: "Who",
    //     b: "Where",
    //     c: "What",
    //     d: "Why",
    //     correct: "b"
    // },
    // {
    //     question: "______ is your favorite color?",
    //     a: "Who",
    //     b: "Where",
    //     c: "What",
    //     d: "Why",
    //     correct: "c"
    // },
    // {
    //     question: "______ are you smiling?",
    //     a: "Who",
    //     b: "Where",
    //     c: "What",
    //     d: "Why",
    //     correct: "d"
    // },
    // {
    //     question: "Tell me ______ you like about this book.",
    //     a: "Who",
    //     b: "Where",
    //     c: "What",
    //     d: "Why",
    //     correct: "d"
    // },
    // {
    //     question: "______ does the train go so fast?",
    //     a: "Who",
    //     b: "Where",
    //     c: "What",
    //     d: "Why",
    //     correct: "d"
    // }

];

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')


let currentQuiz = 0
let score = 0

loadQuiz()


function loadQuiz() {
    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerHTML = `<h5 class="badge bg-primary rounded-pill me-2">${currentQuiz + 1}</h5>${currentQuizData.question}`;
    a_text.innerText = `a) ${currentQuizData.a}`
    b_text.innerText = `b) ${currentQuizData.b}`
    c_text.innerText = `c) ${currentQuizData.c}`
    d_text.innerText = `d) ${currentQuizData.d}`
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if (answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
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
            if (percentage >= 1 && percentage <= 25) {
                qualification = 'EYL-1';
            } else if (percentage > 25 && percentage <= 50) {
                qualification = 'EYL-2';
            } else if (percentage > 50 && percentage <= 75) {
                qualification = 'EYL-3';
            } else if (percentage > 75 && percentage <= 100) {
                qualification = 'EYL-4';
            } else {
                qualification = 'Not Qualified';
            }

            // Send score, percentage, and qualification to the backend
            submitScore(score, percentage, qualification);
        }
    }
});


function submitScore(score, percentage, qualification) {
    // Assuming you're using AJAX for submitting the form
    const xhr = new XMLHttpRequest();
    xhr.open('POST', '/examination');
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onload = function () {
        // Redirect to result page or do something else
        window.location.href = '/thankyou';
    };
    xhr.send(JSON.stringify({ score: score, percentage: percentage, qualification: qualification }));
}
