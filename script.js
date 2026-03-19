let calendar = document.getElementById("calendar");

for (let i = 1; i <= 30; i++) {
    let day = document.createElement("div");
    day.classList.add("day");
    day.innerText = i;
    calendar.appendChild(day);
}