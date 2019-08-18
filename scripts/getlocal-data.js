// clock script
function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);

    if(h > 12) {
        h = h - 12; //Sets it to a 12 o'clock format rather than 24
    }

    document.getElementById('clock').innerHTML = 
    //hours div css
    "<div class='time-frame'>" +
        "<div class='hours'>" + h + "</div>" +
        "<div class='hours'> : </div>" +

        //minutes div css
        "<div class='minutes'>" + m + "</div>" +
        "<div class='hours'> : </div>" +

        //seconds div css
        "<div class='seconds'>" + s + "</div>" +
    "</div>";

    var t = setTimeout(startTime, 500);
}

function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}
