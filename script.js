document.addEventListener("DOMContentLoaded", function () {
    const countdownElement = document.getElementById("countdown");
    const messageElement = document.getElementById("message");

    function startCountdown(count) {
        countdownElement.textContent = count;

        if (count > 1) {
            setTimeout(function () {
                startCountdown(count - 1); 
            }, 1000); 
        } else {
            countdownElement.style.display = "none"; 
            messageElement.style.display = "block"; 
            messageElement.textContent = "Happy Independence Day";
        }
    }

    startCountdown(10); 
});
