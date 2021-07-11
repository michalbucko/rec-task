const test=document.getElementById('test')
const name = document.getElementById('name')
const email = document.getElementById('email')
const phone = document.getElementById('phone')
const mess = document.getElementById('mess')

const questionbox = document.getElementById('question')
const answerbox1 = document.getElementById('answer1')
const answerbox2 = document.getElementById('answer2')
const answerbox3 = document.getElementById('answer3')
const answerlab1 = document.getElementById('answerlabel1')
const answerlab2 = document.getElementById('answerlabel2')
const answerlab3 = document.getElementById('answerlabel3')
const sendbutton = document.getElementById('send')


//wysuwanie formularza wraz z losowaniem pytania
function pokaz() 
{
    document.getElementById('contact_box').style.display = 'block';
    document.getElementById('contact_box').style.setProperty('--action',"arrive_form")
    set_question()
}

//chowanie formularza
function schowaj() 
{
    document.getElementById('contact_box').style.setProperty('--action',"hide_form")
}

//przypisane pytania oraz odpowiedzi do formularza
function set_question(){
    let questionindex = Math.floor(Math.random()*3+0) //losowanie pytania

    const choosenquestion = questions[questionindex] 
    questionbox.innerText = choosenquestion.question  //wpisanie pytania do formularza

    answerbox1.setAttribute('value',0) //ustawienie wartości radio buttonów
    answerbox2.setAttribute('value',1)
    answerbox3.setAttribute('value',2)

    answerlab1.innerText = choosenquestion.answers[0].text //ustawienie wartości opisów
    answerlab2.innerText = choosenquestion.answers[1].text
    answerlab3.innerText = choosenquestion.answers[2].text

    sendbutton.addEventListener('click', function(){
        var answerindex = document.test.answer.value
        if(choosenquestion.answers[answerindex].corrert){ //jeśli wszystko jest ok to zamykamy formularz i wyświetlamy alert że wiadomość wysłana
            schowaj()
            alert("Wiadomość wysłana pomyślnie")
        }
        else{ //jeśli nie to losujemy nowe pytanie
            set_question()
        }
    })

}

//tablica pytań i odpowiedzi
const questions=[
    {
        question: 'Kto jest autorem "Lubię wracać tam, gdzie byłem"?',
        answers: [        
            { text: 'Zbigniew Wodecki', corrert: true},
            { text: 'Piotr Rubik', corrert: false},
            { text: 'Dawid Podsiadło', corrert: false},
        ]
    },
    {
        question: 'Który z tych utworów NIE jest dziełem Maty?',
        answers: [        
            { text: 'Patointelignecja', corrert: false},
            { text: 'Małomiasteczkowy', corrert: true},
            { text: 'Schodki', corrert: false},
        ]
    },
    {
        question: 'W którym roku została wydana płyta "After Hours" zespołu The Weeknd?',
        answers: [        
            { text: '2077', corrert: false},
            { text: '2005', corrert: false},
            { text: '2020', corrert: true},
        ]
    },
]