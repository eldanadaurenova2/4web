function updateDateTime() {

    const now = new Date(new Date().toLocaleString("en-US", { timeZone: "Asia/Almaty" }));

    const dateTimeString = now.toLocaleString('ru-KZ', { hour12: false });

    document.getElementById('currentDateTime').textContent = dateTimeString;
}


updateDateTime();
setInterval(updateDateTime, 1000);
