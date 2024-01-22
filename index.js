const aboutProjectText = document.getElementById("aboutProjectText");
const carWithOpenHood = document.getElementById("carWithOpenHood");
const shadowUnderCarWithOpenHood = document.getElementById("shadowUnderCarWithOpenHood");
const shadow = shadowUnderCarWithOpenHood.getContext('2d');
const schedule = document.getElementById("schedule");
const meetingDate = document.getElementById("dateOfMeeting");
const meetingDescription = document.getElementById("shortcutOfMeeting");
const nextButton = document.getElementById("nextButton");
const previousButton = document.getElementById("previousButton");
let indexOfMeeting = 0;
let dateOfMeeting = ["17.10.2023", "04.11.2023", "08.11.2023"];
let whatWeDoOnMeeting = ["- Ustalenie poszczególnych ról w grupie<br>- Przedstawienie wstępnych pomysłów" ,"- Plan działania aplikacji", "- Organizacja pracy<br>- Jira<br>- Github<br>- Wstępny szablon projektu<br>- Przypisanie zadań"]

const wheelRadius = 150;

let viewportWidth;
let viewportHeight;

let dates = document.querySelectorAll(".date");
let scheduleElements = document.querySelectorAll(".timeLineElement")


function drawWheel() {
    shadow.clearRect(0, 0, shadowUnderCarWithOpenHood.width, shadowUnderCarWithOpenHood.height);
    const color = shadow.createRadialGradient(shadowUnderCarWithOpenHood.width / 2, shadowUnderCarWithOpenHood.height / 2, 70, shadowUnderCarWithOpenHood.width / 2, shadowUnderCarWithOpenHood.height / 2, 150  );
    color.addColorStop(0, "grey"); 
    color.addColorStop(1, "transparent");
    
    // Draw wheel
    shadow.beginPath();
    shadow.arc(shadowUnderCarWithOpenHood.width / 2, shadowUnderCarWithOpenHood.height / 2, wheelRadius, 0, Math.PI * 2);
    shadow.fillStyle = color;
    shadow.fill();
}



window.addEventListener("load", (event) => {
    drawWheel();
    carWithOpenHood.classList.add("carWithOpenHoodClass");
    setTimeout(() => {
        shadowUnderCarWithOpenHood.classList.add("shadowUnderCarWithOpenHoodClass");
        aboutProjectText.classList.add("aboutProjectTextShow");
    }, 400);
    viewportWidth =  window.innerWidth || document.documentElement.clientWidth;
    viewportHeight = window.innerHeight || document.documentElement.clientHeight;
    meetingDate.innerHTML = dateOfMeeting[indexOfMeeting];
    meetingDescription.innerHTML = whatWeDoOnMeeting[indexOfMeeting];
})





let previousYPosition = 0;
const header = document.getElementById("header");

window.addEventListener("scroll", () => {
    if(previousYPosition <= pageYOffset){
        header.classList.remove("show-header");
    }                                                       // show/hide header
    else{
        header.classList.add("show-header");
    }
    previousYPosition = pageYOffset;

    dates.forEach((el) => 
    {
        if(getYPosition(el) > pageYOffset + 0.2*viewportHeight && getYPosition(el) < pageYOffset + 0.6*viewportHeight){
            el.classList.add("neon");
        }else{
            el.classList.remove("neon");
        }
    });

    if(line.getBoundingClientRect().y < 300){
        showTimeLine();
    }
});


let names = [];

function flipCard(event){
    const name = document.getElementById(event);
    let imie = event;

    if(names.includes(event)){
        name.classList.remove("theFlipedCard");
        names = names.filter((name) => {
            return name != event;
        })
    }
    else{
        names.push(event);
        name.classList.add("theFlipedCard");
    }
}




let dateWitClass = [];
function getYPosition(element) {
    var rect = element.getBoundingClientRect();
    return rect.top + window.scrollY;
  }

 function showTimeLine(){
    line.classList.add('lineAnimation');
    scheduleElements.forEach((el) =>{
            el.classList.add('timeLineElementAnimation');
    })
}


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

nextButton.addEventListener("click",() =>{
    indexOfMeeting ++;
    if(indexOfMeeting >= dateOfMeeting.length){
        indexOfMeeting = 0;
    }
    meetingDate.innerHTML = dateOfMeeting[indexOfMeeting];
    meetingDescription.innerHTML = whatWeDoOnMeeting[indexOfMeeting];
})

previousButton.addEventListener("click",() =>{
    indexOfMeeting --;
    if(indexOfMeeting <0){
        indexOfMeeting = dateOfMeeting.length-1;
    }
    meetingDate.innerHTML = dateOfMeeting[indexOfMeeting];
    meetingDescription.innerHTML = whatWeDoOnMeeting[indexOfMeeting];
})
  

