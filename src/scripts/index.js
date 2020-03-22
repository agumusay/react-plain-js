import "../styles/main.scss";
import "regenerator-runtime/runtime";
import React from "react";
import ReactDom from "react-dom";
import Faker from "faker";

//Counter and empty array
let listCount = 4;
let listItems = [];
//Loop how many list items you want to create

while (listCount) {
  //Create Random information with Faker
  let randomName = Faker.name.findName();
  let randomEmail = Faker.internet.email();
  let randomPhone = Faker.phone.phoneNumber();
  //Create a list elelement on every iteration
  let listItem = React.createElement(
    "li",
    {key:listCount},
    React.createElement("h4", {}, randomName),
    React.createElement("a", {}, randomPhone),
    React.createElement("a", {}, randomEmail)
  );
  listItems.push(listItem);
  listCount--;
}
//Create ul element add a header and span inside, and finally listItems array
let listContainer = React.createElement(
  "ul",
  {},
  React.createElement(
    "h1",
    {},
    "My ",
    React.createElement("span", { className: "highLight" }, "awesome "),
    "contacts list"
  ),
  listItems
);
//append the Ul element inside the container
ReactDom.render(listContainer, document.querySelector(".container"));
setInterval(() => {
  document.querySelector("li h4").innerText = Faker.name.findName();
}, 1000);
