document.addEventListener("DOMContentLoaded", function () {
    let recordTableBody = document.getElementById("recordTableBody");
    let goodButton = document.getElementById("goodButton");
    let badButton = document.getElementById("badButton");
    let clickCount = 0;

    goodButton.addEventListener("click", function () {
        recordClick("Good");
    });

    badButton.addEventListener("click", function () {
        recordClick("Bad");
    });

    function recordClick(buttonType) {
        let currentTime = new Date();
        let timeString = currentTime.toLocaleTimeString();

        let newRow = document.createElement("tr");
        newRow.innerHTML = `
            <td>${clickCount}</td>
            <td>${buttonType}</td>
            <td>${timeString}</td>
        `;
        recordTableBody.appendChild(newRow);

        clickCount++;
    }
});
