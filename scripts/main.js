console.clear();
const gridContainer = document.getElementById("container");
let homepage;
const logo = document.createElement("img");
logo.setAttribute("src", "images/web-audio2.svg");
logo.setAttribute("alt", "crappy logo");
// let fileButton: HTMLButtonElement;
const title = document.createElement("h1");
title.textContent = "Garden Calc";
let StartFeetButton = document.createElement("button");
StartFeetButton.textContent = "Start Feet";
let StartInchesButton = document.createElement("button");
StartInchesButton.textContent = "Start Inches";
let incrementButton = document.createElement("button");
incrementButton.textContent = "Set Increment";
let nextBedButton = document.createElement("button");
nextBedButton.textContent = "Next Bed";
nextBedButton.setAttribute("class", "nextBed");
let incrementText = document.createElement("p");
let increment = 63;
let incrementFeet = Math.floor(increment / 12);
let incrementInches = increment - incrementFeet * 12;
let startFeet = 0;
let startInches = 0;
let bedCount = 0;
// let feet = 0;
// let inches = 0;
let startText = document.createElement("p");
let results = document.createElement("div");
results.setAttribute("class", "results");
UpdateStartText();
UpdateIncrementText();
GenerateHomePage();
function UpdateStartText() {
    startText.textContent = `Start:   ${startFeet} feet, ${startInches} inches`;
}
function UpdateIncrementText() {
    incrementText.textContent = `Increment:   ${increment} inches (${incrementFeet} feet, ${incrementInches} inches)`;
}
StartFeetButton.onclick = () => {
    ResetResults();
    const feet = prompt("Enter start feet:");
    if (feet === null)
        startFeet = 0;
    else
        startFeet = parseInt(feet);
    UpdateStartText();
};
StartInchesButton.onclick = () => {
    ResetResults();
    const inches = prompt("Enter start inches:");
    if (inches === null)
        startInches = 0;
    else
        startInches = parseInt(inches);
    if (startInches >= 12) {
        const feet = Math.floor(startInches / 12);
        startFeet += feet;
        startInches -= feet * 12;
    }
    UpdateStartText();
};
incrementButton.onclick = () => {
    const inches = prompt("Enter increment in inches:");
    if (inches === null)
        increment = 0;
    else
        increment = parseInt(inches);
    incrementFeet = Math.floor(increment / 12);
    incrementInches = increment - incrementFeet * 12;
    UpdateIncrementText();
};
nextBedButton.onclick = () => {
    startFeet += incrementFeet;
    startInches += incrementInches;
    if (startInches >= 12) {
        startInches -= 12;
        startFeet++;
    }
    GenerateResults();
};
function GenerateResults() {
    bedCount++;
    const nextBed = document.createElement("p");
    nextBed.textContent = `Bed ${bedCount}:   ${startFeet} feet, ${startInches} inches`;
    results.appendChild(nextBed);
}
function ResetResults() {
    gridContainer?.removeChild(results);
    gridContainer?.removeChild(nextBedButton);
    results = document.createElement("div");
    results.setAttribute("class", "results");
    results.appendChild(startText);
    gridContainer?.appendChild(results);
    gridContainer?.appendChild(nextBedButton);
    bedCount = 0;
}
function GenerateHomePage() {
    homepage = document.createElement("div");
    homepage.setAttribute("id", "home");
    homepage.setAttribute("class", "home");
    homepage.appendChild(title);
    homepage.appendChild(incrementButton);
    homepage.appendChild(incrementText);
    homepage.appendChild(StartFeetButton);
    homepage.appendChild(StartInchesButton);
    // homepage.appendChild(nextBedButton);
    if (gridContainer !== null) {
        gridContainer.appendChild(homepage);
        gridContainer.appendChild(results);
        results.appendChild(startText);
        gridContainer.appendChild(nextBedButton);
    }
}
//# sourceMappingURL=main.js.map