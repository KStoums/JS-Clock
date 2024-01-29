
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