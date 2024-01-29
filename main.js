
setInterval(updateTime, 1000);

function updateTime() {
    let date = new Date();
    let hour = (date.getHours() % 12);
    let minute = date.getMinutes();
    let second = date.getSeconds();

    let hourDegree = hour * 30;
    let minuteDegree = minute * 6;
    let secondDegree = second * 6;

    let needleToEdit = new Map([
        ["hour", hourDegree],
        ["minute", minuteDegree],
        ["second", secondDegree],
    ]);

    needleToEdit.forEach((value, key) => {
        let element = document.querySelector("." + key);
        element.setAttribute("style", "transform: rotate("+value+"deg)");
    });
}