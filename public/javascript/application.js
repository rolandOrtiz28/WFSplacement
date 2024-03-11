const quizData = [
    {
        "question": "Mr. Johnson notices that one of his students seems to be struggling with the material. What should he do?",
        "instructions": "Choose the most appropriate course of action.",
        "a": "Ignore the situation and continue with the lesson.",
        "b": "Address the student privately after class to offer additional help.",
        "c": "Call out the student in front of the class to motivate them to work harder.",
        "d": "Assign extra homework to the student to catch up.",
        "correct": "b"
        },
        {
        "question": "During a group project, one student is not participating and is causing disruption. How should the teacher handle this?",
        "instructions": "Choose the best approach to manage the situation.",
        "a": "Ignore the behavior and focus on the students who are participating.",
        "b": "Confront the student in front of the group.",
        "c": "Speak to the student privately to understand the issue and find a solution.",
        "d": "Punish the student by giving them a failing grade for the project.",
        "correct": "c"
        },
        {
        "question": "A student is consistently late to class. What action should the teacher take?",
        "instructions": "Select the most appropriate response.",
        "a": "Punish the student by deducting marks from their attendance record.",
        "b": "Have a private conversation with the student to discuss the importance of punctuality.",
        "c": "Embarrass the student by making an example of them in front of the class.",
        "d": "Ignore the behavior and hope the student improves on their own.",
        "correct": "b"
        },
        {
        "question": "During a test, a student is caught cheating. What should the teacher do?",
        "instructions": "Choose the most suitable action in this situation.",
        "a": "Ignore the incident to avoid causing embarrassment.",
        "b": "Confront the student privately and discuss the consequences of cheating.",
        "c": "Immediately fail the student and report them to the school administration.",
        "d": "Give the student another chance and pretend not to notice the cheating.",
        "correct": "b"
        },
        {
        "question": "A student is being bullied by classmates. What should the teacher do?",
        "instructions": "Choose the appropriate action to address the situation.",
        "a": "Advise the bullied student to toughen up and deal with it.",
        "b": "Ignore the situation and let the students resolve it themselves.",
        "c": "Intervene immediately, speak to all involved parties, and take necessary disciplinary actions.",
        "d": "Pretend not to notice the bullying to avoid getting involved.",
        "correct": "c"
        },
        {
        "question": "The teacher notices that a student is struggling with anxiety and stress. What is the best approach to support the student?",
        "instructions": "Choose the most appropriate action to help the student.",
        "a": "Ignore the issue to avoid making the student feel more anxious.",
        "b": "Recommend counseling services to the student.",
        "c": "Confront the student publicly to address their anxiety.",
        "d": "Have a private conversation with the student to understand their concerns and offer support.",
        "correct": "d"
        },
        {
        "question": "During a class discussion, a student expresses a controversial opinion. How should the teacher respond?",
        "instructions": "Choose the best course of action for the teacher.",
        "a": "Dismiss the student's opinion and continue with the lesson.",
        "b": "Encourage respectful dialogue and provide counterarguments.",
        "c": "Publicly criticize the student for their opinion.",
        "d": "Ignore the student's contribution to avoid conflict.",
        "correct": "b"
        },
        {
        "question": "A student consistently submits poorly written assignments. What should the teacher do?",
        "instructions": "Select the most appropriate action for the teacher.",
        "a": "Grade the assignments leniently to avoid demotivating the student.",
        "b": "Provide constructive feedback and offer additional support.",
        "c": "Publicly shame the student for their poor writing skills.",
        "d": "Ignore the quality of the assignments as long as they are submitted on time.",
        "correct": "b"
        },
        {
        "question": "During a class presentation, a student is struggling with stage fright. How should the teacher help?",
        "instructions": "Choose the most suitable action for the teacher.",
        "a": "Force the student to continue the presentation despite their discomfort.",
        "b": "Offer encouragement and provide opportunities for practice in a supportive environment.",
        "c": "Laugh at the student to ease the tension.",
        "d": "Ignore the student's anxiety and continue with the presentation.",
        "correct": "b"
        },
        {
        "question": "A student is consistently disruptive during class, often interrupting the teacher and other students. What should the teacher do?",
        "instructions": "Select the best approach to manage the disruptive behavior.",
        "a": "Punish the student by sending them out of the classroom.",
        "b": "Have a private conversation with the student to address the behavior.",
        "c": "Publicly shame the student to deter further disruption.",
        "d": "Ignore the behavior and hope it improves over time.",
        "correct": "b"
        },
        {
        "question": "During a class discussion, a student makes a disrespectful comment towards another student. What should the teacher do?",
        "instructions": "Choose the most appropriate action for the teacher.",
        "a": "Laugh along with the comment to diffuse tension.",
        "b": "Address the comment immediately and remind students of respectful behavior.",
        "c": "Ignore the comment to avoid escalating the situation.",
        "d": "Punish the student by giving them a detention.",
        "correct": "b"
        },
        {
        "question": "A student consistently fails to complete homework assignments. How should the teacher address this issue?",
        "instructions": "Select the most effective response for the teacher.",
        "a": "Ignore the student's lack of homework to avoid confrontation.",
        "b": "Speak to the student privately to understand the reasons for not completing assignments and provide support.",
        "c": "Publicly shame the student to motivate them to complete homework.",
        "d": "Give the student detention for each missed assignment.",
        "correct": "b"
        },
        {
        "question": "A student is struggling with understanding a concept despite several explanations. What should the teacher do?",
        "instructions": "Choose the best approach to help the student.",
        "a": "Ignore the student's struggle and focus on other students.",
        "b": "Provide alternative explanations and examples to aid understanding.",
        "c": "Punish the student for not understanding the concept.",
        "d": "Give up on the student and move on to the next topic.",
        "correct": "b"
        },
        {
        "question": "A student is frequently absent from class without explanation. How should the teacher address this?",
        "instructions": "Select the most appropriate action for the teacher.",
        "a": "Punish the student by deducting marks from their attendance record.",
        "b": "Have a private conversation with the student to understand the reasons for their absences and offer support.",
        "c": "Ignore the absences and focus on the students who attend regularly.",
        "d": "Publicly shame the student to discourage further absences.",
        "correct": "b"
        },
        {
        "question": "During group work, one student is dominating the project and not allowing others to contribute. What should the teacher do?",
        "instructions": "Choose the best approach to manage the situation.",
        "a": "Ignore the behavior as long as the project is completed.",
        "b": "Speak to the dominating student privately and encourage equal participation.",
        "c": "Punish the dominating student by removing them from the group.",
        "d": "Pretend not to notice the situation and let the students resolve it themselves.",
        "correct": "b"
        },
        {
        "question": "A student is struggling with personal issues affecting their academic performance. What should the teacher do?",
        "instructions": "Select the most appropriate action for the teacher.",
        "a": "Ignore the personal issues and focus solely on academic performance.",
        "b": "Offer support and resources to help the student cope with their personal issues.",
        "c": "Publicly shame the student for their academic shortcomings.",
        "d": "Punish the student for not performing well academically.",
        "correct": "b"
        },
        {
        "question": "A student is consistently turning in assignments with plagiarism. What should the teacher do?",
        "instructions": "Choose the best course of action for the teacher.",
        "a": "Ignore the plagiarism to avoid confrontation.",
        "b": "Confront the student privately and discuss the consequences of plagiarism.",
        "c": "Publicly shame the student to deter further plagiarism.",
        "d": "Punish the student with a failing grade for the course.",
        "correct": "b"
        },
        {
        "question": "During a class discussion, a student is constantly interrupting and speaking out of turn. What should the teacher do?",
        "instructions": "Choose the most appropriate action for the teacher.",
        "a": "Punish the student by sending them out of the classroom.",
        "b": "Speak to the student privately about their disruptive behavior.",
        "c": "Ignore the interruptions and continue with the discussion.",
        "d": "Publicly shame the student to discourage further interruptions.",
        "correct": "b"
        },
        {
        "question": "A student is struggling with low self-esteem and lacks confidence in their abilities. What should the teacher do?",
        "instructions": "Select the most effective action to support the student.",
        "a": "Ignore the issue and focus on academic performance.",
        "b": "Offer encouragement and praise for small achievements to boost confidence.",
        "c": "Publicly criticize the student to motivate them to work harder.",
        "d": "Punish the student for not having enough confidence.",
        "correct": "b"
        },
        {
        "question": "During a class activity, a student becomes frustrated and starts to cry. How should the teacher respond?",
        "instructions": "Choose the most appropriate action for the teacher.",
        "a": "Ignore the student's emotional distress and continue with the activity.",
        "b": "Offer comfort and support to the student privately.",
        "c": "Publicly criticize the student for being too emotional.",
        "d": "Laugh at the student to ease the tension.",
        "correct": "b"
        },
        {
        "question": "A student is consistently disruptive during class, making it difficult for others to concentrate. What should the teacher do?",
        "instructions": "Select the most effective response to manage the disruptive behavior.",
        "a": "Punish the student by giving them detention.",
        "b": "Have a private conversation with the student to address the behavior and find a solution.",
        "c": "Ignore the disruption and hope it resolves itself.",
        "d": "Publicly shame the student to deter further disruption.",
        "correct": "b"
        },
        {
        "question": "During a class discussion, a student consistently provides insightful contributions. How should the teacher acknowledge this?",
        "instructions": "Choose the best way for the teacher to recognize the student's contributions.",
        "a": "Ignore the student's participation to avoid singling them out.",
        "b": "Praise the student publicly for their insightful contributions.",
        "c": "Criticize the student for dominating the discussion.",
        "d": "Exclude the student from future discussions to give others a chance.",
        "correct": "b"
        },
        {
        "question": "A student is struggling with time management and often misses deadlines. What should the teacher do?",
        "instructions": "Select the most appropriate action for the teacher.",
        "a": "Ignore the missed deadlines to avoid confrontation.",
        "b": "Have a private conversation with the student to discuss time management strategies.",
        "c": "Publicly shame the student for missing deadlines.",
        "d": "Punish the student by giving them extra assignments.",
        "correct": "b"
        },
        {
        "question": "A student is consistently disrespectful towards the teacher and other students. What should the teacher do?",
        "instructions": "Choose the best approach to address the disrespectful behavior.",
        "a": "Punish the student by giving them detention.",
        "b": "Speak to the student privately to discuss the consequences of their behavior.",
        "c": "Ignore the disrespect to avoid confrontation.",
        "d": "Publicly shame the student to deter further disrespect.",
        "correct": "b"
        },
        {
            "question": "He __________ (dance) at the party last night.",
            "instructions": "Fill in the blank with the correct tense",
            "a": "danced",
            "b": "dances",
            "c": "is dancing",
            "d": "will dance",
            "correct": "a"
        },
        {
            "question": "They __________ (play) football in the park.",
            "instructions": "Fill in the blank with the correct tense",
            "a": "played",
            "b": "play",
            "c": "are playing",
            "d": "will play",
            "correct": "c"
        },
        {
            "question": "He __________ (visit) his grandparents next weekend.",
            "instructions": "Fill in the blank with the correct tense",
            "a": "visited",
            "b": "visits",
            "c": "is visiting",
            "d": "will visit",
            "correct": "d"
        },
        {
            "question": "We__________ (finish) our homework already.",
            "instructions": "Fill in the blank with the correct tense",
            "a": "finished",
            "b": "finish",
            "c": "are finishing",
            "d": "have finished",
            "correct": "d"
        },
        {
            "question": "She __________ (sing) beautifully.",
            "instructions": "Fill in the blank with the correct tense",
            "a": "sang",
            "b": "sings",
            "c": "is singing",
            "d": "will sing",
            "correct": "b"
        },
        {
            "question": "I __________ (wait) for you since morning.",
            "instructions": "Fill in the blank with the correct tense",
            "a": "wait",
            "b": "waits",
            "c": "am waiting",
            "d": "will wait",
            "correct": "c"
        },
        {
            "question": "They __________ (watch) a movie at the moment.",
            "instructions": "Fill in the blank with the correct tense",
            "a": "watched",
            "b": "watch",
            "c": "are watching",
            "d": "will watch",
            "correct": "c"
        },
        {
            "question": "She __________ (study) for her exams all day.",
            "instructions": "Fill in the blank with the correct tense",
            "a": "studied",
            "b": "studies",
            "c": "is studying",
            "d": "will study",
            "correct": "c"
        },
        {
            "question": "He __________ (run) in the marathon next month.",
            "instructions": "Fill in the blank with the correct tense",
            "a": "ran",
            "b": "runs",
            "c": "is running",
            "d": "will run",
            "correct": "d"
        },
        {
            "question": "I __________ (see) that movie yesterday.",
            "instructions": "Fill in the blank with the correct tense",
            "a": "see",
            "b": "saw",
            "c": "seeing",
            "d": "will see",
            "correct": "b"
        },
        {
            "question": "She __________ (write) a novel last year.",
            "instructions": "Fill in the blank with the correct tense",
            "a": "wrote",
            "b": "writes",
            "c": "is writing",
            "d": "will write",
            "correct": "a"
        },
        {
            "question": "They __________ (arrive) at the airport in an hour.",
            "instructions": "Fill in the blank with the correct tense",
            "a": "arrived",
            "b": "arrive",
            "c": "are arriving",
            "d": "will arrive",
            "correct": "d"
        },
        {
            "question": "I __________ (read) that book last summer.",
            "instructions": "Fill in the blank with the correct tense",
            "a": "read",
            "b": "reads",
            "c": "reading",
            "d": "will read",
            "correct": "a"
        },
        {
            "question": "He __________ (teach) English for ten years.",
            "instructions": "Fill in the blank with the correct tense",
            "a": "taught",
            "b": "teaches",
            "c": "is teaching",
            "d": "will teach",
            "correct": "a"
        },
        {
            "question": "She __________ (cook) dinner right now.",
            "instructions": "Fill in the blank with the correct tense",
            "a": "cooked",
            "b": "cooks",
            "c": "cooking",
            "d": "will cook",
            "correct": "b"
        },
        {
            "question": "They __________ (live) in New York since 2010.",
            "instructions": "Fill in the blank with the correct tense",
            "a": "lived",
            "b": "live",
            "c": "are living",
            "d": "will live",
            "correct": "c"
        },
        {
            "question": "She __________ (go) to the gym every day.",
            "instructions": "Fill in the blank with the correct tense",
            "a": "went",
            "b": "goes",
            "c": "is going",
            "d": "will go",
            "correct": "b"
        },
        {
            "question": "They __________ (buy) a new car last month.",
            "instructions": "Fill in the blank with the correct tense",
            "a": "bought",
            "b": "buy",
            "c": "are buying",
            "d": "will buy",
            "correct": "a"
        },
        {
            "question": "He __________ (lose) his wallet yesterday.",
            "instructions": "Fill in the blank with the correct tense",
            "a": "lose",
            "b": "lost",
            "c": "losing",
            "d": "will lose",
            "correct": "b"
        },
        {
            "question": "She __________ (paint) a picture tomorrow.",
            "instructions": "Fill in the blank with the correct tense",
            "a": "painted",
            "b": "paints",
            "c": "painting",
            "d": "will paint",
            "correct": "d"
        },
        {
            "question": "They __________ (play) tennis every Sunday.",
            "instructions": "Fill in the blank with the correct tense",
            "a": "played",
            "b": "play",
            "c": "are playing",
            "d": "will play",
            "correct": "b"
        },
        {
            "question": "I __________ (see) him tomorrow.",
            "instructions": "Fill in the blank with the correct tense",
            "a": "saw",
            "b": "see",
            "c": "seeing",
            "d": "will see",
            "correct": "d"
        },
        {
            "question": "She __________ (read) a book every night before bed.",
            "instructions": "Fill in the blank with the correct tense",
            "a": "read",
            "b": "reads",
            "c": "reading",
            "d": "will read",
            "correct": "b"
        },
        {
            "question": "He __________ (write) a letter yesterday.",
            "instructions": "Fill in the blank with the correct tense",
            "a": "write",
            "b": "wrote",
            "c": "writing",
            "d": "will write",
            "correct": "b"
        },
        {
            "question": "They __________ (swim) in the ocean now.",
            "instructions": "Fill in the blank with the correct tense",
            "a": "swam",
            "b": "swim",
            "c": "swimming",
            "d": "will swim",
            "correct": "c"
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

            if (percentage >= 1 && percentage <= 50) {
                qualification = 'FAILED';
            } else if (percentage > 51 && percentage <= 100) {
                qualification = 'PASSED';
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
    xhr.open('POST', '/applicationexam');
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onload = function () {
        window.location.href = '/thankyou';
    };
    xhr.send(JSON.stringify({ userId: userId, score: score, percentage: percentage, qualification: qualification }));
}