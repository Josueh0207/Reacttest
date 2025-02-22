export function StateMachine() {
    document.addEventListener("DOMContentLoaded", function () {
        const chatCircle = document.getElementById("chat-circle");
        const chatBox = document.querySelector(".chat-box");
        const chatBoxToggle = document.querySelector(".chat-box-toggle");
    
        // Show/Hide chat box
        chatCircle.addEventListener("click", () => {
            chatCircle.classList.add("hidden");
            chatBox.classList.add("show");
        });
    
        chatBoxToggle.addEventListener("click", () => {
            chatBox.classList.remove("show");
            chatCircle.classList.remove("hidden");
        });
    
        // Handle form submission
        const chatForm = document.getElementById("chat-form");
        const chatInput = document.getElementById("chat-input");
        const chatLogs = document.querySelector(".chat-logs");
    
        var statemachine =  {
            currentState: "", // Initialize the current state
            states: {}, // Initialize the states object
            interact: function() {}, // Initialize the interact function
            render: function() {} // Initialize the render function
        }
    
        // Define the states and their transitions
        statemachine.states = {
            "start": {
                "message": "Welcome to the Stir Food Chatbot! is it your first time here?",
                "options": [
                    {
                        "title": "Yes it is my first time",
                        "next": "services"
                    },
                    {
                        "title": "No, I've been here before",
                        "next": "Previous Conversation"
                    },
                ]
            },
    
            "Previous Conversation": {
                "message": "Welcome back! How can we assist you today?",
                "options": [
                {
                "title": "Submit",
                "type": "form", // Indicate that this option is a form
                "fields": [ // Define the fields for the form
                    { name: "email", placeholder: "Email" },
                    { name: "phone", placeholder: "Phone Number" },
                ],
                "callback": function(data) { // Define the callback function for form submission
                    console.log("Form data:", data); // Log the form data to the console
                    statemachine.currentState = "Unregistered"; // ex. state - Replace with different state after data base check
                    statemachine.render(); // Render the new state
                    }
                },
                
                {
                    "title":"Back",
                    "back":"start"
                }
                ],
            },
    
            "Registered": {
                /*Callback function to get the conversation back to where it was*/
                "message": "We have a few questions to establish your business state",
                "options": [
                {
                    "title": "Esablished",
                    "next": "established"
                },
                {
                    "title": "Scaling up",
                    "next": "Scaling up"
                },
                {
                    "title":"Idea Phase",
                    "next":"Idea Phase"
                }
                ],
            },
    
            "Unregistered": {
                "message": "The email or phone number you provided is not in our system. Please try again or start a new conversation",
                "options": [
                {
                "title": "Try Again",
                "next": "Previous Conversation"
                },
                {
                "title": "Start New Conversation",
                "next": "services"
                }
                ],
            },
            
            "services": {
                "message": "What type of service are you looking for?",
                "options": [
                    {
                        "title": "Workstation Space",
                        "next": "workstationSpace"
                    },
                    {
                        "title": "Kitchen Rental",
                        "next": "kitchenRental"
                    },
                    {
                        "title": "Event Venue",
                        "next": "Event Venue"
                    },
                    {
                        "title": "Business Coach",
                        "next": "information"
                    },
                    {
                        "title": "Explain Each Service",
                        "next": "information"
                    }
                ]
            },
    
            "workstationSpace": {
                "message": "The first step to this process is signing up as a The Food Corridor",
                "options": [
                    {
                        "title": "Signed up?",
                        "next": "Check Signed Up"
                    }
                ]
            },
    
            "kitchenRental": {
                "message": "The first step to this process is signing up as a The Food Corridor",
                "options": [
                    {
                        "title": "Signed up?",
                        "next": "Check Signed Up"
                    }
                ]
            },
    
            "Event Venue": {
                /*Use checkboxes here*/
                "message": "The first step to this process is signing up as a The Food Corridor",
                "options": [
                    {
                        "type": "checkbox",
                        "boxes": [
                            {name: "Indoor", value: "Indoor", id: "Indoor"},
                            {name: "Outdoor", value: "Outdoor", id: "Outdoor"}
                        ]
                    },
                    {
                        "title": "Signed up?",
                        "next": "Check Signed Up"
                    }
                ]
            },
    
            "Business Coach": {
                "message": "The first step to this process is signing up as a The Food Corridor",
                "options": [
                    {
                        "title": "Signed up?",
                        "next": "Check Signed Up"
                    }
                ]
            },
    
            "Check Signed Up": {
                "message": "Are you already signed up as a The Food Corridor?",
                "options": [
                    {
                        /*Database update here with callback function similar way like above where the form is*/
                        "title": "Yes",
                        "next": "Contact Form"
                    },
                    {
                        "title": "No",
                        "next": "Unregistered"
                    }
                ]
            },
    
            "Not Signed up": {
                "message": "You need to sign up as a The Food Corridor to proceed",
                "options": [
                    {
                        "title": "Press Here to Sign Up",
                        "href": "https://app.thefoodcorridor.com/en/signup?default_kitchen=21957"
                    },
                    {
                        "title": "Back",
                        "back": "services"
                    }
                ]
            },
    
            "Contact Form":{
                "message": "Before moving onto the second phase, Please fill out the form below so we can keep track of this conversation.",
                "options": [
                    {
                        "type": "form",
                        "fields": [
                            { name: "name", placeholder: "Name" },
                            { name: "email", placeholder: "Email" },
                            { name: "phone", placeholder: "Phone" },
                            { name: "message", placeholder: "Message" }
                        ],
                        "callback": function(data) {
                            console.log("Form data:", data); // Log the form data to the console
                            statemachine.currentState = "Second Phase"; // ex. state - Replace with different state after data base check
                            statemachine.render(); // Render the new state
                        }
                    },
                    {
                        "title":"Back",
                        "back":"start"
                    }
                ]
            },
    
            "established": {
                "message": "Well done on being an established business. Please let move to the second phase.",
                "options": [
                    {
                        "title": "Second Phase",
                        "next": "Second Phase",
                    },
                ]
            },
    
            "Scaling up": {
                "message": "Well done on being an Scaling up business. Please let move to the second phase.",
                "options": [
                    {
                        "title": "Second Phase",
                        "next": "Second Phase",
                    },
                ]
            },
    
            "Idea Phase": {
                "message": "It seems as though you're still in the idea phase. Here is some information to help you move forward.",
                "options": [
                    {
                        "title": "Information",
                        "next": "information",
                    },
                ]
            },
    
            "Second Phase": {
                "message": "Great! Let's Check the pre-rental checklist of what you have.",
                "options": [
                    {
                        "type": "checkbox",
                        "boxes": [
                            {name: "Interior Health", value: "Interior Health", id: "Interior Health"},
                            {name: "City of Kamloops Business License", value: "City of Kamloops Business License", id: "City of Kamloops Business License"},
                            {name: "Commercial Insurance", value: "Commercial Insurance", id: "Commercial Insurance"},
                            {name: "Completed Business Plan", value: "Completed Business Plan", id: "Completed Business Plan"}
                        ]
                    }
                ]
            },
    
            "information": {
                "message": "Please contact our support team directly for further assistance.",
                "options": [
                {
                    "title":"Back",
                    "back":"start"
                }]
            },
    
            "Interior Health": {
                "message": "You need to complete the Interior Health requirements.",
                "options": [
                    {
                        "title": "Back",
                        "back": "Second Phase"
                    }
                ]
            },
            "City of Kamloops Business License": {
                "message": "You need to obtain the City of Kamloops Business License.",
                "options": [
                    {
                        "title": "Back",
                        "back": "Second Phase"
                    }
                ]
            },
            "Commercial Insurance": {
                "message": "You need to get Commercial Insurance.",
                "options": [
                    {
                        "title": "Back",
                        "back": "Second Phase"
                    }
                ]
            },
            "Completed Business Plan": {
                "message": "You need to complete your Business Plan.",
                "options": [
                    {
                        "title": "Back",
                        "back": "Second Phase"
                    }
                ]
            },
            "defaultState": {
                "message": "All requirements are met. You can proceed to the next step.",
                "options": [
                    {
                        "title": "Next",
                        "next": "end"
                    }
                ]
            },
            "handleUnchecked": {
                "message": "You have some unchecked items. Please address them.",
                "options": [
                    {
                        "title": "Back",
                        "back": "Second Phase"
                    }
                ]
            },
        }
        
        // Function to handle user interaction
        statemachine.interact = function(option) { 
            var currentState = statemachine.states[statemachine.currentState]; // Get the current state
            var selectedOption = currentState.options[option]; // Get the selected option
            
            if (selectedOption.back) { // If the option has a back property
                this.currentState = selectedOption.back; // Set the current state to the back state
                this.render(); // Render the new state
            }
    
            if (selectedOption.next) { // If the option has a next property
                this.currentState = selectedOption.next; // Set the current state to the next state
                this.render(); // Render the new state
            }
    
            if (selectedOption.callback) { // If the option has a callback property
                selectedOption.callback(); // Call the callback function
            }
    
            if (selectedOption.href) { // If the option has an href property
                window.open(selectedOption.href, "_blank"); // Open the link in a new tab
                return;
            }
        };
    
        // Function to render the current state
        statemachine.render = function() { 
            var buttons = document.getElementById("button"); // Get the buttons container
            var currentState = statemachine.states[statemachine.currentState]; // Get the current state
            
            if (!currentState) {
                console.error(`State "${statemachine.currentState}" is not defined.`);
                return;
            }
    
            addMessage(currentState.message, "user"); // Add the current state's message to the chat logs
    
            // Then, clear the current buttons 
            buttons.innerHTML = "";
            
            // Create buttons for each option in the current state  
            currentState.options.forEach((option, i) => { 
                if (option.type === "form") {
                    var form = createForm(option, i); // Create a form if the option type is "form"
                    buttons.appendChild(form); // Append the form to the buttons container
                }
                
                else if (option.type === "checkbox") {
                    var checkbox = createCheckbox(option, i); // Create a checkbox if the option type is "checkbox"
                    buttons.appendChild(checkbox); // Append the checkbox to the buttons container
                } 
    
                else {
                    var button = document.createElement("button"); // Create a new button element
                    button.className = "titles"; // Set the class name for the button
                    button.innerText = option.title; // Set the button text to the option title
                    button.onclick = () => this.interact(i); // Set the button's onclick handler to interact with the option
                    buttons.appendChild(button); // Append the button to the buttons container
                }
            });
    
            // If the current state is "handleUnchecked", render the unchecked states
            if (this.currentState === "handleUnchecked" && this.uncheckedStates) {
                this.uncheckedStates.forEach(state => {
                    if (statemachine.states[state]) {
                        addMessage(statemachine.states[state].message, "user");
                    } else {
                        console.error(`State "${state}" is not defined.`);
                    }
                });
            }
    
            chatLogs.appendChild(buttons); // Append the buttons container to the chat logs
            chatLogs.append(document.createElement("br")); // Add a line break after the buttons
        }
    
        // Function to add a message to the chat logs
        function addMessage(msg, type) {
          const msgDiv = document.createElement("div"); // Create a new div element for the message
          msgDiv.className = `chat-msg ${type}`; // Set the class name for the message div
          msgDiv.innerHTML = `<div class="cm-msg-text">${msg}</div>`; // Set the inner HTML of the message div
          chatLogs.appendChild(msgDiv); // Append the message div to the chat logs
          chatLogs.scrollTop = chatLogs.scrollHeight; // Scroll to the bottom of the chat logs
        }
    
        // Function to create a form for the option
        function createForm(option) {
            var form = document.createElement("form"); // Create a new form element
            form.className = "form"; // Set the class name for the form
            form.onsubmit = function(event) {
                event.preventDefault();
                var formData = new FormData(form);
                var data = {};
                option.fields.forEach(field => {
                    data[field.name] = formData.get(field.name);
                });
                option.callback(data); // Call the callback function with the form data
            };
    
            option.fields.forEach(field => {
                var input = document.createElement("input"); // Create a new input element
                input.type = "text"; // Set the input type to text
                input.name = field.name; // Set the input name
                input.placeholder = field.placeholder; // Set the input placeholder
                form.appendChild(input); // Append the input to the form
            });
    
            var submitButton = document.createElement("button"); // Create a new button element
            submitButton.type = "submit"; // Set the button type to submit
            submitButton.innerText = "Submit"; // Set the button text
            form.appendChild(submitButton); // Append the button to the form
    
            return form;
        }
    
        function createCheckbox(option) {
            var form = document.createElement("form"); // Create a new form element
            form.className = "checkbox"; // Set the class name for the form
            form.onsubmit = function(event) {
                event.preventDefault();
                var uncheckedValues = [];
                option.boxes.forEach(box => {
                    var checkbox = document.getElementById(box.id);
                    if (!checkbox.checked) {
                        uncheckedValues.push(box.value);
                    }
                });
                console.log("Unchecked values:", uncheckedValues); // Log the unchecked values
                // Handle the unchecked values as needed
                if (uncheckedValues.length > 0) {
                    statemachine.uncheckedStates = uncheckedValues; // Store unchecked values in the state machine
                    statemachine.currentState = "handleUnchecked";
                    statemachine.render();
                } 
                else {
                    // If all checkboxes are checked, transition to a default state
                    statemachine.currentState = "defaultState";
                    statemachine.render();
                }
            };
    
            option.boxes.forEach(box => {
                var label = document.createElement("label");
                var input = document.createElement("input"); // Create a new input element
                input.type = "checkbox"; // Set the input type to checkbox
                input.name = box.name; // Set the input name
                input.value = box.value; // Set the input value
                input.id = box.id; // Set the input id
                label.appendChild(input); // Append the input to the label
                label.appendChild(document.createTextNode(box.value)); // Append the checkbox label
                form.appendChild(label); // Append the label to the form
                form.appendChild(document.createElement("br")); // Add a line break
            });
    
            var submitButton = document.createElement("button"); // Create a new button element
            submitButton.type = "submit"; // Set the button type to submit
            submitButton.innerText = "Submit"; // Set the button text
            form.appendChild(submitButton); // Append the button to the form
            return form;
        }
    
        statemachine.currentState = "start"; // Set the initial state to start
        statemachine.render(); // Render the initial state
    
        /*chatForm.addEventListener("submit", (e) => { // Event listener for form submission
            e.preventDefault(); // Prevent the default form submission
            const msg = chatInput.value.trim(); // Get the trimmed input value
            if (msg) { // If the message is not empty
                addMessage(msg, "self"); // Add the message to the chat logs as self
                chatInput.value = ""; // Clear the input field
                setTimeout(() => { // Simulate a response from the bot
                    addMessage("Response from bot", "user"); // Add the bot's response to the chat logs as user
                }, 1000); // Delay the response by 1 second
            }
        });*/
    
        
    });
}
