// Lets start adding the different slides
const questions_wrapper = document.getElementById('Question_Wrapper');
const question1 = document.getElementById('question1');
question1.style.display = "flex";
const question2 = document.getElementById('question2');
question2.style.display = "none";

question_list = [question1, question2]
current = 0

function rightClick() {
    console.log("right")
    if (question_list[current] != question_list[question_list.length - 1]) {
        question_list[current].style.display = "none";
        current = current+1
        question_list[current].style.display = "flex";
    }
}

function leftClick() {
    console.log("left")
    if (question_list[current] != question_list[0]) {
        question_list[current].style.display = "none";
        current = current-1
        question_list[current].style.display = "flex";
    }
}
