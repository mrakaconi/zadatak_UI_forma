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
const c = selektor => document.getElementsByClassName(selektor)

const inputName = s("FirstName")
const inputSurname = s("LastName")
const inputEmail = s("Email")
const selectCheck1 = s("checkbox1")
const selectCheck2 = s("checkbox2")
const addToProgress = s("#progressbar")
const mediumText = s("medium")

var steps = c("steps");



var filled = [false, false, false, false];

function isValid(i) {
    if (!filled[i]) {
        steps[i].innerHTML = "&#10004;";
        inputProgress.value = parseInt(inputProgress.value) + 25;
        mediumText.innerHTML = inputProgress.value + "%";
        filled[i] = true;
        setProgress(inputProgress.value);
    } 
}

function isNotValid(i) {
    if (filled[i]) {
        steps[i].innerHTML = i+1;
        inputProgress.value = parseInt(inputProgress.value) - 25;
        mediumText.innerHTML = inputProgress.value + "%";
        filled[i] = false;
        setProgress(inputProgress.value); 
    }
}

// Name polje
inputName.addEventListener("focusout", function () {
    if (inputName.value.length > 2) {
        isValid(0); 
    } else {
        isNotValid(0);
    }

});
// Surname polje
inputSurname.addEventListener("focusout", function () {
    if (inputSurname.value.length > 2) {
        isValid(1); 
    } else {
        isNotValid(1);
    }
});
// Email polje
inputEmail.addEventListener("focusout", function () {
    if (inputEmail.value.length > 2) {
        isValid(2); 
    } else {
        isNotValid(2);
    }

});

selectCheck1.addEventListener( 'change', function() {
    if(this.checked) {
        isValid(3); 
    } else {
        isNotValid(3);
    }
});
selectCheck2.addEventListener( 'change', function() {
    if(this.checked) {
        isValid(3); 
    } else {
        isNotValid(3);
    }
});

