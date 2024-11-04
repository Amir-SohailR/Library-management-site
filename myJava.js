const formEl = document.querySelector ('form')

const lib = new Library()
formEl.addEventListener ("submit", (e) => {
  e.preventDefault()

  const bookTitle = document.getElementById("bookTitle").value.trim()
  const bookAuthor = document.getElementById('bookAuthor').value.trim()

  if (bookTitle && bookAuthor){
      const addedBook = new Book (bookTitle , bookAuthor)
      //Add Books to Library Class  
      lib.addBook(addedBook)
      renderLibrary ()
      // Remove the entered book information
    document.getElementById('bookTitle').value=''
    document.getElementById('bookAuthor').value=''
  }
})
//Strikethrough to noityfy it  as 'read'//
function markBookAsRead(index) {
    lib.getBooks()[index].markAsRead()
    renderLibrary()
  }
  //Remove the books from added book store//
  function removeBook(index) {
    lib.removeBook(index)
    renderLibrary()
  }

function renderLibrary() {
    const renderLibEl = document.querySelector("#renderedLibrary")

    //Adding - Books counts
    const bookCountEl = document.querySelector("#bookCount")
    bookCountEl.textdocument= lib.bookCount()

    //Resetting values
    renderLibEl.innerHTML =``
    lib.getBooks().forEach((book, index) => {
        renderLibEl.innerHTML += `
        <li class="p-3 bg-orange-100 rounded flex justify-between">
           <div class="${
             book.isRead() ? 'line-through' : ''
           }">${book.getTitle()} by ${book.getAuthor()}</div>
           <div>
             <button class="px-2 py-1 bg-green-600 text-sm rounded text-white" onclick="markBookAsRead(
                ${index}
             )">
               Mark as Read
             </button>
             <button class="px-2 py-1 bg-red-600 text-sm rounded text-white" onclick="removeBook(${index})">
               Remove
             </button>
           </div>
        </li>
      `
      })
    }
