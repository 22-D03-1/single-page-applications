const countdown = (seconds = 10) => {
    let remainingSeconds = +seconds;
    const interval = setInterval(() => {
        console.clear();
        console.log(remainingSeconds);
        remainingSeconds--;
        if (remainingSeconds < 0) clearInterval(interval);
    }, 1000);
};

const seconds = 30;
countdown(seconds);
