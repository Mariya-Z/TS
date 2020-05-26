import { Category } from './enums';
import { PersonBook, BookRequiredFields, UpdatedBook, СreateCustomerFunctionType } from './types';
import { ReferenceItem, RefBook, UniversityLibrarian, Shelf } from './classes';
import { Logger, Book, Magazine } from './intefaces';
import { purge, createCustomer } from './functions';

showHello('greeting', 'TypeScript');

function showHello(divName: string, name: string) {
  const elt = document.getElementById(divName);
  elt.innerText = `Hello from ${name}`;
}

// ========================================================================




// ========================================================================

// Task 02.01
// logFirstAvailable(getAllBooks());

// const jsBooks = getBookTitlesByCategory(Category.JavaScript);
// logBookTitles(jsBooks);

// const result = getBookAuthorByIndex(1);
// console.log(result);

// console.log(calcTotalPages());

// Task 03.01
// const jsBooks = getBookTitlesByCategory(Category.JavaScript);
// jsBooks.forEach((title: string) => console.log(title));

// console.log(getBookByID(1));

// Task 03.02
// let myID: string = createCustomerID('Ann', 10);
// console.log(myID);

// let idGenerator: (name:string, id: number) => string = 
//     (name:string, id: number) => `${id}-${name}`;
// idGenerator = createCustomerID;
// myID = idGenerator('Boris', 20);
// console.log(myID);

// Task 03.03
// createCustomer('Ann');
// createCustomer('Ann', 30);
// createCustomer('Ann', 30, 'Kyiv');

// console.log(getBookTitlesByCategory(Category.JavaScript));
// logFirstAvailable();
// const myBooks = сheckoutBooks('Ann', 1, 2, 4);
// console.log(myBooks);

// Task 03.04
// const checkedOutBooks: string[] = getTitles(false);
// console.log(checkedOutBooks);

// Task 03.05
// console.log(bookTitleTransform('Title'));
// console.log(bookTitleTransform(100));

// Task 04.01
// const myBook: Book = {
//   id: 5,
//   title: 'Colors, Backgrounds, and Gradients',
//   author: 'Eric A. Meyer',
//   available: true,
//   category: Category.CSS,
//   pages: 200,
//   markDamaged: (reason) => console.log(`Damaged: ${reason}`)
// };
// printBook(myBook);
// myBook.markDamaged('missing back cover');

// Task 04.02
// let logDamage: Logger;
// logDamage = (reason) => console.log(`Damaged: ${reason}`);
// logDamage('missing back cover');

// Task 04.03
// const favoriteAuthor: Authot = {
//   name: 'Anna',
//   email: 'ann@gmail.com',
//   numBooksPublished: 5
// }

// const favoriteLibrarian: Librarian = {
//   name: 'Anna',
//   email: 'ann@gmail.com',
//   department: 'Classical LiterATURE',
//   assistCustomer: (custName: string) => console.log(`Customer: ${custName}`)
// }

// Task 04.04
// const offer: any = {
//   book: {
//     title: 'Essential TypeScript'
//   }
// };

// console.log(offer.magazine?.title);
  
// Task 04.05
// console.log(getBookProp(getAllBooks()[0], 'title'));
// console.log(getBookProp(getAllBooks()[0], 'markDamaged'));
// console.log(getBookProp(getAllBooks()[0], 'isbn'));

// Task 05.01
// const ref: ReferenceItem = new ReferenceItem('Updates', 2020);
// console.log(ref);
// ref.printItem();
// ref.publisher = 'anna';
// console.log(ref.publisher);

// Task 05.02, 06.03
// const refBook: Encyclopedia = new Encyclopedia('Title', 2020,3);
// const refBook: RefBook = new RefBook('Title', 2020,3);
// console.log(refBook);
// refBook.printItem();

// Task 05.03
// const refBook: Encyclopedia = new Encyclopedia('Title', 2020,3);
// console.log(refBook);
// refBook.printCitation();

// Task 05.04
// const favoriteLibrarian: Librarian = new UniversityLibrarian();
// favoriteLibrarian.name = 'Ann';
// favoriteLibrarian.assistCustomer('Tom');

// Task 05.05
// const personBook: PersonBook = {
//   id: 1,
//   author: 'Author',
//   name: 'Ann',
//   available: false,
//   email: 'ann@mail.com',
//   category: Category.Angular,
//   title: 'Title',
//   markDamaged: null,
//   pages: null
// };
// console.log(personBook);

// Task 06.05
// const flag = false;
// if (flag) {
//   import ('./classes').then(module => {
//     const reader = new module.Reader();
//     reader.name = 'Ann';
//     console.log(reader);
//   });
// }

// Task 07.01
// const inventory: Array<Book> = [
//   { id: 10, title: 'The C Programming Language', author: 'K & R', available: true, category: Category.Software },
//   { id: 11, title: 'Code Complete', author: 'Steve McConnell', available: true, category: Category.Software },
//   { id: 12, title: '8-Bit Graphics with Cobol', author: 'A. B.', available: true, category: Category.Software },
//   { id: 13, title: 'Cool autoexec.bat Scripts!', author: 'C. D.', available: true, category: Category.Software }
// ];
// const result = purge(inventory);
// console.log(result);

// const result2 = purge([1, 2, 3, 4]);
// console.log(result2);

// Task 07.02
// const bookShelf: Shelf<Book> = new Shelf<Book>();
// inventory.forEach(book => bookShelf.add(book));
// const firstBook: Book = bookShelf.getFirst();
// console.log(firstBook);

// const magazines: Magazine[] =  [
//   { title: 'Programming Language Monthly', publisher: 'Code Mags' },
//   { title: 'Literary Fiction Quarterly', publisher: 'College Press' },
//   { title: 'Five Points', publisher: 'GSU' }
// ];
// const magazineShelf: Shelf<Magazine> = new Shelf();
// magazines.forEach(m => magazineShelf.add(m));
// const firstMag = magazineShelf.getFirst();
// console.log(firstMag);

// Task 07.03
// magazineShelf.printTitles();
// const mag = magazineShelf.find('Five Points');
// console.log(mag);

// Task 07.04
// const book: BookRequiredFields = {
//   id: 1,
//   title: 'Unknown',
//   author: 'Ann',
//   available: false,
//   category: Category.Angular,
//   pages: 100,
//   markDamaged: null
// };
// const updBook: UpdatedBook = {
//   id: 10
// };

const params: Parameters<СreateCustomerFunctionType> = ['Ann'];
createCustomer(...params);