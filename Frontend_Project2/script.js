
// =====================================
// 1. TO-DO LIST
// =====================================


// Get saved tasks from LocalStorage
let savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];


// Remove empty or invalid tasks
let tasks = [];

if (Array.isArray(savedTasks)) {

    tasks = savedTasks.filter(function(task) {

        return task &&
               typeof task.name === "string" &&
               task.name.trim() !== "";

    });

}


// Save cleaned tasks
saveTasks();


// Function to add a task
function addTask() {

    let input = document.getElementById("taskInput");

    let taskName = input.value.trim();


    // Check empty input
    if (taskName === "") {

        alert("Please enter a task!");

        return;

    }


    // Create a new task
    let newTask = {

        name: taskName,

        completed: false

    };


    // Add task to array
    tasks.push(newTask);


    saveTasks();

    input.value = "";

    displayTasks();

}


// Function to display tasks
function displayTasks() {

    let taskList = document.getElementById("taskList");

    let emptyMessage = document.getElementById("emptyMessage");


    // Clear old rows
    taskList.innerHTML = "";


    // Show empty message if no tasks
    if (tasks.length === 0) {

        emptyMessage.style.display = "block";

    } else {

        emptyMessage.style.display = "none";

    }


    // Display each task
    tasks.forEach(function(task, index) {

        let li = document.createElement("li");


        // Create checkbox
        let checkbox = document.createElement("input");

        checkbox.type = "checkbox";

        checkbox.checked = task.completed;


        // Update task status
        checkbox.addEventListener("change", function() {

            tasks[index].completed = checkbox.checked;

            saveTasks();

            displayTasks();

        });


        // Create task name
        let span = document.createElement("span");

        span.textContent = task.name;


        // Create delete button
        let deleteButton = document.createElement("button");

        deleteButton.textContent = "Delete";

        deleteButton.className = "delete-btn";


        // Delete task
        deleteButton.addEventListener("click", function() {

            tasks.splice(index, 1);

            saveTasks();

            displayTasks();

        });


        // Add completed class
        if (task.completed) {

            li.classList.add("completed");

        }


        // Add elements to list
        li.appendChild(checkbox);

        li.appendChild(span);

        li.appendChild(deleteButton);

        taskList.appendChild(li);

    });


    // Update all statistics
    updateProgress();

}


// Save tasks in LocalStorage
function saveTasks() {

    localStorage.setItem("tasks", JSON.stringify(tasks));

}



// =====================================
// 2. DASHBOARD PROGRESS
// =====================================

function updateProgress() {

    let total = tasks.length;

    let completed = 0;


    // Count completed tasks
    tasks.forEach(function(task) {

        if (task.completed) {

            completed++;

        }

    });


    // Calculate remaining tasks
    let remaining = total - completed;


    // Calculate percentage
    let percentage = 0;

    if (total > 0) {

        percentage = Math.round((completed / total) * 100);

    }


    // Update dashboard cards
    document.getElementById("totalTasks").textContent = total;

    document.getElementById("completedTasks").textContent = completed;

    document.getElementById("progressText").textContent =
        percentage + "%";


    // Update study goals
    updateStudyGoals(completed, remaining);

}



// =====================================
// 3. TODAY'S STUDY GOALS
// =====================================

function updateStudyGoals(completed, remaining) {

    let completedList =
        document.getElementById("completedList");

    let remainingList =
        document.getElementById("remainingList");


    // Clear previous lists
    completedList.innerHTML = "";

    remainingList.innerHTML = "";


    // Separate completed and remaining tasks
    tasks.forEach(function(task) {

        let li = document.createElement("li");

        li.textContent = task.name;


        if (task.completed) {

            completedList.appendChild(li);

        } else {

            remainingList.appendChild(li);

        }

    });


    // Update counts
    document.getElementById("goalCompletedCount").textContent =
        completed;

    document.getElementById("goalRemainingCount").textContent =
        remaining;

}



// =====================================
// 4. STUDY TIMETABLE
// =====================================


// Get all time dropdowns
let timeSelects = document.querySelectorAll(".timeSlot");


// Get all subject dropdowns
let subjectSelects = document.querySelectorAll(".subject");


// Get saved timetable
let savedTimetable =
    JSON.parse(localStorage.getItem("timetable")) || [];


// Restore previous selections
timeSelects.forEach(function(time, index) {

    if (savedTimetable[index]) {

        time.value = savedTimetable[index].time;

        subjectSelects[index].value =
            savedTimetable[index].subject;

    }

});


// Function to save timetable
function saveTimetable() {

    let timetable = [];


    // Store time and subject together
    timeSelects.forEach(function(time, index) {

        let entry = {

            time: time.value,

            subject: subjectSelects[index].value

        };

        timetable.push(entry);

    });


    // Save timetable in LocalStorage
    localStorage.setItem(
        "timetable",
        JSON.stringify(timetable)
    );

}


// Save when time is changed
timeSelects.forEach(function(time) {

    time.addEventListener("change", saveTimetable);

});


// Save when subject is changed
subjectSelects.forEach(function(subject) {

    subject.addEventListener("change", saveTimetable);

});



// =====================================
// 5. INITIALIZE DASHBOARD
// =====================================


// Display tasks when website opens
displayTasks();

