// 1.	Create list of holiday objects with name and date [i.e: Christmas, Canada Day, New Years etc]
// 2.	Iterate over array of holidays and print number of days until each holiday from today
// 3.	Use Lodash library to output name and date of a random holiday
// 4.	Use Lodash library to output indexes of “Christmas” and “Canada Day” holidays

// STEP 1
const Lodash = require("lodash")

const holidays = [
{name:"Christmas",date: new Date(2024-12-25)},
{name:"New Years",date: new Date(2025-1-1)},
{name:"Canada Day",date: new Date(2025-7-1)},
];



//STEP 2
const today = new Date();
holidays.forEach((holidays) => {
    console.log(holidays);
    console.log((holidays.date - today) / (1000 * 60 * 60* 24));
});

//STEP 3
console.log(Lodash.sample(holidays));

//STEP 4
console.log(Lodash.findIndex(holidays, {name:"Canada Day"}))