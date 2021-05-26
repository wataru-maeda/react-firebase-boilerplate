<img src='https://github.com/WataruMaeda/react-firebase-boilerplate/blob/master/__DELELE_ME__/logo.png' width='40'>

# React Firebase Boilerplate

- [Live Preview](https://react-firebase-boilerpla-ce757.web.app/)

<img src='https://github.com/WataruMaeda/react-firebase-boilerplate/blob/master/__DELELE_ME__/ss1.jpg' width='48%'> <img src='https://github.com/WataruMaeda/react-firebase-boilerplate/blob/master/__DELELE_ME__/ss2.jpg' width='48%'> <img src='https://github.com/WataruMaeda/react-firebase-boilerplate/blob/master/__DELELE_ME__/ss3.jpg' width='48%'> <img src='https://github.com/WataruMaeda/react-firebase-boilerplate/blob/master/__DELELE_ME__/ss4.jpg' width='48%'>

## About

We spend a large amount of time to setup a project; changing file structure, installing libraries, create reusable components and so on. The purpose of using the project is to minimize the redundant effort to setup a project from scratch. In the boilerplate, it contains only commonly-used libraries and the all setup done for you.

## File structure

src
├── **stories** # UI components for testing and documentation
├── **tests** # Jest unit tests
├── assets # images, fonts, icons...
├── components # UI components
├── pages # all pages
│ ├── auth # login, signup, reset password page
│ ├── dashboard # dashboard page
│ ├── routes # navigation, tabbar, sidemenu
├── slices # redux reducer and actions
├── theme # all scss files includes variables, mixin
├── utils

## Libraries

`Database/hosting/authentication`

- [firebase](https://firebase.google.com/)

`Style`

- [bootstrap](https://react-bootstrap.github.io/)
- [css-module](https://github.com/css-modules/css-modules)
- [node-sass](https://github.com/sass/node-sass)

`Assets`

- [fortawesome](https://github.com/FortAwesome/react-fontawesome)

`SEO`

- [react-helmet](https://github.com/nfl/react-helmet)

`Navigation`

- [react-router-dom](https://github.com/ReactTraining/react-router/tree/master/packages/react-router-dom)

`UI Components`

- [reactstrap](https://github.com/reactstrap/reactstrap)
- [react-select](https://github.com/JedWatson/react-select)
- [react-spinners](https://github.com/davidhu2000/react-spinners)

`Store`

- [redux](https://github.com/reduxjs/redux)
- [redux-logger](https://github.com/LogRocket/redux-logger)

`Test`

- [jest](https://github.com/facebook/jest)
- [storybook](https://github.com/storybookjs/storybook)

`Dev`

- [eslint](https://github.com/eslint/eslint)
- [prettier](https://github.com/prettier/prettier)
- [jest](https://jestjs.io/)
- [husky](https://github.com/typicode/husky)

## How to use

#### Step-1. Setup Firebase App

1. Create firebase web app from [firebase console](https://console.firebase.google.com/u/0/)
2. Enable **Authentication** and turn on "Email/Password" option
3. Enable **Storage** and update Rules

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if false;
    }

    match /users/{userId} {
   		allow read, write : if request.auth.uid == userId;
		}
  }
}
```

4. Enable **Hosting**

#### Step-2. Install firebase tools

1. Global install firebase tools (Skip if you done the step)

```
$  npm install -g firebase-tools
```

2. Login to your firebase account (Skip if you done the step)

```
$ firebase login
```

#### Step-3. Setup the Boilerplate Project

1. Click "Use Template" to start or download the boilerplate from **Download Zip** button
2. Open the project in the editor
3. Go to [firebase console](https://console.firebase.google.com/u/0/) again. Copy all API keys from (gear icon) -> Project Settings. Then paste in [firebase.js](https://github.com/WataruMaeda/react-firebase-boilerplate/blob/master/src/utils/firebase.js#L9-L15)
4. Replace project name with yours in [.firebaserc](https://github.com/WataruMaeda/react-firebase-boilerplate/blob/master/.firebaserc#L3)
5. Install packages with command: `yarn install` or `npm install`
6. Start project with command: `yarn start` or `npm start`

## Commands

#### Build storybook

```
$ yarn storybook
- or -
$ npm run storybook
```

#### Run Unit Test

```
$ yarn test
- or -
$ npm run test
```

#### Run Lint

```
$ yarn lint
- or -
$ npm run lint
```

#### Format Code

```
$ yarn format
- or -
$ npm run format
```

#### Analyze Bundle Size

```
$ yarn analyze
- or -
$ npm run analyze
```

#### Run Local Build Test

```
$ yarn build && firebase serve
- or -
$ npm build && firebase serve
```

#### Deploy Live

```
$ yarn build && firebase deploy --only hosting
- or -
$ npm build && firebase deploy --only hosting
```

## Licence

This project is available under the MIT license. See the [LICENSE](https://github.com/WataruMaeda/react-native-boilerplate/blob/master/LICENSE) file for more info.
