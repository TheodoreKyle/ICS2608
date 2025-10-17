// Part 1
let name = prompt("Enter your name");
let age = parseInt(prompt("Enter your age"), 10);
let tasks = parseInt(prompt("Enter the number of tasks you have completed"), 10);
console.log("Hello, " + name + "! Welcome to your Task Manager.");
console.log("You are " + age + " years old.");
console.log("You have completed " + tasks + " on a daily basis. Great job!");

// Part 2
let task_week = tasks * 7; 
console.log("That's " + task_week + " completed tasks this week."); 

// Part 3
let goal = 20; 
let boolean = task_week >= goal; 

// Part 4
if (boolean)
    console.log("Good effort, " + name + "! You've exactly met your goal of doing 20 tasks for the week.");
else 
    console.log("Keep going, " + name + "! You haven't met your goal of doing 20 tasks for the week."); 

// Part 5
for (let i = 1; i <= task_week; i++) {
    console.log("Task " + i + " completed!"); 
}

// Part 6
function greetUser(name) {
    return "Hello, " + name + "! Welcome to your Task Manager."; 
}
function calculateTotalTasks(tasks) {
    return "Total tasks completed in a week: " + (tasks * 7); 
}

// Part 7
console.log(greetUser("Theodore Kyle"));
console.log(calculateTotalTasks(3));