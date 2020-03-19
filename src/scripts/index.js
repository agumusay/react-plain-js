// The following line makes sure your styles are included in the project. Don't remove this.
import "../styles/main.scss";
import "regenerator-runtime/runtime";
import React from "react";
import ReactDom from "react-dom";
import Faker from "faker";
// Import any additional modules you want to include below \/

// \/ All of your javascript should go here \/

let listCount = 4;
let listItems = [];

while (listCount) {
  let randomName = Faker.name.findName();
  let randomEmail = Faker.internet.email();
  let randomPhone = Faker.phone.phoneNumber();
  let listItem = React.createElement("li", {}, randomName, React.createElement("a", {}, randomPhone), React.createElement("a", {}, randomEmail));
  listItems.push(listItem);
  listCount--;
}

let listContainer = React.createElement("ul", {}, React.createElement("h1", {}, "My ", React.createElement("span", { className: "highLight" }, "awesome "), "contacts list"), listItems);

ReactDom.render(listContainer, document.querySelector(".container"));
