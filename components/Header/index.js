// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

const entryHeader = document.querySelector(".header-container");

function Header() {
  
  const 
   header = document.createElement("div"),
   date = document.createElement("span"),
   title = document.createElement("h1"),
   temp = document.createElement("span");

  // classes

  header.classList.add("header");
  date.classList.add("date");
  temp.classList.add("temp");

  // text content
  date.textContent = "SMARCH 28, 2019";
  title.textContent = "Lambda Times";
  temp.textContent = "98^";

  //apend
  header.appendChild(date);
  header.appendChild(title);
  header.appendChild(temp);

  return entryHeader.appendChild(header);
}

Header();


