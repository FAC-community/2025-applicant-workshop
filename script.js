// Toggle hidden information
const toggleButton = document.getElementById('btn-toggle1');
const hiddenInfo = document.querySelector('.hidden-info');

toggleButton.addEventListener('click', () => {
    hiddenInfo.classList.toggle('hidden-info');
});

// Change background color of the box
const colorButton = document.getElementById('btn-change-color');
const colorBox = document.getElementById('color-box');

colorButton.addEventListener('click', () => {
    const colors = ['#FF5733', '#33FF57', '#3357FF', '#F3FF33'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    colorBox.style.backgroundColor = randomColor;
    colorBox.style.transition = "2s";

});

// Form submission handling
const form = document.getElementById('feedback-form');
const formResponse = document.getElementById('form-response');

// live character counter - using keyup provided correct count, tried keydown and beforeinput with inaccurate results
// have written in a reset count to the 'submit' event listener function

const count = document.getElementById("feedback").value.length;
document.getElementById("count").innerHTML = count;
//live character counter bit below, works with an 'event listener' which uses 'keyup' to update the live counter
form.addEventListener("keyup", () => {
    
    const count = document.getElementById("feedback").value.length;
    document.getElementById("count").innerHTML = count ;

});


form.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const feedback = document.getElementById('feedback').value;
    // resets the live counter to 0, below
    document.getElementById("count").innerHTML = count;

    formResponse.textContent = `Thank you, ${name}, for your feedback: "${feedback}"`;
    form.reset();
    

    
});



/* IDEAS FOR ADDITIONAL INTERACTIONS

1. Add functionality to highlight the navigation link of the current section as the user scrolls.
2. Implement a light/dark mode toggle using CSS root variables.
3. Create a dynamic list where users can add and remove items.
4. Add validation to the feedback form to ensure name and feedback are not empty.
5. Use localStorage to save the user's name for personalized greetings.

6. Animate the color change of the box with a smooth transition.
completed - used transition style in JS code

7. Display a live character counter for the feedback textarea.
completed - using keyup event listener

8. Implement drag-and-drop functionality for rearranging items in a list.

9. Add a countdown timer to a section, resetting after it reaches zero.

10. Fetch and display data from a public API (e.g., random jokes or quotes).

*/


