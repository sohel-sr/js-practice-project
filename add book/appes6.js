// Book class
class Book {
  constructor(title, author, isbn){
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

// UI class
class UI {
  addBookToList(book){
    const list = document.getElementById('book-list');
    // Create tr element
    const row = document.createElement('tr');
      // Insert col
      row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href="#" class="delete"> X </a></td>
      `;

      list.appendChild(row);
  }

  showAlert(message, className){
    // Create div
    const div = document.createElement('div');
    // Add class
    div.className = `alert ${className}`;
    // Add text
    div.appendChild(document.createTextNode(message));
    //Get parent
    const container = document.querySelector('.container');
    const form = document.querySelector('#book-form');
    // Insert alert
    container.insertBefore(div, form);

    // Timeout after 2 sec
    setTimeout(function(){
      document.querySelector('.alert').remove();
    }, 2500);
  }

  deleteBook(target){
    if(target.className === 'delete'){
      target.parentElement.parentElement.remove();
    }
  }

  clearFields(){
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
  }
}

// Local storage class
class Store{
  static getBooks(){
    let books;
    if(localStorage.getItem('books') === null){
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem('books'));
    }

    return books;
  }

  static displayBooks(){
    const books = Store.getBooks();

    books.forEach(function(book){

      const ui = new UI();

      // Add book to ui
      ui.addBookToList(book);
    });
  }

  static addBooks(book){
    const books = Store.getBooks();

    books.push(book);

    localStorage.setItem('books', JSON.stringify(books));
  }

  static removeBook(isbn){

    const books = Store.getBooks();

    books.forEach(function(book, index){

    if(book.isbn === isbn){
      books.splice(index, 1);
    }
    });
    localStorage.setItem('books', JSON.stringify(books));
  }
}

// DOM event listener
document.addEventListener('DOMContentLoaded', Store.displayBooks);



// Event Listener for add book
document.getElementById('book-form').addEventListener('submit',
function(e){

// Get form values
const title = document.getElementById('title').value,
      author = document.getElementById('author').value,
      isbn = document.getElementById('isbn').value;

// Instantiate book
  const book = new Book(title, author, isbn);

  // Instantiate UI
  const ui = new UI();

  // Validate
  if(title === '' || author === '' || isbn === ''){
  // Error alert
  ui.showAlert('Please fill in all fields', 'error');
  } else{
    // Add book to list
    ui.addBookToList(book);

          // Add to local storage
          Store.addBooks(book);

    // Show success
    ui.showAlert('Book Added!', 'success');

    // Clear field
    ui.clearFields();
  }

e.preventDefault();
})

// Event LIstener for delete
document.getElementById('book-list').addEventListener('click', function(e){

    // Instantiate UI
    const ui = new UI();

    // Delete Book
    ui.deleteBook(e.target);

    // Remove from local Storage
    Store.removeBook(e.target.parentElement.previousElementSibling.textContent);

    // Show message
      ui.showAlert('Book Remove!', 'success');

  e.preventDefault();
});
