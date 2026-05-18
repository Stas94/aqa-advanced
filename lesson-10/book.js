export class Book {
    constructor(name, author, year) {
        this.name = name;
        this.author = author;
        this.year = year;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        if (!value.trim()) {
            throw new Error("Помилка: Назва не може бути порожньою!");
        }
        this._name = value;
    }

    get author() {
        return this._author;
    }

    set author(value) {
        if (!value.trim()) {
            throw new Error("Помилка: Автор книги не може бути порожнім!");
        }
        this._author = value;
    }

    get year() {
        return this._year;
    }

    set year(value) {
        if (value < 0) {
            throw new Error("Помилка: Некоректний рік!");
        }
        this._year = value;
    }

    printInfo() {
        console.log(`Назва: ${this.name}, Автор: ${this.author}, Рік видання: ${this.year}`);
    }

    static getOldestBook(booksArray) {
        return booksArray.reduce((oldest, current) => {
            return current.year < oldest.year ? current : oldest;
        });
    }
}

const book1 = new Book("Кобзар", "Тарас Шевченко", 1840);
const book2 = new Book("Гаррі Поттер і філософський камінь", "Дж. К. Ролінґ", 1997);
const book3 = new Book("1984", "Джордж Оруэлл", 1949);
book1.printInfo();
book2.printInfo();
book3.printInfo();