import { Book } from './intefaces';
import { Category } from './enums';
import { BookOrUndefined, BookProperties } from './types';

export function getAllBooks(): ReadonlyArray<Book> {
    const books: readonly Book[] =	<const>[
        { id: 1, title: 'Refactoring JavaScript', category: Category.JavaScript, author: 'Evan Burchard', available: true},
        { id: 2, title: 'JavaScript Testing', category: Category.JavaScript, author: 'Liang Yuxian Eugene', available: false },
        { id: 3, title: 'CSS Secrets', category: Category.CSS, author: 'Lea Verou', available: true },
        { id: 4, title: 'Mastering JavaScript Object-Oriented Programming', category: Category.JavaScript, author: 'Andrea Chiarelli', available: true }
    ];
    return books;
}

export function logFirstAvailable(books: readonly any[] = getAllBooks()): void {
    const numberOfBooks = books.length;
    let title = '';

    for (const book of books) {
        if (book.available) {
        title = book.title;
        break;
        }
    }
    console.log(`Total numer of books: ${numberOfBooks}`);
    console.log(`First avaliable book: ${title}`);
}

export function getBookTitlesByCategory(category: Category = Category.JavaScript): string[] {
    const books = getAllBooks();
    const titles: string[] = [];

    for (const book of books) {
        if (book.category === category) {
        titles.push(book.title);
        }
    }

    return titles;
}

export function logBookTitles(titles: string[]): void {
    titles.forEach(title => console.log(title));
}

export function getBookAuthorByIndex(index: number): [string, string] {
    const books = getAllBooks();
    const {title, author} = books[index];
    return [title, author];
}

export function calcTotalPages(): bigint {
    const data = <const>[
        { lib: 'libName1', books: 1_000_000_000, avgPagesPerBook: 250 },
        { lib: 'libName2', books: 5_000_000_000, avgPagesPerBook: 300 },
        { lib: 'libName3', books: 3_000_000_000, avgPagesPerBook: 280 }
    ];
    const result = data.reduce((acc: bigint, obj) => {
        return acc + BigInt(obj.books) * BigInt(obj.avgPagesPerBook)
    }, BigInt(0));

    return result;
}

export function getBookByID(id: number): BookOrUndefined {
    const books = getAllBooks();
    return books.find(book => book.id === id);
}

export function createCustomerID(name: string, id: number): string {
    return `${id}-${name}`;
}

export function createCustomer(name: string, age?: number, city?: string): void {
    console.log(`Customer name: ${name}`);

    if (age) {
        console.log(`Customer age: ${age}`);
    }

    if (city) {
        console.log(`Customer city: ${city}`);
    }
}

export function сheckoutBooks(customer: string,	...bookIDs: number[]): string[] {
    console.log(`Customer: ${customer}`);

    const titles: string[] = [];
    for (const id of bookIDs) {
        const book: any = getBookByID(id);
        if (book && book.available) {
        titles.push(book.title);
        }
    }

    return titles;
}

export function getTitles(author: string): string[];
export function getTitles(available: boolean): string[];
export function getTitles(id: number, available: boolean): string[];
export function getTitles(...args: any[]): string[] {
    const books = getAllBooks();

    if (args.length === 1) {
        const [arg] = args;
        if (typeof arg === 'string') {
        return books.filter(book => book.author === arg).map(book => book.title)
        } 
        else if (typeof arg === 'boolean') {
        return books.filter(book => book.available === arg).map(book => book.title)
        }
    }
    else if (args.length === 2) {
        const [id, available] = args;
        if (typeof id === 'number' && typeof available === 'boolean') {
        return books.filter(book => book.available === available && book.id === id)
        .map(book => book.title);
        }
    }
}

export function assertStringValue(val: any): asserts val is string {
    if (typeof val !== 'string') {
        throw new Error('value should have been a string');
    }
}

export function bookTitleTransform(title: any) {
    assertStringValue(title)
    return [...title].reverse().join();
}

export function printBook(book: Book): void {
    console.log(`${book.title} by ${book.author}`);
}

export function getBookProp(book: Book, prop: BookProperties): any {
    if (typeof book[prop] === 'function') {
        return book[prop][name];
        // return (book[prop] as export function).name;
    }
    return book[prop];
}

export function purge<T>(inventory: Array<T>): Array<T> {
    return inventory.slice(2);
}