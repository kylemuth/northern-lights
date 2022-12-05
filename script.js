"use strict";

//////////////////////////////////////////////////////////////////////

// open about-tab on nav bar
document.querySelector(".nav-about").addEventListener("click", function () {
  document.querySelector(".modal-about").classList.remove("hidden");
  document.querySelector(".blur").classList.remove("hidden");
});

// closing about tab on nav bar
document.querySelector(".blur").addEventListener("click", function () {
  if (document.querySelector(".modal-about").classList.contains("hidden")) {
    document.querySelector(".modal-about").classremove("hidden");
  } else {
    document.querySelector(".modal-about").classList.add("hidden");
    document.querySelector(".blur").classList.add("hidden");
  }
});

// open plans-tab on nav bar
document.querySelector(".nav-plans").addEventListener("click", function () {
  document.querySelector(".modal-plans").classList.remove("hidden");
  document.querySelector(".blur").classList.remove("hidden");
});

// closing plans tab on nav bar
document.querySelector(".blur").addEventListener("click", function () {
  if (document.querySelector(".modal-plans").classList.contains("hidden")) {
    document.querySelector(".modal-plans").classremove("hidden");
  } else {
    document.querySelector(".modal-plans").classList.add("hidden");
    document.querySelector(".blur").classList.add("hidden");
  }
});

// open contact-tab on nav bar
document.querySelector(".nav-contact").addEventListener("click", function () {
  document.querySelector(".modal-contact").classList.remove("hidden");
  document.querySelector(".blur").classList.remove("hidden");
});

// closing contact tab on nav bar
document.querySelector(".blur").addEventListener("click", function () {
  if (document.querySelector(".modal-contact").classList.contains("hidden")) {
    document.querySelector(".modal-contact").classremove("hidden");
  } else {
    document.querySelector(".modal-contact").classList.add("hidden");
    document.querySelector(".blur").classList.add("hidden");
  }
});

//////////////////////////////////////////////////////////////////////

// Application form functionality
let cost;

const retrieveFormData = function () {
  let selectedValueLights = document.getElementById("light_type").value;
  if (selectedValueLights === "yellowlights") {
    cost = 5;
  } else if (selectedValueLights === "whitelights") {
    cost = 10;
  }
  console.log(selectedValueLights);
  console.log(cost);

  let selectedValueLightLength = document.getElementById("light_length").value;
  console.log(selectedValueLightLength);
  if (selectedValueLightLength === "twenty") {
    cost += 20;
  } else if (selectedValueLightLength === "thirty") {
    cost += 30;
  } else if (selectedValueLightLength === "forty") {
    cost += 40;
  } else if (selectedValueLightLength === "fifty") {
    cost += 50;
  } else if (selectedValueLightLength === "sixty") {
    cost += 60;
  } else if (selectedValueLightLength === "seventy") {
    cost += 70;
  } else if (selectedValueLightLength === "eighty") {
    cost += 80;
  } else if (selectedValueLightLength === "ninety") {
    cost += 90;
  } else if (selectedValueLightLength === "hundred") {
    cost += 100;
  }

  console.log(cost);

  let selectedValueDuration = document.getElementById("rental_length").value;
  console.log(selectedValueDuration);
  if (selectedValueDuration === "two") {
    cost += 20;
  } else if (selectedValueDuration === "three") {
    cost += 30;
  } else if (selectedValueDuration === "four") {
    cost += 40;
  } else if (selectedValueDuration === "five") {
    cost += 50;
  } else if (selectedValueDuration === "six") {
    cost += 60;
  } else if (selectedValueDuration === "seven") {
    cost += 70;
  } else if (selectedValueDuration === "eight") {
    cost += 80;
  }
  console.log(cost);
};

// This function will take the total cost calculated from above (it will later be used on the button event handler function in order to properly use it)
const newTotal = function () {
  document.querySelector(".total_cost").innerHTML = "Total Cost: ";
  document
    .querySelector(".total_cost")
    .insertAdjacentHTML("beforeend", ` $${cost}`);
};

// Form submission button
const dontSubmit = document
  .querySelector(".form__btn")
  .addEventListener("click", function (e) {
    e.preventDefault();
    retrieveFormData();
    newTotal();
  });

// Lesson learned: you must select the "select" tag's ID and grab it's value using a function. Using that function, we can then pass that as a callback into our event handler function which expects a click on the form button, handling the event by preventing a default submission and logging the combined cost of items into the console.

// "Functional" programming question... In order to get the total cost dynamically inserted into my html, I had to make a function to insertAdjacentHTML then pass that function through my button click event handler function. Why did I have to perform a function versus just defining that in a variable?

// Lesson Learned: In order to dynamically pass values, you must create a function which then must be passed through your event handler function. This is because __________??
