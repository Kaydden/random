let score = 0;

function allowDrop(event) {
    event.preventDefault();
}

function drag(event) {
    event.dataTransfer.setData("text", event.target.id);
}

function drop(event, category) {
    event.preventDefault();
    let itemId = event.dataTransfer.getData("text");
    let item = document.getElementById(itemId);

    // Check if the dropped item belongs to the correct category
    if (category === itemId.replace("item", "category")) {
        item.style.backgroundColor = "#4CAF50"; // Green color for correct category
        score++;
    } else {
        item.style.backgroundColor = "#f44336"; // Red color for wrong category
        score--;
    }

    document.getElementById("score").textContent = score;

    if (score >= 6 && !congratulationMessage) {
        congratulationMessage = document.createElement("p");
        congratulationMessage.textContent = "Parabéns!!!";
        document.body.appendChild(congratulationMessage);
    }

    // Append the item to the category
    event.target.appendChild(item);
}