
var elDisplay = document.querySelector(".display");
var elResult =  document.querySelector(".result");
var elLi = document.createElement("li");

var books = [" english book", "  russian book"  , "  korean book"  , "  turkish book"  , "  nigerian book"  , "  arabic book"  , "  new zealand book"];

function longestBookName (arr) {
    var result = "";
    for(var i =0; i<arr.length; i++){
        var currentItem = arr[i];

        if(currentItem.length > result.length ){
            result =arr[i];
        }
    }
    return result;
   
}


elDisplay.appendChild(elLi);
elLi.value = books;
elLi.textContent = books;

elResult.textContent = longestBookName(books)+ " is the longest book name";

console.log(books);
console.log(longestBookName(books) + " is the longest book name");
