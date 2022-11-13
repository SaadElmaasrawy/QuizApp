const quizData = [
    {
        q: 'how are you ?',
        a: 'good',
        b: 'fine',
        c: 'meh',
        d: 'fine thank u',
        correct : 'd'
    },{
        q: 'do u play lol ?',
        a: 'yes',
        b: 'no',
        c: 'yea and i hate it',
        d: 'what is lol',
        correct: 'c'
    },{
        q: 'why are u ?',
        a: 'what',
        b: '?',
        c: 'lol',
        d: 'hahah',
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






