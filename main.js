/*
ToDo List CLI Project!

Write a program that allows a user to add different tasks to a list.
The tasks added are going to have an attached status to signify if the task has been completed or not
The user should also be able to indicate when a task is completed

The user should be able to exit the program whenver they feel like it

As best as we can for the time being, we want to make it so this code doesn't break based on the user input.  

-prevents user from adding blank tasks
-user error doesn't cause issue 

We want to write our code so it's modular, use functions when possible to make it 
that all repetitive/tedious tasks are kept in their own functions.

//Example
Welcome to the To-Do List Manager Application! 

==============================================

Your to-do list is empty.

~ Select an action ~
[1] Create a to-do item
[2] Complete a to-do item
> 1

~ Creating a new to-do item ~
What is this to-do item called?
> Go to the dentist

==============================================

You have 1 to-do item(s).
1. [incomplete] Go to the dentist

~ Select an action ~
[1] Create a to-do item
[2] Complete a to-do item
> 1

~ Creating a new to-do item ~
What is this to-do item called?
> Buy groceries

==============================================

You have 2 to-do item(s).
1. [incomplete] Go to the dentist
2. [incomplete] Buy groceries

~ Select an action ~
[1] Create a to-do item
[2] Complete a to-do item
[3] Exit the Program
> 2

~ Completing a to-do item ~
Which to-do item would you like to complete?
> 2

==============================================

You have 2 to-do item(s).
1. [incomplete] Go to the dentist
2. [complete]   Buy groceries

~ Select an action ~
[1] Create a to-do item
[2] Complete a to-do item
>

____________________________________________
how to tackle this project: 

to do- task, status
represent the to-do as an object

To-do object= {
    keyname: type    
    Task: string
    Completed: boolean  
}

to-do list= array of todo objects 

build menu of options (ui projects )

while loop- keeps on runnin ! until the user decides to exit the program
(when they press 3 on home menu)

** Menu ** 

*/

// Process Design
const prompt = require("prompt-sync")({ sigint: true });
console.log("\n- - - - - - - - - - - - - - - - - - - - - - -\n");
let todoList = []; // data source for the project, all storage is here :)
console.log("\n~  Welcome, to the To-Do List Application !  ~\n");
let choice = 0;
promptMenu();

while (choice !== 3) {
  if (choice === 1) {
    createToDo();
  } else if (choice === 2) {
     completeTask();
  } else {
    // any choice that isn't 1-3, bad input !!
    console.log(" Bad input, try again !! ");
  }
  promptMenu();
}
console.log("~ Exiting Program Now, See You Later! :) ~");

function promptMenu() {
  console.log("\n- - - - - - - - - - - - - - - - - - - - - - -\n");
  if (todoList.length === 0) {
    console.log("Your to-do list is empty. ");
  } else {
    console.log(`You have ${todoList.length} to-do item(s).`);
    for (let i = 0; i < todoList.length; i++) {
      let status = "";

      if (todoList[i].completed === false) {
        status = "incomplete";
      } else {
        status = "complete";
      }

      console.log(`${i + 1}. ${todoList[i].task} [${status}]`);
    }
  }

  console.log("\n- - - - - - - - - - - - - - - - - - - - - - -\n");
  console.log("~ Select an option ~ ");
  console.log("1. Create a  ~ new ~  task ");
  console.log("2. Complete an ~ existing ~ task ");
  console.log("3. ~ Exit ~  the program ");
  choice = Number(prompt("> ")); // only options are 1-3
}


function createToDo() {
  console.log("1. Create a  ~ new ~  task ");
    // prompt the user to add their task, then add to todo list
    let newTask = prompt("Enter in your new Task: ");
    newTask = newTask.trim();
    while (newTask === "") {
      // valid: any string with non-space characters, invalid: empty string
      newTask = prompt("Do not enter an empty task, please try again :) ");
      newTask = newTask.trim();
    }
    let todo = {
      /// this is creating an object to reference
      task: newTask,
      completed: false,
    };
    todoList.push(todo);
    // console.log(todoList);
  } 


  function completeTask() {
    // we have to prompt the user for the task, then change the boolean from false to true
    console.log("2. Complete an ~ existing ~ task ");
    if (todoList.length === 0) {
      console.log("There are ~ no ~  tasks on your list, oops! :( ");
      prompt("(Press Enter to Return to main menu!)");
    } else {
      console.log("Select a task number to complete: ");
      let userChoice = Number(prompt(`<`));
      {
        // when the choice is invalid, outside the # in the list
        // !- reverses all boolean values
        while (!(userChoice >= 1 && userChoice <= todoList.length)) {
          userChoice = prompt("Please enter a valid to-do item number: ");
        }
      }
      if (todoList[userChoice - 1].completed) {
        console.log("\n- - - - - - - - - - - - - - - - - - - - - - -\n");
        console.log("\nTask is already completed ! \n");
      }
      todoList[userChoice - 1].completed = true;
    }
  }