let raceNumber = Math.floor(Math.random() * 1000);

let registeredEarly = !true;
let runnerAge = 23;

if (registeredEarly && runnerAge > 18) {
    raceNumber += 1000;
};

if (registeredEarly && runnerAge > 18) {
    console.log(`You will race at 9:30am and your race number is ${raceNumber}`);

} else if (!registeredEarly && runnerAge > 18) {
    console.log(`You will race at 11:00am and your race number is ${raceNumber}`);

} else if (runnerAge < 18) {
    console.log(`You will race at 12:30pm and your race number is ${raceNumber}`);

} else {
    console.log(`See registration!`);

};

