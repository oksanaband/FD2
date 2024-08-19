const students = [
    { name: 'Alice', age: 20, grades: [85, 90, 78] },
    { name: 'Bob', age: 22, grades: [70, 88, 95] },
    { name: 'Charlie', age: 23, grades: [92, 80, 85] },
    { name: 'David', age: 21, grades: [75, 85, 89] },
    { name: 'Eve', age: 20, grades: [90, 92, 88] }
];

// 1. Подсчитать средний возраст студентов.
function averageAge(students) {
    const totalAge = students.reduce((sum, student) => sum + student.age, 0);
    return totalAge / students.length;
}

// 2. Найти студента с наивысшей средней оценкой.
function bestStudent(students) {
    let maxAverage = 0;
    let topStudent = null;

    students.forEach(student => {
        const averageGrade = student.grades.reduce((sum, grade) => sum + grade, 0) / student.grades.length;
        if (averageGrade > maxAverage) {
            maxAverage = averageGrade;
            topStudent = student;
        }
    });

    return topStudent;
}

// 3. Создать список студентов, у которых средняя оценка выше определенного порога.
function studentsAboveAverage(students, threshold) {
    return students.filter(student => {
        const averageGrade = student.grades.reduce((sum, grade) => sum + grade, 0) / student.grades.length;
        return averageGrade > threshold;
    });
}

console.log("Средний возраст студентов:", averageAge(students)); // 21
console.log("Студент с наивысшей средней оценкой:", bestStudent(students)); // { name: 'Eve', age: 20, grades: [90, 92, 88] }
console.log("Студенты с средней оценкой выше 85:", studentsAboveAverage(students, 85)); // Список студентов


// Задача 2

const inventory = [
    { name: 'Laptop', category: 'Electronics', price: 1000, quantity: 5 },
    { name: 'Phone', category: 'Electronics', price: 500, quantity: 10 },
    { name: 'Shirt', category: 'Clothing', price: 30, quantity: 20 },
    { name: 'Pants', category: 'Clothing', price: 40, quantity: 15 },
    { name: 'Shoes', category: 'Footwear', price: 60, quantity: 8 }
];

// Функция для подсчета общей стоимости всех товаров в магазине
function calculateTotalValue(inventory) {
    return inventory.reduce((total, item) => total + (item.price * item.quantity), 0);
}

// Функция для нахождения товара с наибольшим количеством на складе
function findItemWithMaxQuantity(inventory) {
    return inventory.reduce((maxItem, item) => {
        return (maxItem.quantity > item.quantity) ? maxItem : item;
    });
}

// Функция для создания списка товаров определенной категории
function listItemsByCategory(inventory, category) {
    return inventory.filter(item => item.category === category);
}

// Примеры использования функций
const totalValue = calculateTotalValue(inventory);
console.log("Общая стоимость товаров:", totalValue);

const maxQuantityItem = findItemWithMaxQuantity(inventory);
console.log("Товар с наибольшим количеством на складе:", maxQuantityItem);

const clothingItems = listItemsByCategory(inventory, 'Clothing');
console.log("Товары категории 'Clothing':", clothingItems);


// Задача 3

const library = [
    { title: 'To Kill a Mockingbird', author: 'Harper Lee', genre: 'Fiction', year: 1960 },
    { title: '1984', author: 'George Orwell', genre: 'Dystopian', year: 1949 },
    { title: 'Moby Dick', author: 'Herman Melville', genre: 'Adventure', year: 1851 },
    { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', genre: 'Fiction', year: 1925 },
    { title: 'Brave New World', author: 'Aldous Huxley', genre: 'Dystopian', year: 1932 }
];

// Функция для нахождения всех книг определенного автора
function findBooksByAuthor(library, author) {
    return library.filter(book => book.author === author);
}

// Функция для нахождения всех книг, изданных после определенного года
function findBooksAfterYear(library, year) {
    return library.filter(book => book.year > year);
}

// Функция для создания списка всех жанров без повторений
function getUniqueGenres(library) {
    const genres = library.map(book => book.genre);
    return [...new Set(genres)];
}

const booksByAuthor = findBooksByAuthor(library, 'George Orwell');
console.log('Книги автора George Orwell:', booksByAuthor);

const booksAfterYear = findBooksAfterYear(library, 1950);
console.log('Книги, изданные после 1950 года:', booksAfterYear);

const uniqueGenres = getUniqueGenres(library);
console.log('Уникальные жанры:', uniqueGenres);


