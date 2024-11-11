const hourHand = document.querySelector('.hour-hand');
const minuteHand = document.querySelector('.minute-hand');
const secondHand = document.querySelector('.second-hand');
const digitalClock = document.getElementById('digital-clock');
const dateDisplay = document.getElementById('date-display');

function setClock() {
    const now = new Date();

    // Convert UTC time to IST (UTC +5:30)
    const utcHours = now.getUTCHours();
    const utcMinutes = now.getUTCMinutes();
    const utcSeconds = now.getUTCSeconds();

    const istHours = (utcHours + 5) % 24;
    const istMinutes = (utcMinutes + 30) % 60;
    const istSeconds = utcSeconds;

    // Calculate hand positions
    const hoursDegrees = ((istHours / 12) * 360) + ((istMinutes / 60) * 30) + 90;
    const minutesDegrees = ((istMinutes / 60) * 360) + ((istSeconds / 60) * 6) + 90;
    const secondsDegrees = ((istSeconds / 60) * 360) + 90;

    // Update the clock hands
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
    minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

    // Update the digital clock display
    const formattedHours = String(istHours).padStart(2, '0');
    const formattedMinutes = String(istMinutes).padStart(2, '0');
    const formattedSeconds = String(istSeconds).padStart(2, '0');
    digitalClock.textContent = `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;

    // Update the date display
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = now.toLocaleDateString('en-IN', options);
    dateDisplay.textContent = formattedDate;
}

setInterval(setClock, 1000);
setClock();
