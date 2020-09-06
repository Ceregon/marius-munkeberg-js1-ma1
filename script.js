// question 1

const cat = {
  complain: function() {console.log("Meow!")}
};

// question 2

const heading = document.querySelector("h3");

heading.innerHTML = "Updated heading";

// question 3

heading.style.fontSize = "2em";

// question 4

heading.className = "subheading";

// question 5

const paragraphs = document.querySelectorAll("p");

for (let i = 0; i < paragraphs.length; i++) {
  paragraphs[i].style.color = "red"
};

// question 6

const resultsContainer = document.querySelector("div.results");

resultsContainer.innerHTML = "<p>New paragraph</p>";
resultsContainer.style.backgroundColor = "yellow";

// question 7

const cats = [
    {
        name: "Blob",
        age: 10
    },
    {
        name: "Harold",
    },
    {
        name: "Blurt",
        age: 21
    }
];

function catNames(list) {
  for (let i = 0; i < list.length; i++) {
    console.log(list[i].name)
  }
};

catNames(cats);

// question 8

function createCats(cats) {

  let html = "";

  for (let i = 0; i < cats.length; i++) {

    if (cats[i].age === undefined) {
      cats[i].age = "Age unknown";
    }
    html += `<div>
              <h5>${cats[i].name}</h5>
              <p>${cats[i].age}</p>
              </div>`;
  }
  return html;
};

const newHtml = createCats(cats);

console.log(newHtml);

const container = document.querySelector(".cat-container");

container.innerHTML = newHtml;
