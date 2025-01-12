//your JS code here. If required.
const submitBtn = document.getElementById("submit");

var bookList = document.getElementById("book-list");



submitBtn.addEventListener("click" , newRow);

function newRow() {
    var title = document.getElementById("title").value.trim();
    var author = document.getElementById("author").value.trim();
    var isbn = document.getElementById("isbn").value.trim();

    const row = document.createElement("tr");
     row.innerHTML = `
    <td>${title}<td>
    <td>${author}<td>
    <td>${isbn}<td>
    <td><button type="submit" class="delete">Delete</button>`;

    bookList.appendChild(row);
    clear();

    //remove data from table
    var removeBtn = row.querySelector(".delete");

    removeBtn.addEventListener("click" , () => {
        bookList.removeChild(row);
    })
}

function clear(){
    document.getElementById("title").value = "";
    document.getElementById("author").value = "";
    document.getElementById("isbn").value = "";
}

