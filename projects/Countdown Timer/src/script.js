document.getElementById("startBtn").addEventListener("click", () => {
    const dateTime = document.getElementById("datetime").value;
    if (dateTime) {
        startCountdown(new Date(dateTime));
    } else {
        alert("Please set a valid date and time.");
    }
});

function startCountdown(countDate) {
    function countdown() {
        const now = new Date().getTime();
        const gap = countDate - now;

        if (gap <= 0) {
            clearInterval(interval);
            document.getElementById("days").innerText = 0;
            document.getElementById("hours").innerText = 0;
            document.getElementById("minutes").innerText = 0;
            document.getElementById("seconds").innerText = 0;
            return;
        }

        const second = 1000;
        const minute = second * 60;
        const hour = minute * 60;
        const day = hour * 24;

        const textDay = Math.floor(gap / day);
        const textHour = Math.floor((gap % day) / hour);
        const textMinute = Math.floor((gap % hour) / minute);
        const textSecond = Math.floor((gap % minute) / second);

        document.getElementById("days").innerText = textDay;
        document.getElementById("hours").innerText = textHour;
        document.getElementById("minutes").innerText = textMinute;
        document.getElementById("seconds").innerText = textSecond;
    }

    const interval = setInterval(countdown, 1000);
    countdown();
}
