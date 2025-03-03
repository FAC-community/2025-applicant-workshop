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
    const colors = ['#FF5733', '#33FF57cp', '#33ffiF', '#F3FF33'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    colorBox.style.backgroundColor = randomColor;
    colorBox.style.transition = "2s";

});

// creating list elements to drag and drop for task 8
// This below area assigns varibles to the elements we are going to create in the DOM
// Assigns them ID and STYLES???
// Should we be using setAttribute instead of individually setting characteristics? Set Attribute seems pointless
// is it possible to use PNGs or other IMGs with online Vscode?


const main = document.querySelector('main');

const section4 = document.createElement('section');
section4.id = 'Section 4';
section4.className = 'content-section';

const s4Title = document.createElement('h2');
s4Title.id = 's4Title';
s4Title.innerText = 'Section 4 : The Drag Bit';

const section5 = document.createElement('section');
section5.id = 'Section 5';
section5.className = 'content-section';

const s5Title = document.createElement('h2');
s5Title.id = 's5Title';
s5Title.innerText = 'Section 5 : Clicking some APIs';

const APIBox = document.createElement('div');
APIBox.id = 'APIBox';
APIBox.style.background = 'purple';

APIBox.style.margin ='30px';

APIBox.style.display = 'flex';
APIBox.style.flexDirection = 'column';
APIBox.style.alignItems = 'center';
APIBox.style.cursor = 'grab';
APIBox.style.listStyle = 'none';
APIBox.style.padding = '10px';
APIBox.style.borderRadius = '10px';
APIBox.style.boxShadow = '10px 10px 1px pink';

const listed = ['API Button 1',
                 'API Button 2',
                 'API Button 3'];

const links = ['https://keep.google.com/u/0/#home',
                 'https://www.youtube.com/watch?v=o1A3tOtdRUY',
                  'https://universal-creations.co.uk/contact/']

for 



( let i = 0; i < 3; i++) {

    
    
    const clickbutton = document.createElement('button');
    clickbutton.id = listed[i];
    console.log(clickbutton.id);
    clickbutton.innerText = listed[i];

    clickbutton.addEventListener('click', ()=>{
        window.open(links[i]);
    });
    

    APIBox.append(clickbutton);
    
}





const ul = document.createElement('ul');
ul.id = 'Drag List';
ul.style.background = 'purple';

ul.style.margin ='30px';

ul.style.display = 'flex';
ul.style.flexDirection = 'column';
ul.style.alignItems = 'center';
ul.style.cursor = 'grab';
ul.style.listStyle = 'none';
ul.style.padding = '10px';
ul.style.borderRadius = '10px';
ul.style.boxShadow = '10px 10px 1px pink';


const dragBox = document.createElement('div');
dragBox.className = 'dragBox';
dragBox.style.width = '100%';
dragBox.style.minHeight = '100vh';
dragBox.style.background = '#0b0423';
dragBox.style.display = 'flex';
// dragBox.style.flexDirection = 'column';
dragBox.style.alignItems = 'center';
dragBox.style.justifyContent = 'center';

const rightBox = document.createElement('div');
rightBox.id = 'rightbox'
rightBox.style.width = '300px';
rightBox.style.minHeight = '400px';
rightBox.style.margin = '20px';
rightBox.style.border = '2px dashed #fff';

const leftBox = document.createElement('div');
leftBox.id = 'leftbox'
leftBox.style.width = '300px';
leftBox.style.minHeight = '400px';
leftBox.style.margin = '20px';
leftBox.style.border = '2px dashed #fff';
// leftBox.addEventListener('click', function);

// make new list items into an array of 5 or so and loop through them using a standard counter and 
// assign a number to each list item as it is created from the loop
// use the 'getelement / append / (list[i]) within the loop
// list items need to exist prior to loop in an array, so they can be iterated???
// no they do not apparently

for ( i = 0; i < 5; i++) {
    
    const li = document.createElement('li');
    ul.append(li);
    li.id = 'List Item '+ [i+1];
    li.innerText = 'List Item '+ [i+1];
    li.draggable = true;
    li.addEventListener('dragstart', (event) => {
        let selected = event.target;

        rightBox.addEventListener('dragover', (event) => {
            event.preventDefault();
        });
        rightBox.addEventListener('drop', (event) => {
            rightBox.appendChild(selected);
            selected = null; 
        })
        leftBox.addEventListener('dragover', (event) => {
            event.preventDefault();
        });
        leftBox.addEventListener('drop', (event) => {
            leftBox.appendChild(selected);
            selected = null; 
        })
    }

    )

    // figure out how to add a magic carpet to the dragging bit
    
}


main.append(section4);
section4.append(s4Title);
section4.append(dragBox);
dragBox.append(leftBox);
dragBox.append(rightBox);
leftBox.append(ul);
main.append(section5);
section5.append(s5Title);
section5.append(APIBox);


// working with event listeners
// make new section 5
// buttons within s5 will open different APIs
// event listeners on the buttons





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
Completed - followed various different tutorials - 
 - Became familiar with DOM manipulation through the scripot file (although unrealistic in practice)
 - used a for loop to create a series of list items and assigned draggable function to these items
 (currently the loop cues 5 instances, it could be looping from a pre 
 initialised array variable above the loop. not sure if there is any need for this excercise.
 planning on turning draggable list items into magic carpets.
 need to give the rightbox a background to match leftbox



9. Add a countdown timer to a section, resetting after it reaches zero.

10. Fetch and display data from a public API (e.g., random jokes or quotes).

will add event listener buttons for different apis
event listener for phone gyroscope / accelorometer
*/


