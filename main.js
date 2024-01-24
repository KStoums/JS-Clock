Number.prototype.pad = function(n) {
    for (let i = this.toString(); i.length < n; i = 0 + i) {
        return i;
    }
}

function updateClock() {
    let currentTime = new Date();
        tags = ["month", "day", "year", "hour", "minute", "second", "mili_second"] 
        dateBody = [getMonth(currentTime.getMonth()), 
        currentTime.getDay(), 
        currentTime.getFullYear(), 
        currentTime.getHours(), 
        currentTime.getMinutes(), 
        currentTime.getSeconds(), 
        currentTime.getMilliseconds()]

    for (let i = 0; i < tags.length; i++) {
        document.getElementById(tags[i]).firstChild.nodeValue = dateBody[i];
    }
}

function initClock() {
    updateClock();
    window.setInterval("updateClock()", 1);
}

function getMonth(monthInt) {
    let month = ["January", "February", "March", "May", "June", "July", "August", "September", "October", "November", "December"];
    return month[monthInt]
}