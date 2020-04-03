let booksInLibrary = 0;
const myLibrary = [];
let readButtonOn = true;
let newCardOn = true;

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
        const libraryTable = document.getElementById('library-table');
        let newRow = libraryTable.insertRow(libraryTable.length);
        let titleCell = newRow.insertCell(0);
        titleCell.classList = 'title-cell';
        titleCell.innerText = `${myLibrary[i].title}`;

        let authorCell = newRow.insertCell(1);
        authorCell.classList = 'author-cell';
        authorCell.innerText = `${myLibrary[i].author}`;

        let pagesCell = newRow.insertCell(2);
        pagesCell.classList = 'pages-cell';
        pagesCell.innerText = `${myLibrary[i].pages}`;

        let statusCell = newRow.insertCell(3);
        statusCell.classList = 'status-cell';

        let deleteCell = newRow.insertCell(4);
        deleteCell.classList = 'delete-cell';

        let readButton = document.createElement('button');
        readButton.innerText = `${myLibrary[i].read}`;
        if (readButton.innerText === 'Read') {
            readButtonOn = true;
            readButton.classList = 'read-button-on';
        } else if (readButton.innerText === 'Not read yet') {
            readButtonOn = false;
            readButton.classList = 'read-button-off';
        }
        readButton.addEventListener('click', () => {
            if (readButtonOn) {
                readButton.classList.remove('read-button-on')
                readButton.classList = 'read-button-off';
                readButton.innerText = 'Not read yet';
                readButtonOn = false;
            } else if (!readButtonOn){
                readButton.classList.remove('read-button-off');
                readButton.classList = 'read-button-on';
                readButton.innerText = 'Read';
                readButtonOn = true;
            }
        });

        let removeButton = document.createElement('button');
        removeButton.classList = 'remove-button';
        removeButton.innerText = '+';
        removeButton.addEventListener('click', () => {
             titleCell.style.display = 'none';
             authorCell.style.display = 'none';
             pagesCell.style.display = 'none';
             statusCell.style.display = 'none';
             deleteCell.style.display = 'none';
        });

        statusCell.appendChild(readButton);
        deleteCell.appendChild(removeButton);
    };
};

let newbook1 = new Book('The Hobbit', 'J.R.R. Tolkien', '255', 'Read');
let newbook2 = new Book('Tender Is The Night', 'F. Scott Fitzgerald', '346', 'Not read yet');

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
    const readValue = document.getElementById('read').value;
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
