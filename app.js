var countdownDate = new Date("Jan 1, 2023 00:00:00").getTime();

var x = setInterval(function() {

    var now = new Date().getTime();
    var gap = countdownDate - now;

    var days = Math.floor(gap / (1000 * 60 * 60 * 24));
    var hours = Math.floor((gap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((gap % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((gap % (1000 * 60)) / 1000);

    document.getElementById("timer").innerHTML = days + "d " + ": " + hours + "h "+ ": " + minutes + "m " + ": " + seconds + "s ";

    if (gap < 0) {
        document.getElementById("timer").innerHTML = "!Ended!";
        clearInterval(x);
    }
},500);