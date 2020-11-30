let currentName;
let currentNameTomorow;

const UI = {
    date: document.querySelector(".date"),
    names: document.querySelector(".names"),
    revealButton: document.querySelector(".reveal"),
    revealTomorowButton: document.querySelector(".revealTomorow"),
    dateTomorow: document.querySelector(".dateTomorow"),
    namesTomorow: document.querySelector(".namesTomorow") 
}

UI.revealButton.addEventListener("click", () => {
    console.log("Mygtukas paspaustas");
    fetchName();
    
});

UI.revealTomorowButton.addEventListener("click", () => {
    console.log("Mygtukas paspaustas");
    fetchNameTomorow();
    
});

function fetchName() {
    fetch("https://api.abalin.net/today?country=lt&timezone=Europe%2FPrague").then((response) => {
        console.log("Vardas iš serverio gautas");

        response.json().then((data) => {
            console.log("Vardas paverstas į JSON", data);
            currentName = data.data;

            console.log(currentName);
            renderName();
        });
    });
}

function fetchNameTomorow() {
    fetch("https://api.abalin.net/tomorrow?country=lt&timezone=Europe%2FPrague").then((response) => {
        console.log("Vardas iš serverio gautas");

        response.json().then((data) => {
            console.log("Vardas paverstas į JSON");
            currentNameTomorow = data.data;

            console.log(currentNameTomorow);
            renderNameTomorow();
        });
    });
}

function renderName(){
    UI.date.innerHTML =  currentName.dates.day;
    UI.names.innerHTML = currentName.namedays.lt;
}

function renderNameTomorow() {
    UI.dateTomorow.innerHTML = currentNameTomorow.dates.day;
    UI.namesTomorow.innerHTML = currentNameTomorow.namedays.lt;
}




