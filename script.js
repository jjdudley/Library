let booksInLibrary = 0;
const myLibrary = [];

function Book (title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
};

function addBookToLibrary(newbook) {
    myLibrary.push(newbook);
};

function render() {
    for(let i = booksInLibrary; i < myLibrary.length; i++) {
        let newCard = document.createElement('h1');
        newCard.classList = 'newcard';
        newCard.innerText = `${myLibrary[i].title} by ${myLibrary[i].author}, ${myLibrary[i].pages}, ${myLibrary[i].read}`;
        document.body.appendChild(newCard);
    };
};

let newbook1 = new Book('The Hobbit', 'J.R.R. Tolkein', '255', 'not read yet');
let newbook2 = new Book('Hatchet', 'Gary Paulson', 'Ha', 'Whatever');

addBookToLibrary(newbook1);
addBookToLibrary(newbook2);

render();

document.getElementById('add-book').addEventListener('click', function() {
    document.querySelector('.bg-modal').style.display = 'flex';
});

document.querySelector('.close').addEventListener('click', function() {
    document.querySelector('.bg-modal').style.display = 'none';
});

const newBookForm = document.forms['new-book-form'];
newBookForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const titleValue = newBookForm.querySelector('[data-title]').value;
    const authorValue = newBookForm.querySelector('[data-author]').value;
    const pagesValue = newBookForm.querySelector('[data-pages]').value;
    const readValue = newBookForm.querySelector('[data-read]').value;
    document.querySelector('.bg-modal').style.display = 'none';
    
    let freshbook = new Book(titleValue, authorValue, pagesValue, readValue);
    addBookToLibrary(freshbook);

    if(myLibrary.length === 3) {
        booksInLibrary = 2;
        render();
    } else {
    booksInLibrary++;
    render();
    };
});

/* let newTitle = document.createElement('h1');
        newTitle.innerText = this.title;
        let newAuthor = document.createElement('h1');
        newAuthor.innerText = this.author;
        let newPages = document.createElement('h1');
        newPages.innerText = this.pages;
        let newstatus = document.createElement('h1');
        newstatus.innerText = this.status;
*/