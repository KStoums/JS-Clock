let alarm = "30/01/2024 at 3:00AM"

setInterval(updateTime, 1000);

function updateTime() {
    let date = new Date();
    let hour = (date.getHours() % 12);
    let minute = date.getMinutes();
    let second = date.getSeconds();

    let needleToEdit = new Map([
        ["hour", hour * 30],
        ["minute", minute * 6],
        ["second", second * 6],
    ]);

    needleToEdit.forEach((value, key) => {
        let element = document.querySelector("." + key);
        element.setAttribute("style", "transform: rotate("+value+"deg)");
    });

}

function setAlarm() {
    let date = document.querySelector(".alarm-date-text-area").value;
    let hour = document.querySelector(".alarm-hour-text-area").value;

    if (date == "" || hour == "") {
        window.alert("Date and hour need to be defined.")
        return;
    }

    alarm = date + " at " + hour;

    console.log("Alarm edited : " + alarm)
}