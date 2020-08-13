## React Base Syntax Practice
This assignment that is part of the course ["React - The Complete Guide"](https://www.udemy.com/course/react-the-complete-guide-incl-redux/) on Udemy.

The requirements are as follows:

    - Create TWO new components: UserInput and UserOutput
    - UserInput should hold an input element, UserOutput two paragraphs
    - Output multiple UserOutput components in the App component (any paragraph texts of your choice)
    - Pass a username (of your choice) to UserOutput via props and display it there
    - Add state to the App component (=> the username) and pass the username to the UserOutput component
    - Add a method to manipulate the state (=> an event-handler method)
    - Pass the event-handler method reference to the UserInput component and bind it to the input-change event
    - Ensure that the new input entered by the user overwrites the old username passed to UserOutput
    - Add two-way-binding to your input (in UserInput) to also display the starting username
    - Add styling of your choice to your components/ elements in the components - both with inline styles and stylesheets


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.