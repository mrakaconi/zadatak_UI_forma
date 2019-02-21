// Progress Bar

var circle = document.querySelector('circle');
var radius = circle.r.baseVal.value;
var circumference = radius * 2 * Math.PI;

circle.style.strokeDasharray = `${circumference} ${circumference}`;
circle.style.strokeDashoffset = `${circumference}`;

function setProgress(percent) {
    const offset = circumference - percent / 100 * circumference;
    circle.style.strokeDashoffset = offset;
}

const inputProgress = document.querySelector("#progressbar");
setProgress(inputProgress.value);

inputProgress.addEventListener('change', function (e) {
    if (inputProgress.value < 101 && inputProgress.value > -1) {
        setProgress(inputProgress.value);
    }
})

// kako uraditi animacije?
const s = selektor => document.getElementById(selektor)

const inputName = s("FirstName")
const inputSurname = s("LastName")
const inputEmail = s("Email")
const selectCheck1 = s("checkbox1")
const selectCheck2 = s("checkbox2")
const addToProgress = s("#progressbar")
const mediumText = s("medium")

const steps1 = s("steps1")
const steps2 = s("steps2")
const steps3 = s("steps3")
const steps4 = s("steps4")


// Name polje
inputName.addEventListener("focusout", function () {
    if (inputName.value.length > 2) {
        steps1.innerHTML = "&#10004;";
        inputProgress.value = 25;
        mediumText.innerHTML = "25%"
        setProgress(inputProgress.value); 
    } else {
        steps1.innerHTML = "1";
    }
    
});
// Surname polje
inputSurname.addEventListener("focusout", function () {
    if (inputSurname.value.length > 2) {
        steps2.innerHTML = "&#10004;";
        inputProgress.value = parseInt(inputProgress.value) + 25;
        mediumText.innerHTML = "50%"
        setProgress(inputProgress.value);
    } else {
        steps2.innerHTML = "2";
    }
});
// Email polje
inputEmail.addEventListener("focusout", function () {
    if (inputSurname.value.length > 2) {
        steps3.innerHTML = "&#10004;";
        inputProgress.value = 75;
        mediumText.innerHTML = "75%"
        setProgress(inputProgress.value);
    } else {
        steps3.innerHTML = "3";
    }
    
});

selectCheck1.addEventListener( 'change', function() {
    if(this.checked) {
        steps4.innerHTML = "&#10004;"; 
        inputProgress.value = 100;
        mediumText.innerHTML = "100%"
        setProgress(inputProgress.value);
    } else {
        steps4.innerHTML = "4";
    }
});
selectCheck2.addEventListener( 'change', function() {
    if(this.checked) {
        steps4.innerHTML = "&#10004;"; 
        inputProgress.value = 100;
        mediumText.innerHTML = "100%"
        setProgress(inputProgress.value);
    } else {
        steps4.innerHTML = "4";
    }
});
