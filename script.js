// List of Chinese Zodiac signs
var zodiacSigns = [
    "Rat", "Ox", "Tiger", "Rabbit",
    "Dragon", "Snake", "Horse", "Goat",
    "Monkey", "Rooster", "Dog", "Pig"
];

// Function to calculate the zodiac sign
function calculateZodiac() {
    var yearInput = document.getElementById("yearInput").value;

    if (yearInput === "") {
        console.log("Year input is empty.");
        return;
    }

    var year = parseInt(yearInput);

    if (isNaN(year)) {
        console.log("Please enter a valid number.");
        return;
    }

    var index = (year - 4) % 12;
    var zodiac = zodiacSigns[index];
    console.log("The year " + year + " is the year of the " + zodiac + ".");
}

// Attach event listener to the button
var button = document.getElementById("calculateBtn");
button.addEventListener("click", calculateZodiac);
