let Battery = 100;

function drainBattery() {
    Battery -= 5;
    if (Battery < 0) Battery = 100;

document.getElementById("Battery").innerText = "Battery: " + Battery + "%";
}

setInterval(drainBattery, 2000);
function changeMood() {
    const moods = ["Happy", "Curious", "Upset", "Annoyed", "Mean"];
    const randomMood = moods[Math.floor(Math.random() * moods.length)];

    document.getElementById("mood").innerText = "Mood: " + randomMood;

    if (randomMood === "Happy") {
        document.body.style.backgroundColor = "#00ffcc";
    } else if (randomMood === "Upset") {
        document.body.style.backgroundColor = "#3366cc";
    } else if (randomMood === "Annoyed") {
        document.body.style.backgroundColor = "#ff6666";
    } else if (randomMood === "Mean") {
        document.body.style.backgroundColor = "#FFFFFF";
    } else {
        document.body.style.backgroundColor = "#00c8ff";
    }
}