// Lets start adding the different slides
const questions_wrapper = document.getElementById('Question_Wrapper');
const question1 = document.getElementById('question1');
question1.style.display = "flex";
const question2 = document.getElementById('question2');
question2.style.display = "none";
const question3 = document.getElementById('question3');
question3.style.display = "none";
const question4 = document.getElementById('question4');
question4.style.display = "none";
const question5 = document.getElementById('question5');
question5.style.display = "none";
const submit = document.getElementById('submit_page');
submit.style.display = "none";
const submit_btn = document.getElementById('submit');
submit_btn.style.display = "none";
const right_btn = document.getElementById('rightButton');
const left_btn = document.getElementById('leftButton');
left_btn.style.visibility = 'hidden';



question_list = [question1, question2, question3, question4, question5, submit]
current = 0



function rightClick() {
    if (question_list[current] != question_list[question_list.length - 1]) {
        question_list[current].style.display = "none";
        getData(question_list[current])
        current = current+1
        question_list[current].style.display = "flex";
        left_btn.style.visibility = 'visible';
        if (question_list[current] == question_list[question_list.length - 1]) {
            right_btn.style.display = "none";
            submit_btn.style.display = "inline";
            submit_btn.style.visibility = "visible";
        }
    }
}

function leftClick() {
    if (question_list[current] == question_list[question_list.length - 1]) {
        submit_btn.style.display = "none";
        right_btn.style.display = "inline";
        submit.getElementsByTagName("p")[0].innerText = "Done, Now Submit";
        const aElements = submit.querySelectorAll('a');
        aElements.forEach(a => a.remove());
    }
    if (question_list[current] != question_list[0]) {
        if (question_list[current] == question_list[1]) {
            left_btn.style.visibility = 'hidden';
        }
        question_list[current].style.display = "none";
        current = current-1
        question_list[current].style.display = "flex";
    }
}

budget = 70000;
fuelTypes = [];
transmissionPreferences = [];
drivetrainPreferences = [];
minPreferedMPG = 0;
function getData(question) {
    if (question == question1) {
        budget = question.getElementsByTagName('input')[0].value;
        
    }
    if (question == question2) {
        len = question.getElementsByTagName('input').length;
        fuelTypes = []
        for (var i = 0; i < len; i++) {
            if (question.getElementsByTagName('input')[i].checked) {
                fuelTypes.push(question.getElementsByTagName('input')[i].value)
            }
        }
       
    }
    if (question == question3) {
        len = question.getElementsByTagName('input').length;
        transmissionPreferences = []
        for (var i = 0; i < len; i++) {
            if (question.getElementsByTagName('input')[i].checked) {
                transmissionPreferences.push(question.getElementsByTagName('input')[i].value)
            }
        }
        
    }
    if (question == question4) {
        len = question.getElementsByTagName('input').length;
        drivetrainPreferences = []
        for (var i = 0; i < len; i++) {
            if (question.getElementsByTagName('input')[i].checked) {
                drivetrainPreferences.push(question.getElementsByTagName('input')[i].value)
            }
        }
        
    }
    if (question == question5) {
        minPreferedMPG = question.getElementsByTagName('input')[0].value;
        
    }

}

function getInfo() {
    results = [budget,fuelTypes,transmissionPreferences,drivetrainPreferences,minPreferedMPG];
    return JSON.stringify(results);
}

function placeHondaModels(pythonListModels) {
    submit.getElementsByTagName("p")[0].innerText = "Your Honda Models";
    models_list = JSON.parse(pythonListModels);
    const modelsWraper = submit.getElementsByTagName("div")[0];
    for (model in models_list) {
        let newa = document.createElement('a');
        newa.classList.add("newa")
        newa.innerText = models_list[model];
        newa.href = `https://www.cars.com/shopping/results/?dealer_id=&drivetrain_slugs[]=${drivetrainPreferences[0]}&keyword=&list_price_max=${budget}&list_price_min=&makes[]=honda&maximum_distance=20&mileage_max=&models[]=honda-${models_list[model].toLowerCase().replaceAll("-","_").split(" ").join("-")}&page_size=20&sort=best_match_desc&stock_type=all&transmission_slugs[]=${transmissionPreferences[0]}&trims[]=honda-${models_list[model].toLowerCase().replaceAll("-","_").split(" ").join("-")}&year_max=&year_min=&zip=`;
        newa.target = "_blank"
        modelsWraper.appendChild(newa);
    }
    submit_btn.style.visibility = 'hidden';
    
}

