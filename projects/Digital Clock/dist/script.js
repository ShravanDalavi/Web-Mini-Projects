let format = "12";
let timeZone = "America/New_York";

function updateTimeZone() {
    timeZone = document.getElementById("country").value;
    showTime();
}

function updateClockFormat() {
    format = document.getElementById("format").value;
    showTime();
}

function showTime() {
    const date = new Date(new Date().toLocaleString("en-US", { timeZone }));
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    let session = "AM";

    if (format === "12") {
        session = h >= 12 ? "PM" : "AM";
        h = h % 12;
        h = h ? h : 12;
    }

    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

    const time = format === "12" ? `${h}:${m}:${s} ${session}` : `${h}:${m}:${s}`;
    document.getElementById("clock").innerText = time;
    document.getElementById("clock").textContent = time;

    setTimeout(showTime, 1000);
}

showTime();