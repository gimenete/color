# Color

## Software requirements

* Node.js. Tested with v8.9.1
* Yarn. Tested with 1.3.2
* Google Chrome for e2e testing. Tested with 65.0.3325.181

## Installing

* Clone the repo
* Run `yarn` in the cloned folder

## Running

Run `yarn start` to run the local dev server. It will automatically open the web application in your default browser.

## Technical stack and implementation details

The app is implemented using React and it's based on [Create React App](https://github.com/facebook/create-react-app).

State management is made through regular component props and callback functions. Using something like Redux and Mobx seemed overkill for the scope of this project.

Styling is made using plain CSS. It's been kept very basic. If the project growed CSS modules could be used, and/or CSS preprocessors like SASS or LESS, but it seemed not necessary for a project of this size.

Functional components have been used when no state was needed in that particular component.

Non-standard JavaScript has been used for event handlers, such as:

```javascript
handleClick = () => {
  this.props.onOptionSelected(this.props.option)
}

render() {
  // ...
  <a onClick={this.handleClick}>...</a>
}
```

In order to avoid:

* Defining inline functions, which creates new instances of those functions every time the render method is run.
* Having to bind the method in the constructor

This style of defining methods that can be invoked as standalone functions with the object already binded is possible thanks to a [Babel transform applied](https://babeljs.io/docs/plugins/transform-class-properties/).

## Tests

Unit tests can be run with `yarn test`

E2E tests can be run with `yarn run e2e`
