let Books=[];

const title=document.getElementById("title");
const author=document.getElementById("author");
const pages=document.getElementById("pages");
const read=document.getElementById("read");

function showAllBooks() {
    let html="";
    Books.forEach((book,index)=>{
        html+=`
        <div class="book-card">
                <div>
                    <h3 class="card-title">"${book.title}"</h3>
                    <p class="card-author">${book.author}</p>
                    <p><strong>Page Count : </strong>${book.pages}</p>
                    <p><strong>Readed : </strong>${book.read?"Done":"Not Done"}</p>
                </div>
                <div>
                    <button class="card-read-btn" onclick="changeReadingStatus(${index})">${book.read?"Not Done":"Done"}</button>
                    <button class="card-remove-btn" onclick="removeBook(${index})">Remove</button>
                </div>
            </div>
        `
    })
    document.getElementById("libary-list").innerHTML=html;
}

function removeBook(index) {
    let farr=Books.slice(0,index);
    let larr=Books.slice(index+1,Books.length);
    Books=farr.concat(larr);
    alert("Your book remove successfully")
    showAllBooks();
}

function changeReadingStatus(index) {
    if (Books[index].read) {
        Books[index].read=false;
    }else{
        Books[index].read=true;
    }
    showAllBooks();    
}

function checkBookPresent(newBook) {
    let isPresent=false;
    Books.forEach(book=>{
        if (book.title === newBook.title) {
            isPresent=true;
        }
    })
    return isPresent;
}

function addBook(newBook) {
    let isPresent=checkBookPresent(newBook);
    if (!isPresent) {
        Books.push(newBook);
        return 200;
    }else{
        return 404;
    }
}


function createNewBook(event) {
    event.preventDefault();
    let newBook={
        title:event.target.title.value,
        author:event.target.author.value,
        pages:event.target.pages.value,
        read:event.target.read.checked
    }
    let status=addBook(newBook);
    if (status === 404) {
        alert(newBook.title+" already added in your libary please add a new book");
        title.value="";
        author.value="";
        pages.value="";
        read.checked=false;
    }else{
        alert("Your book "+newBook.title+" is added successfully now you can add a new book");
        title.value="";
        author.value="";
        pages.value="";
        read.checked=false;
    }
    showAllBooks();
    
}
