
<img src='https://github.com/WataruMaeda/react-firebase-boilerplate/blob/master/readme.assets/banner.svg' width='400'>

+ [Live Preview](https://react-firebase-boilerpla-414c0.web.app/)

<img src='https://github.com/WataruMaeda/react-firebase-boilerplate/blob/master/readme.assets/ss4.png' width='100%'> <img src='https://github.com/WataruMaeda/react-firebase-boilerplate/blob/master/readme.assets/ss1.png' width='33%'> <img src='https://github.com/WataruMaeda/react-firebase-boilerplate/blob/master/readme.assets/ss2.png' width='33%'> <img src='https://github.com/WataruMaeda/react-firebase-boilerplate/blob/master/readme.assets/ss3.png' width='33%'>

## About

We spend a large amount of time to setup a project; changing file structure, installing libraries, create reusable components and so on. The purpose of using the project is to minimize the redundant effort to setup a project from scratch. In the boilerplate, it contains only commonly-used libraries and the all setup done for you. 

This project is made based on [react-boilerplate](https://github.com/WataruMaeda/react-boilerplate)

Firebase is a google platform to help us to build an app quickly without building infrastructure. It's easy to use and most of the setup is simple and straightforward. But we still need to go through several steps to using their service. In this boilerplate, this kind of setup done for you. Also, most of the web app needs authentication. This template provides you simple signup/login, reset password page as well as set profile page. These pages are created for you and these pages are working with firebase auth service so that you don't need to create by youself from scratch.

In the demo, you can try it out the authentication function. Create your account with your email and password. After confirming your email address. Set a user name and profile image. Then you can go into the dashboard.


## How to Use

#### 1. Register your app

+ Go to [firebase console](https://console.firebase.google.com/u/0/) and create a project

  <img src='https://github.com/WataruMaeda/react-firebase-boilerplate/blob/master/readme.assets/step1.png' width='50%'>

+ Select 「Web」

  <img src='https://github.com/WataruMaeda/react-firebase-boilerplate/blob/master/readme.assets/step2.png' width='50%'>

+ Setup Authentication

  <img src='https://github.com/WataruMaeda/react-firebase-boilerplate/blob/master/readme.assets/step3.png' width='50%'>

+ Setup Storage

  <img src='https://github.com/WataruMaeda/react-firebase-boilerplate/blob/master/readme.assets/step4.png' width='50%'>

+ Add profile.png under default directory

  <img src='https://github.com/WataruMaeda/react-firebase-boilerplate/blob/master/readme.assets/step6.png' width='50%'>

+ Copy keys

  <img src='https://github.com/WataruMaeda/react-firebase-boilerplate/blob/master/readme.assets/step5.png' width='50%'>

#### 2. Setup boilerplate

+ Download the boilerplate from ***Download Zip*** button

+ Go to [firebase.js](https://github.com/WataruMaeda/react-firebase-boilerplate/blob/master/src/utils/firebase.js#L6-L12) and replace keys.

+ Install package using package manager tool

```
$ npm install
- or -
$ yarn install
```

+ Global install firebase tools (Skip if you done the step)

```
$  npm install -g firebase-tools
```

+ Login to your firebase account (Skip if you done the step)

```
$ firebase login
```

+ Setup firebase in the boilerplate

```
$ firebase init
$
$ ...

? Which Firebase CLI features do you want to set up for this folder? Press Space to select features, then Enter to confirm your choices. 
 ◯ Database: Deploy Firebase Realtime Database Rules
 ◯ Firestore: Deploy rules and create indexes for Firestore
 ◯ Functions: Configure and deploy Cloud Functions
 ◉ Hosting: Configure and deploy Firebase Hosting sites
❯◉ Storage: Deploy Cloud Storage security rules

=== Project Setup

? Please select an option: Use an existing project
i  Using project {your-project-id} ({your-project-name})

=== Hosting Setup 

? What do you want to use as your public directory? build
? Configure as a single-page app (rewrite all urls to /index.html)? No
? File build/404.html already exists. Overwrite? No
i  Skipping write of build/404.html
? File build/index.html already exists. Overwrite? No
i  Skipping write of build/index.html

=== Storage Setup

? What file should be used for Storage Rules? storage.rules

i  Writing configuration info to firebase.json...
i  Writing project information to .firebaserc...

✔  Firebase initialization complete!

```

+ Update firease.json. Add headers and rewrites.

```firease.json
{
  "hosting": {
    "public": "build",
    "headers": [
      {"source": "/service-worker.js", "headers": [{"key": "Cache-Control", "value": "no-cache"}]}
    ],
    "ignore": [
      "firebase.json",
      "**/.*",
      "**/node_modules/**"
    ],
    "rewrites": [
      {
        "source": "**",
        "destination": "/index.html"
      }
    ]
  },
  "storage": {
    "rules": "storage.rules"
  }
}
```

#### 3. Test

```
$ yarn build && firebase serve
- or -
$ npm build && firebase serve
```

#### 4. Deploy

```
$ yarn build && firebase deploy
- or -
$ npm build && firebase deploy
```

## Licence
This project is available under the MIT license. See the [LICENSE](https://github.com/WataruMaeda/react-native-boilerplate/blob/master/LICENSE) file for more info.
