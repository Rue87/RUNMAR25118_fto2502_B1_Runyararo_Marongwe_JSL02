# Task Input and Status Validation System

## Description

This project is a JavaScript program that prompts the user to enter information for two tasks, including each task's title, description, and current status ("todo", "doing", or "done"). It helps simulate task tracking and emphasizes basic JavaScript functionality like loops, conditionals, and user input handling through the prompt() and alert() methods.

## Technologies Used

- **HTML**
- **JavaScript**
- **Browser APIs**: prompt(), alert(), and console.log()

## Features

- Two tasks that require prompt-based user input

- Input validation for task status

- Tracks and stores task details (title, description, status)

- Identifies and records finished tasks

- Motivational feedback if no tasks are marked as done

- Clear inline code comments for better understanding

## Setup Instructions

1. Download or clone this repository to your computer.

2. Open the project folder in your code editor.

## Interaction Flow

1. The user is asked to provide Task 1's title, description, and status.

2. Then asked for Task 2's identical details.

3. Details are displayed in the console if either task has been completed.

4. A motivational message appears in the console if neither is completed.

## Challenges Faced and Solutions

- **Status Validation Logic**: At first, the validation condition's use of || unintentionally permitted invalid inputs. To ensure that only the legitimate statuses "todo," "doing," or "done" were accepted, this was fixed by utilizing &&.
- **Code Clean-Up**: The code initially had unused DOM element references that added clutter. These were removed after confirming they were unnecessary, making the codebase cleaner and more focused.
- **Commenting & Readability**: Initially, the absence of comments made the reasoning difficult to understand. The flow and intent of each section of the code were made clearer by the addition of thorough inline comments.
- **Function Not Running**: I encountered an issue executing my code in which I found that, I needed to call the function explicitly after doing some research. I fixed this by including onload="collectTaskData()" in the HTML file's <body> tag, which guarantees that the function is run as soon as the page loads.
- **

- **P.S.** This project is open for collaboration. My contacts are just below.

## Contact

[Runyararo Marongwe/mrunya87@gmail.com] [https://github.com/Rue87]
