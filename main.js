let age = 18;

const date = new Date();
const currentMonth = date.getMonth() + 1;
const targetDate = new Date(date.getFullYear(), 5, 1);

// check if the current date has already passed June 1st or not
if (currentMonth >= 6 && date >= targetDate) {
  age += 1;
}

const paragraph = document.querySelector(".biodata p");
paragraph.innerHTML = paragraph.innerHTML.replace("age", age);