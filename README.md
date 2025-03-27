# Library and Bank Management System

## Overview

This project contains multiple classes and functionalities that simulate real-world systems such as a library, a bank account, a cinema, an order system, and a to-do list. The code demonstrates object-oriented programming concepts such as classes, methods, and object manipulation in TypeScript.

## How to Run the Project

1. **Clone the repository** to your local machine:

    ```bash
    git clone https://github.com/yourusername/your-repo-name.git
    cd your-repo-name
    ```

2. **Install dependencies** using npm:

    ```bash
    npm install
    ```

3. **Start the project**:

    ```bash
    npm start
    ```

    This will execute the TypeScript code and run it in the terminal/console. You should see the output from the various functionalities like book borrowing, account transactions, movie listings, etc.

## Description of the Code

### 1. **Book and Library System**

The `Book` and `Library` classes simulate a basic library system.

- `Book` class has properties such as `title`, `author`, and `isAvailable`. The `borrowBook()` and `returnBook()` methods allow for borrowing and returning books. The `isAvailable` property is updated accordingly.

- `Library` class holds an array of books and provides methods to `addBook()` a new book to the collection and `displayAvailableBooks()` to list out all books that are currently available.

#### Example Output:

```
Available books:
The Hobbit
1984
```


### 2. **Bank Account System**

The `BankAccount` class simulates basic bank operations such as deposit, withdrawal, and transaction history tracking.

- The `deposit()` and `withdraw()` methods allow adding and subtracting amounts from the account balance.
- The `printTransactionHistory()` method displays all the transactions that have taken place on the account.

#### Example Output:

```
Transaction History:
Deposited: 500
Withdrawn: 200
```


### 3. **Cinema System**

The `Movie` and `Cinema` classes represent a cinema system where you can store movies and find the longest movie.

- The `Movie` class contains properties such as `title` and `duration`.
- The `Cinema` class has an array of movies and provides methods to `addMovie()` a new movie and `findLongestMovie()` to find the movie with the longest duration.

#### Example Output:
```
Longest movie: Interstellar
```


### 4. **Order System**

The `Product` and `Order` classes simulate an online shopping order system.

- The `Product` class holds a product name and price.
- The `Order` class allows adding multiple products to an order, and the `getTotalPrice()` method calculates the total cost of all the products in the order.

#### Example Output:

```
Total price: 1250
```


### 5. **To-Do List System**

The `Task` and `ToDoList` classes create a simple to-do list system.

- The `Task` class has a description and a `completed` status.
- The `ToDoList` class lets you add tasks, mark tasks as completed using `completeTask()`, and display all tasks with their status using `displayTasks()`.

#### Example Output:
```
1. Buy groceries - Completed
2. Do laundry - Not Completed
```





