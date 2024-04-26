let durationInSeconds = 10;

function myFunction() {
    let date = new Date();
    let timeString =
        date.getHours() + ':' +
        date.getMinutes() + ':' +
        date.getSeconds();

    console.clear();
    console.log(timeString);

    durationInSeconds--;
    if (durationInSeconds <= 0) {
        clearInterval(intervalId);
    }
}

let intervalId = setInterval(myFunction, 1000);