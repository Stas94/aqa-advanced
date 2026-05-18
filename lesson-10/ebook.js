import { Book } from "./book.js";

class EBook extends Book {
    constructor(name, author, year, formatFile) {
        super(name, author, year);
        this.formatFile = formatFile;
    }

    get formatFile() {
        return this._formatFile;
    }

    set formatFile(value) {
        if (!value.trim()) {
            throw new Error("Помилка: Формат файлу не вказаний!");
        }
        this._formatFile = value;
    }

    printInfo() {
        console.log(`Назва: ${this.name}, Автор: ${this.author}, Рік видання: ${this.year}, Формат файлу: ${this.formatFile}`);
    }

    static createFromBook(book, fileFormat) {
    return new EBook(
      book.name,
      book.author,
      book.year,
      fileFormat
    );
  }
}

const book1 = new Book("Кобзар", "Тарас Шевченко", 1540);
const book2 = new Book("Гаррі Поттер і філософський камінь", "Дж. К. Ролінґ", 1997);
const book3 = new Book("1984", "Джордж Оруэлл", 1949);
const ebook1 = new EBook("Кобзар", "Тарас Шевченко", 1840, "PDF");
const ebook2 = new EBook("Гаррі Поттер і філософський камінь", "Дж. К. Ролінґ", 1987, "EPUB");
const ebook3 = new EBook("1984", "Джордж Оруэлл", 1949, "MOBI");
ebook1.printInfo();
ebook2.printInfo();
ebook3.printInfo();

const allBooks = [book1, book2, book3, ebook1, ebook2, ebook3];

const oldestBook = Book.getOldestBook(allBooks);
console.log(`Найстаріша книга: ${oldestBook.name}, Автор: ${oldestBook.author}, Рік видання: ${oldestBook.year}`);

const convertedBook = EBook.createFromBook(book1, "PDF");
convertedBook.printInfo();