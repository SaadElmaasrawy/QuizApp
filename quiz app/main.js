const quizData = [
    {
        q: 'What is actually electricity ?',
        a: 'A flow of water',
        b: 'A flow of air',
        c: 'A flow of electrons',
        d: 'A flow of atoms',
        correct : 'c'
    },{
        q: 'What is the speed of sound ?',
        a: '120 km/h',
        b: '1,200 km/h',
        c: '400 km/h',
        d: '700 km/h',
        correct: 'b'
    },{
        q: 'What is the main component of the sun?',
        a: 'Liquid lava',
        b: 'Gas',
        c: 'Molten iron',
        d: 'Rock',
        correct: 'b'
    },{
        q: 'In which country is Transylvania?',
        a: 'Bulgaria',
        b: 'Romania',
        c: 'Croatia',
        d: 'Serbia',
        correct: 'b'
    }
]
const quizHeader = document.getElementById("quiz-header")

const a = document.getElementById("a-label");
const b = document.getElementById("b-label");
const c = document.getElementById("c-label");
const d = document.getElementById("d-label");


let subBtn = document.getElementById("submit");


const quizCon = document.getElementById("quiz-con");

let i = 0;
let score = 0;


loadQuiz();

function loadQuiz(){
    quizHeader.innerText = quizData[i].q;

    a.innerText = quizData[i].a;
    b.innerText = quizData[i].b;
    c.innerText = quizData[i].c;
    d.innerText = quizData[i].d;

}

function getAnswer(){
    let answer = document.getElementsByName("answer");
    for(let j = 0;j<answer.length;j++){
        if(answer[j].checked){
            return answer[j].id;

        }
    }

}



subBtn.onclick = function(){
    let answerId = getAnswer();
    let correct = quizData[i].correct;
    if(answerId == correct){
        console.log(answerId);
        score++;
    }else{
        console.log(answerId);

    }
    
    if(i < quizData.length-1){
        i++;
        document.getElementById(answerId).checked = false;

        loadQuiz();

    }else{
        quizCon.innerHTML = `<h2 class = "finish">nice you finshed !</h2><br /><h3 class="finish"> your score is : ${score}/${quizData.length}</h3>`
    }


};






