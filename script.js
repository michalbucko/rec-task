const form = document.getElementById('contact_form')
const name = document.getElementById('name')
const email = document.getElementById('email')
const phone = document.getElementById('phone')
const mess = document.getElementById('mess')
const test = document.getElementById('test')

const questionbox = document.getElementById('question')
const answerbox1 = document.getElementById('answer1')
const answerbox2 = document.getElementById('answer2')
const answerbox3 = document.getElementById('answer3')
const answerlab1 = document.getElementById('answerlabel1')
const answerlab2 = document.getElementById('answerlabel2')
const answerlab3 = document.getElementById('answerlabel3')
const sendbutton = document.getElementById('send')

let valid=true

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

//resetowanie pól oraz chowanie errorów
function hide()
{
	name.parentElement.className = 'formcon';
    email.parentElement.className = 'formcon';
    phone.parentElement.className = 'formcon';
    mess.parentElement.className = 'formcon';
    test.reset();
}

//przypisane pytania oraz odpowiedzi do formularza
function set_question(){
    let questionindex = Math.floor(Math.random()*9+0) //losowanie pytania

    const choosenquestion = questions[questionindex] 
    questionbox.innerText = choosenquestion.question  //wpisanie pytania do formularza

    answerbox1.setAttribute('value',0) //ustawienie wartości radio buttonów
    answerbox2.setAttribute('value',1)
    answerbox3.setAttribute('value',2)

    answerlab1.innerText = choosenquestion.answers[0].text //ustawienie wartości opisów
    answerlab2.innerText = choosenquestion.answers[1].text
    answerlab3.innerText = choosenquestion.answers[2].text

    sendbutton.addEventListener('click', (e) =>{
        e.preventDefault();
        valid=true

        sprawdz()
        if(valid){
            var answerindex = document.test.answer.value
            if(choosenquestion.answers[answerindex].corrert){ //jeśli wszystko jest ok to zamykamy formularz i wyświetlamy alert że wiadomość wysłana       
                schowaj()
                alert("Wiadomość wysłana pomyślnie")
            }
        else{ //jeśli nie to losujemy nowe pytanie
            valid=false
            set_question()
        }
        }
    })
}

//walidacja każdego pola
function sprawdz(){
    const name_v=name.value.trim()
    const email_v=email.value.trim()
    const phone_v=phone.value.trim()
    const mess_v=mess.value.trim()

    if(name_v === ''){
        Errorfor(name, 'Imię i nazwisko nie mogą być puste')
        valid=false
    }

    if(email_v === ''){
        Errorfor(email, 'Email nie może być pusty')
        valid=false
    }

    else if(!checkEmail(email_v)){
        Errorfor(email, 'Podałeś zły format adresu email')
        valid=false
    }

    if(phone_v === ''){
        Errorfor(phone, 'Nr telefonu nie może być pusty')
        valid=false
    }

    else if(!checkPhone(phone_v)){
        Errorfor(phone, 'Podałeś zły format nr telefonu')
        valid=false
    }

    if(mess_v === ''){
        Errorfor(mess, 'Wiadomość nie może być pusta')
        valid=false
    }
}

//wypisanie errorów
function Errorfor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'formcon error';
	small.innerText = message;
}

//sprawdzenie czy email ma poprawny format
function checkEmail(email){
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

//sprawdzenie czy nr telefonu zawiera 9 cyfr
function checkPhone(phone){
    return /^\d{9}$/.test(phone);
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
    {
        question: 'Instrumentem strunowym nie jest?',
        answers: [        
            { text: 'Ukulele', corrert: false},
            { text: 'Wiolonczela', corrert: false},
            { text: 'Saksofon', corrert: true},
        ]
    },
    {
        question: 'Jak w muzyce nazywa się najwyższy głos żeński?',
        answers: [        
            { text: 'Alt', corrert: false},
            { text: 'Tenor', corrert: false},
            { text: 'Sopran', corrert: true},
        ]
    },
    {
        question: 'Który zespół wykonywał utwór opisujący Rasputina i jego życie na moskiewskim dworze?',
        answers: [        
            { text: 'Boney M.', corrert: true},
            { text: 'Modern Talking', corrert: false},
            { text: 'Bee Gees', corrert: false},
        ]
    },
    {
        question: 'Ile jest kluczy w zapisie nutowym?',
        answers: [        
            { text: '22', corrert: false},
            { text: '3', corrert: false},
            { text: '2', corrert: true},
        ]
    },
    {
        question: 'Który z kluczy znajdziemy w zapisie nutowym?',
        answers: [        
            { text: 'Wiolinowy', corrert: true},
            { text: 'Samochodowy', corrert: false},
            { text: 'Płaski', corrert: false},
        ]
    },
    {
        question: 'Jaki instrument może sam sobie akompaniować?',
        answers: [        
            { text: 'Saksofon', corrert: false},
            { text: 'Skrzypce', corrert: false},
            { text: 'Fortepian', corrert: true},
        ]
    },
    
]