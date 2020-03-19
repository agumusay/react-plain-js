# Plain React

Let's build a UI with only plain React.

For this exercise we will use: 

* [`React.createElement()`](https://reactjs.org/docs/react-api.html#createelement)
* [`React.render()`](https://reactjs.org/docs/react-dom.html#render)

![example](example.png)

Plan for action:

* we need to install the necessary dependencies: [`react`](https://www.npmjs.com/package/react) and [`react-dom`](https://www.npmjs.com/package/react-dom)
* once we have them installed, we will need to import them (as ESNext modules)
* we need a root element where you will render the elements. We add this root element inside the HTML
* let's create a headline (saying `My awesome contacts list`) and display it on the page
* let's make the word `awesome` highligthed. To do this, we need to wrap in a `span`

Extra

* let's display a list of contacts, to create random data we can use [`faker.js`](https://www.npmjs.com/package/faker)
* we need to create a `ul` and for each `li` we need to pass each contact's data

Extra vol.2

* now let's update the 1st name in the contacts list every 1 sec.
* go to the dev tools (the Elements tab), you can see the DOM is updating, but only the text within the node that is changing
