# To-Do List Application

## Project Overview

This is a simple, browser-based To-Do List application designed to help users manage their daily tasks. The application allows users to add, complete, and delete tasks. Additionally, tasks are stored in the browser's `localStorage`, so they persist even after the page is refreshed or the browser is closed. However, tasks older than a day are automatically removed when the page is revisited. This project is part of my journey in learning frontend development, focusing on HTML, CSS, and JavaScript.

## Features

- **Add Tasks:** Users can add new tasks to their to-do list.
- **Complete Tasks:** Users can mark tasks as completed by checking a checkbox next to each task.
- **Delete Tasks:** Users can delete tasks from the list individually.
- **Persistent Storage:** The application uses `localStorage` to save tasks, ensuring they remain even after the browser is closed and reopened.
- **Automatic Task Removal:** Tasks older than one day are automatically removed to keep the list relevant and up-to-date.
- **Responsive Design:** The application is designed to be responsive, making it accessible on different devices.

## Technologies Used

- **HTML:** Structure of the web page.
- **CSS:** Styling of the web page, including a gradient background and responsive design.
- **JavaScript:** Functionality of the application, including task management and interaction with `localStorage`.

## How It Works

1. **Adding a Task:**
   - Users can type a task into the input field and either press the "Enter" key or click the "Add" button to add the task to the list.

2. **Completing a Task:**
   - Each task has a checkbox. Checking the box will mark the task as completed, which is visually indicated by a strikethrough and a change in the background of the task.

3. **Deleting a Task:**
   - Users can delete individual tasks by clicking the "Delete" button next to each task.

4. **Clearing All Tasks:**
   - Users can clear all tasks from the list by clicking the "Clear" button.

5. **Persistent Storage:**
   - The tasks are stored in the browser's `localStorage`. When the page loads, the application checks `localStorage` for existing tasks and displays them.
   - Any task older than a day is automatically removed when the page is loaded.

## Preview
  Desktop preview: 
  
  ![Desktop preview](https://github.com/user-attachments/assets/2f68b51a-c560-4961-aa56-46c0551225da)
  
  Mobile preview:
  
  ![Phone preview](https://github.com/user-attachments/assets/3fd1bc25-dd6d-445b-be80-85ebc8ae6c6b)

## Installation

To run this project locally:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Deeperr0/todo-list-app.git
2. Navigate to the project directory:

   ```bash
   git clone https://github.com/Deeperr0/todo-list-app.git
3. Open the index.html file in your web browser:

## Usage
1. Add a Task: Enter the task in the input field and press "Enter" or click the "Add" button.
2. Mark as Completed: Click the checkbox next to the task.
3. Delete a Task: Click the "Delete" button next to the task.
4. Clear All Tasks: Click the "Clear" button to remove all tasks from the list
   
## Links
  [Live Site](https://listifyyy.netlify.app)
