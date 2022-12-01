# Christmas light rental company

---

## Scope of Project:

### Create an app using HTML/CSS/JS that takes input data from a form and provides an estimate for a customer.

Using HTML, CSS and vanilla JS. In the future I would like to implement LeafletJS with a map on the right side of the application that uses the user's location (if allowed) to see if light installation would be possible in a user's area. If they decline location access then provide the user with a data entry field that accepts an entered zip code and tells them whether or not light installation is possible.

---

## Lesson(s) Learned:

### How to access data presented inside of a "select" tag.

In order to do so, you must select the "select" tag's ID and grab its value using a function. We can then pass that function into our "click" button event handler and prevent a default submission while logging the value to the console.

Before figuring out this solution I was originally trying to simply store the information into a variable rather than making it an actual function. By creating the function I was then able to properly organize my code and make the functions flow in a logical order leading up to the form submission function.
