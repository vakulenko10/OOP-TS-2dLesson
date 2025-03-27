class Book {
    constructor(public title: string, public author: string, public isAvailable: boolean = true) {}

    borrowBook(): void {
        if (this.isAvailable) {
            this.isAvailable = false;
            console.log(`${this.title} has been borrowed.`);
        } else {
            console.log(`${this.title} is not available.`);
        }
    }

    returnBook(): void {
        this.isAvailable = true;
        console.log(`${this.title} has been returned.`);
    }
}

class Library {
    private books: Book[] = [];

    addBook(book: Book): void {
        this.books.push(book);
    }

    displayAvailableBooks(): void {
        console.log("Available books:");
        this.books.filter(book => book.isAvailable).forEach(book => console.log(book.title));
    }
}

class BankAccount {
    private transactions: string[] = [];

    constructor(public accountNumber: string, public balance: number = 0) {}

    deposit(amount: number): void {
        this.balance += amount;
        this.transactions.push(`Deposited: ${amount}`);
    }

    withdraw(amount: number): void {
        if (amount <= this.balance) {
            this.balance -= amount;
            this.transactions.push(`Withdrawn: ${amount}`);
        } else {
            console.log("Insufficient funds.");
        }
    }

    printTransactionHistory(): void {
        console.log("Transaction History:");
        this.transactions.forEach(transaction => console.log(transaction));
    }
}

class Movie {
    constructor(public title: string, public duration: number) {}
}

class Cinema {
    private movies: Movie[] = [];

    addMovie(movie: Movie): void {
        this.movies.push(movie);
    }

    findLongestMovie(): Movie | null {
        if (this.movies.length === 0) return null;
        return this.movies.reduce((longest, movie) => movie.duration > longest.duration ? movie : longest);
    }
}

class Product {
    constructor(public name: string, public price: number) {}
}

class Order {
    private products: Product[] = [];

    addProduct(product: Product): void {
        this.products.push(product);
    }

    getTotalPrice(): number {
        return this.products.reduce((total, product) => total + product.price, 0);
    }
}

class Task {
    constructor(public description: string, public completed: boolean = false) {}
}

class ToDoList {
    private tasks: Task[] = [];

    addTask(task: Task): void {
        this.tasks.push(task);
    }

    completeTask(index: number): void {
        if (index >= 0 && index < this.tasks.length) {
            this.tasks[index].completed = true;
        } else {
            console.log("Invalid task index.");
        }
    }

    displayTasks(): void {
        this.tasks.forEach((task, index) => console.log(`${index + 1}. ${task.description} - ${task.completed ? 'Completed' : 'Not Completed'}`));
    }
}


const library = new Library();
library.addBook(new Book("The Hobbit", "J.R.R. Tolkien"));
library.addBook(new Book("1984", "George Orwell"));
library.displayAvailableBooks();

const account = new BankAccount("12345678");
account.deposit(500);
account.withdraw(200);
account.printTransactionHistory();

const cinema = new Cinema();
cinema.addMovie(new Movie("Interstellar", 169));
cinema.addMovie(new Movie("Inception", 148));
console.log("Longest movie:", cinema.findLongestMovie()?.title);

const order = new Order();
order.addProduct(new Product("Laptop", 1200));
order.addProduct(new Product("Mouse", 50));
console.log("Total price:", order.getTotalPrice());

const todoList = new ToDoList();
todoList.addTask(new Task("Buy groceries"));
todoList.addTask(new Task("Do laundry"));
todoList.completeTask(0);
todoList.displayTasks();
