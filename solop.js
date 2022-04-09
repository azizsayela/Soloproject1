

$(document).ready(function () {
   
    $("#question").append("click Start to play")
/* the questions are stored in an array that contains object (question/option/and the right answer)*/ 
    var storage = [
        {
            question: "In which year of First World War Germany declared war on Russia and France ?",
            option: ["1914", "1915", "1916", "1917"],
            answer: '1914',
        },

        {
            question: "Joule is the unit of",
            option: ["temperature", "pressure", "energy", "heat"],
            answer: 'temperature',
        },

        {
            question: "Which one among the following radiations carries maximum energy ?",
            option: ["Ultraviolet rays", "Gamma rays", "X- rays", "Infra-red rays"],
            answer: 'Gamma rays',
        },

        {
            question: "The metal whose salts are sensitive to light is ?",
            option: ["Silver", "Zinc", "Copper", "Gold"],
            answer: 'Silver',
        },

        {
            question: "Who is the father of geometry ?",
            option: ["Aristotle", "Euclid", "Pythagoras", "Kepler"],
            answer: 'Euclid',
        },

        {
            question: "The World Largest desert is ?",
            option: ["Thar", " Kalahari", "Sahara", "Sonoran"],
            answer: 'Sahara',
        },

        {
            question: " The brain fever which affects young children is ?",
            option: ["Malaria", "Typhoid", "Encephalitis", "Pneumonia"],
            answer: 'Encephalitis',
        },

        {
            question: "Which of the following items was introduced by James Watt ?",
            option: ["Hot air balloon", "Steam boat", "Diving bell", "Rotary Steam Engine"],
            answer: 'Rotary Steam Engine',
        },

        {
            question: "In 1768, Captain James Cook set out to explore which ocean ?",
            option: ["Pacific Ocean", "Atlantic Ocean", "Indian Ocean", "Arctic Ocean"],
            answer: 'Atlantic Ocean',
        },

        {
            question: "What is actually electricity ?",
            option: ["A flow of water", " A flow of air", "A flow of electrons", "A flow of atoms"],
            answer: ' A flow of electrons',
        },

        {
            question: "Which of the following is not an international organisation ?",
            option: ["FIFA", "NATO", "ASEAN", "FBI"],
            answer: 'Nato',
        },

        {
            question: " Which of the following disorders is the fear of being alone ?",
            option: ["Agoraphobia", "Aerophobia", "Acrophobia", "Arachnophobia"],
            answer: 'Agoraphobia',
        },

        {
            question: "Which of the following is a song by the German heavy metal band Scorpions?",
            option: [" Stairway to Heaven", "Wind of Change", "Don’t Stop Me Now", "Hey Jude"],
            answer: 'Wind of Change',
        },

        {
            question: "What is the speed of sound ? ",
            option: ["120 km/h", "1,200 km/h", " 400 km/h", "700 km/h"],
            answer: '1,200 km/h',
        },
    ]
    console.log(storage)
    /*this is all the variable declaration that we gonna use using jquery*/ 
    var question = $('#question')

    var next = $('#btn-next')
    var start = $('#btn-start')
    var span = document.querySelectorAll('span')
    var quizContainer = $('.question-container')
    var scoreRes = $('#scorecard')
    var option0 = $('#option0')
    var option1 = $('#option1')
    var option2 = $('#option2')
    var option3 = $('#option3')
    var i = 0;
    var score = 0;
    var val = $('#your-answer')
    var prev = $('#btn-prv')
    var str = ""
/* this function is to start the game and add the first question*/ 
    function startFirstQuest() {
        question.append(storage[0].question)
        option0.append(storage[0].option[0])
        option1.append(storage[0].option[1])
        option2.append(storage[0].option[2])
        option3.append(storage[0].option[3])
    }

    /*the initiate will be called inside the onClick event of the button
     start it will empty the div uest and append the quest and its options */
    function initiate() {
        question.empty()

        startFirstQuest()
    }
   /* this will empty the input filed and add a new quest each time*/ 
    function addQuest() {
        document.getElementById("your-answer").value = "";

        question.empty()
        option0.empty()
        option1.empty()
        option2.empty()
        option3.empty()


        question.append(storage[i].question)
        option0.append(storage[i].option[0])
        option1.append(storage[i].option[1])
        option2.append(storage[i].option[2])
        option3.append(storage[i].option[3])
        i = i + 1
/*to detect the last quest and show result*/ 
        if (i === storage.length) {
            question.empty()
            $("#options").empty()
            question.append("Finished ! hit show answer to see the correction."+score )
            i = 0
        }
        else if (!i === storage.length) {
            if (document.getElementById("your-answer").value === storage[i].answer) {
                score = score + 1
            }
        }


    }
    start.click(initiate)
    next.click(addQuest)
/*previous button*/ 
    $("#btn-prv").click(function (){
        i=i-1
        question.empty()
        option0.empty()
        option1.empty()
        option2.empty()
        option3.empty()
        question.append(storage[i].question)
        option0.append(storage[i].option[0])
        option1.append(storage[i].option[1])
        option2.append(storage[i].option[2])
        option3.append(storage[i].option[3])

    

    })
    /*apending correction in the answers div*/ 
    $("#btn-show").click(function () {
        for (var i = 0; i < storage.length; i++) {
            str += (i + "-" + storage[i].answer + "/" + " ")
        }
        ans.append(str)
    })































})



